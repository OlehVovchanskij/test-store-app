import { BLURHASH } from '@/constants/brulhash';
import { Product } from '@/features/shop';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';
const CartItem = ({ item }: { item: { product: Product; quantity: number } }) => {
  return (
    <View className="flex-row items-center border-b border-gray-200 p-4">
      <View className="mb-2 ">
        <Image
          source={item.product.images[0]}
          style={{ width: 96, height: 64, borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 8 }}
          placeholder={BLURHASH}
          contentFit="cover"
        />
      </View>
      <View className="ml-4 flex-1 justify-center">
        <Text className="text-lg font-medium">{item.product.title}</Text>
        <Text className="text-gray-600">Quantity: {item.quantity}</Text>
        <Text className="font-semibold text-gray-800">
          Price: ${(item.product.price * item.quantity).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

export default CartItem;
