import { BLURHASH } from '@/constants/brulhash';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { Image } from 'expo-image';
import { Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Product } from '../../types/product.types';
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const ProductCard = ({ product }: { product: Product }) => {
  const navigation = useAppNavigation();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));
  return (
    <AnimatedPressable
      onPressIn={() => {
        scale.value = withSpring(0.85);
      }}
      onPressOut={() => {
        scale.value = withSpring(1);
      }}
      style={animatedStyle}
      onPress={() => navigation.navigate('ProductDetails', { product: product })}
      className="bg-card mb-5 w-[48%] rounded-2xl border-[1px] border-border p-3">
      <Image
        source={{ uri: product.images[0] }}
        placeholder={BLURHASH}
        className="mb-2 h-48 w-full rounded-xl"
        style={{ marginBottom: 8, height: 192, width: '100%', borderRadius: 16 }}
        contentFit="cover"
      />

      <Text className="text-base font-semibold text-primary">{product.title}</Text>

      <Text className="mt-1 font-medium text-green-700">${product.price}</Text>
    </AnimatedPressable>
  );
};
