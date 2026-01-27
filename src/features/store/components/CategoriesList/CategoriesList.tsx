import { ActivityIndicator, FlatList, View } from 'react-native';
import { useCategories } from '../../api/tanstack/categories.query';
import CategoryCard from '../CategoryCard/CategoryCard';

export const CategoriesList = () => {
  const { data: categories = [], isLoading } = useCategories();
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16 }}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CategoryCard category={item} />}
    />
  );
};
