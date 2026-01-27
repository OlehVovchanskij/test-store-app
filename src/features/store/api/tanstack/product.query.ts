import { useInfiniteQuery } from '@tanstack/react-query';
import { Product } from '../../types/product.types';
import { getProducts } from '../store.api';

const LIMIT = 20;

export const useProducts = () => {
  return useInfiniteQuery<Product[], Error, Product[], string[], number>({
    queryKey: ['products'],

    queryFn: ({ pageParam = 0 }) => getProducts(pageParam, LIMIT),

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < LIMIT) {
        return undefined;
      }

      return allPages.length * LIMIT;
    },
    select: (data) => data.pages.flatMap((page) => page),
  });
};
