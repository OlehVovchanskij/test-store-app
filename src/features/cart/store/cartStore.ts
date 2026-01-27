import { SECURESTORAGE_KEYS } from '@/constants/storage';
import * as SecureStore from 'expo-secure-store';
import { create } from 'zustand';
import { CartAction, CartState } from './cartStore.types';
export const useCartStore = create<CartState & CartAction>((set, get) => ({
  items: [],
  totalAmount: 0,
  addItem: async (product) => {
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);

      let updatedCart;

      if (existingItem) {
        updatedCart = state.items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [...state.items, { product, quantity: 1 }];
      }

      return { items: updatedCart };
    });
    get().calculateTotal();
    await SecureStore.setItemAsync(SECURESTORAGE_KEYS.CART, JSON.stringify(get().items));
  },
  setCartItems: async () => {
    const cart = await SecureStore.getItemAsync(SECURESTORAGE_KEYS.CART);
    set(() => ({ items: cart ? JSON.parse(cart) : [] }));
  },
  removeItem: async (productId) => {
    set((state) => {
      const updatedCart = state.items.filter((item) => item.product.id !== productId);
      return { items: updatedCart };
    });
    await SecureStore.setItemAsync(SECURESTORAGE_KEYS.CART, JSON.stringify(get().items));
  },
  clearCart: async () => {
    set(() => ({ items: [] }));
    await SecureStore.deleteItemAsync(SECURESTORAGE_KEYS.CART);
  },
  calculateTotal: () => {
    const total = get().items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    set(() => ({ totalAmount: total }));
  },
}));
