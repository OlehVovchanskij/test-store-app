import { Category } from '../types/category.types';
import { Product } from '../types/product.types';

export type ShopState = {
  isLoading: boolean;
  products: Product[];
  categories: Category[];
  categoryFilter: number | null;
  error: string | null;
};
export type ShopAction = {
  setCategoryFilter: (categoryId: number | null) => void;
  setCategories: (categories: Category[]) => void;
  setProducts: (products: Product[]) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
};
export type ShopStore = ShopState & ShopAction;
