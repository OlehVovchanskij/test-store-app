import { Category } from '../types/category.types';
import { Product } from '../types/product.types';
import { storeApi } from './store.config';

export const getProducts = async (offset: number, limit: number): Promise<Product[]> => {
  const { data } = await storeApi.get<Product[]>('/products', {
    params: {
      offset,
      limit,
    },
  });

  return data;
};
export const getCategories = async (): Promise<Category[]> => {
  const { data } = await storeApi.get('/categories');
  return data;
};
