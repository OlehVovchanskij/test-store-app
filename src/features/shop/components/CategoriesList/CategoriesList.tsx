import { memo } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { useCategories } from '../../api/tanstack/categories.query';

import AllCategoriesCard from '../CategoryCard/AllCategoriesCard';
import CategoryCard from '../CategoryCard/CategoryCard';

export const CategoriesList = memo(() => {
  const { data: categories = [], isLoading } = useCategories();
  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }
  return (
    <View className="w-full">
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => <AllCategoriesCard />}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
        ItemSeparatorComponent={() => <View className="w-4" />}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CategoryCard category={item} />}
      />
    </View>
  );
});
