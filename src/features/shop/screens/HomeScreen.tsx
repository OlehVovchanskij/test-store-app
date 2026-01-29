import Header from '@/components/ui/Header/Header';
import { Input } from '@/components/ui/Input/Input';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { useState } from 'react';
import { View } from 'react-native';
import { CategoriesList } from '../components/CategoriesList/CategoriesList';
import { ProductsList } from '../components/ProductsList/ProductsList';
export const HomeScreen = () => {
  const [search, setSearch] = useState('');

  return (
    <ThemedView edges={['left', 'right']} className="">
      <Header text="Store">
        <Input
          placeholder="Search products..."
          value={search}
          onChangeText={setSearch}
          className="mt-3"
        />
      </Header>
      <View className="flex-1">
        <View className="w-full">
          <Typography variant="h2" className="mt-6 px-4 text-secondary">
            Categories
          </Typography>
          <CategoriesList />
        </View>
        <View className="flex-1 px-4">
          <Typography variant="h2" className="mt-6 text-secondary">
            Products
          </Typography>
          <ProductsList search={search} />
        </View>
      </View>
    </ThemedView>
  );
};
