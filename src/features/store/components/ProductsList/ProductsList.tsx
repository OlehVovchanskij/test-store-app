import { ActivityIndicator, FlatList, View } from 'react-native';

import { useProducts } from '../../api/tanstack/product.query';
import { ProductCard } from '../ProductCard/ProductCard';

export const ProductsList = () => {
  const {
    data: products = [],
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
    isRefetching,
  } = useProducts();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <FlatList
      data={products}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
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
