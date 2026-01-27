import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { View } from 'react-native';
import { CategoriesList } from '../components/CategoriesList/CategoriesList';
import { ProductsList } from '../components/ProductsList/ProductsList';
export const HomeScreen = () => {
  return (
    <ThemedView edges={['left', 'right']} className="">
      <View className="bg-secondary px-4 pb-6 pt-12">
        <Typography variant="h1" className="text-white">
          Store
        </Typography>
      </View>
      <Typography variant="h2" className="mt-6 px-4">
        Categories
      </Typography>
      <CategoriesList />
      <Typography variant="h2" className="mt-6 px-4">
        Products
      </Typography>
      <ProductsList />
    </ThemedView>
  );
};
