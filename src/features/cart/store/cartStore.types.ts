import { Product } from '@/features/shop';

export type CartItem = {
  product: Product;
  quantity: number;
};
export type CartState = {
  items: CartItem[];
  totalAmount: number;
};
export type CartAction = {
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  calculateTotal: () => void;
  setCartItems: () => void;
};
