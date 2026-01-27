import { useInfiniteQuery } from '@tanstack/react-query';
import { useShopStore } from '../../store/shopStore';
import { Product } from '../../types/product.types';
import { getProducts } from '../shop.api';

const LIMIT = 20;

export const useProducts = () => {
  const { categoryFilter } = useShopStore();

  return useInfiniteQuery<Product[], Error, Product[], ['products', number | null], number>({
    queryKey: ['products', categoryFilter],

    queryFn: ({ pageParam = 0 }) => getProducts(pageParam, LIMIT, categoryFilter),

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
