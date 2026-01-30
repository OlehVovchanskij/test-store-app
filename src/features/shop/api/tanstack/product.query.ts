import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useShopStore } from '../../store/shopStore';
import { Product } from '../../types/product.types';
import { getProductById, getProducts } from '../shop.api';

const LIMIT = 20;

export const useProducts = (searchValue: string) => {
  const { categoryFilter } = useShopStore();

  return useInfiniteQuery<Product[], Error, Product[], ['products', number | null, string], number>(
    {
      queryKey: ['products', categoryFilter, searchValue],

      queryFn: ({ pageParam = 0 }) => getProducts(pageParam, LIMIT, categoryFilter, searchValue),

      initialPageParam: 0,

      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.length < LIMIT) {
          return undefined;
        }

        return allPages.length * LIMIT;
      },
      select: (data) => data.pages.flatMap((page) => page),
    }
  );
};
export const useProductById = (productId: number) => {
  return useQuery({
    queryKey: ['product', productId],
    queryFn: async () => {
      return await getProductById(productId);
    },
  });
};
