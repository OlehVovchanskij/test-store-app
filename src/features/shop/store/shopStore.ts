import { create } from 'zustand';
import { ShopStore } from './shopStore.types';

export const useShopStore = create<ShopStore>((set) => ({
  isLoading: false,
  products: [],
  categories: [],
  categoryFilter: null,
  error: null,
  setCategoryFilter: (categoryId) =>
    set(() => {
      console.log(categoryId);
      return { categoryFilter: categoryId };
    }),
  setCategories: (categories) => set(() => ({ categories })),
  setProducts: (products) => set(() => ({ products })),
  setLoading: (isLoading) => set(() => ({ isLoading })),
  setError: (error) => set(() => ({ error })),
}));
