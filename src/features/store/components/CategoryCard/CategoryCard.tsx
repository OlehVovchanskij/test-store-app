import { BLURHASH } from '@/constants/brulhash';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { Category } from '../../types/category.types';
const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <View className="mr-4 w-24 items-center rounded-lg bg-transparent p-4">
      <Image
        source={{ uri: category.image }}
        className="mb-2 h-16 w-16 rounded-full"
        placeholder={BLURHASH}
        style={{ marginBottom: 8, height: 64, width: 64, borderRadius: 32 }}
        contentFit="cover"
      />
      <Text className="text-center text-sm font-medium">{category.name}</Text>
    </View>
  );
};

export default CategoryCard;
