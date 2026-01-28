import { Typography } from '@/components/ui/Typography/Typography';
import { BLURHASH } from '@/constants/brulhash';
import { Product } from '@/features/shop';
import { Image } from 'expo-image';
import { MinusCircle, PlusCircle } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useCartStore } from '../../store/cartStore';
const CartItem = ({ item }: { item: { product: Product; quantity: number } }) => {
  const { setCount } = useCartStore();
  return (
    <View className="flex-row items-center border-b border-gray-200 p-4">
      <View className="min-w-0 flex-1 flex-row gap-4">
        <Image
          source={item.product.images[0]}
          style={{
            width: 96,
            height: 64,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: 8,
          }}
          placeholder={BLURHASH}
          contentFit="cover"
        />

        <View className="min-w-0 flex-1 justify-center">
          <Text numberOfLines={2} ellipsizeMode="tail" className="text-lg font-medium">
            {item.product.title}
          </Text>

          <Text className="text-gray-600">Quantity: {item.quantity}</Text>

          <Text className="font-semibold text-gray-800">
            Price: ${(item.product.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      </View>

      <View className="ml-3 flex-row items-center gap-3">
        <Pressable onPress={() => setCount(item.product.id, item.quantity - 1)}>
          <MinusCircle size={28} color="#EF4444" />
        </Pressable>

        <Typography variant="h2">{item.quantity}</Typography>

        <Pressable onPress={() => setCount(item.product.id, item.quantity + 1)}>
          <PlusCircle size={28} color="#10B981" />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
