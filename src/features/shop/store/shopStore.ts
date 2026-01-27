import { create } from 'zustand';
import { ShopStore } from './shopStore.types';
export const useShopStore = create<ShopStore>((set, get) => ({
  isLoading: false,
  cart: [],
  categories: [],
  categoryFilter: null,
  error: null,
  setCategoryFilter: (categoryId) =>
    set(() => {
      console.log(categoryId);
      return { categoryFilter: categoryId };
    }),
  setCategories: (categories) => set(() => ({ categories })),

  setLoading: (isLoading) => set(() => ({ isLoading })),
  setError: (error) => set(() => ({ error })),
}));
