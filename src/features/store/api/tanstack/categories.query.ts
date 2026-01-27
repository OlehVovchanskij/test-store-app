import { useQuery } from '@tanstack/react-query';
import { Category } from '../../types/category.types';
import { getCategories } from '../store.api';

export const useCategories = () => {
  return useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });
};
