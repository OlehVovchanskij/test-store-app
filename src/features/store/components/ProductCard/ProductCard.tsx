import { BLURHASH } from '@/constants/brulhash';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import { Product } from '../../types/product.types';
export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <View className="mb-5 w-[48%] rounded-2xl bg-white p-3">
      <Image
        source={{ uri: product.images[0] }}
        placeholder={BLURHASH}
        className="mb-2 h-48 w-full rounded-xl"
        style={{ marginBottom: 8, height: 192, width: '100%', borderRadius: 16 }}
        contentFit="cover"
      />

      <Text className="text-base font-semibold text-gray-900">{product.title}</Text>

      <Text className="mt-1 font-medium text-green-700">${product.price}</Text>
    </View>
  );
};
