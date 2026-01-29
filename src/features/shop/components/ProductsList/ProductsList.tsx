import { ActivityIndicator, FlatList, View } from 'react-native';

import { Typography } from '@/components/ui/Typography/Typography';
import { useDebounce } from '@/hooks/useDebounce';
import { useProducts } from '../../api/tanstack/product.query';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductsList = ({ search }: { search: string }) => {
  const debouncedValue = useDebounce(search, 500);
  const {
    data: products = [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProducts(debouncedValue);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (products.length === 0) {
    return (
      <View className="flex-1 items-center justify-center ">
        <Typography variant="h3" className="text-secondary">
          No products found.
        </Typography>
      </View>
    );
  }
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{
        justifyContent: 'space-between',
      }}
      numColumns={2}
      renderItem={({ item }) => <ProductCard product={item} />}
      onEndReached={() => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      }}
      onEndReachedThreshold={0.4}
      refreshing={isRefetching}
      onRefresh={refetch}
      ListFooterComponent={isFetchingNextPage ? <ActivityIndicator className="my-4" /> : null}
    />
  );
};
