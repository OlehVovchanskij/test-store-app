import { Category } from '../types/category.types';
import { Product } from '../types/product.types';
import { storeApi } from './shop.config';

export const getProducts = async (
  offset: number,
  limit: number,
  categoryFilter: number | null
): Promise<Product[]> => {
  const { data } = await storeApi.get<Product[]>('/products', {
    params: {
      offset,
      limit,
      categoryId: categoryFilter,
    },
  });

  return data;
};
export const getCategories = async (): Promise<Category[]> => {
  const { data } = await storeApi.get('/categories');
  return data;
};
