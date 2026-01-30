import GoBackButton from '@/components/GoBackButton/GoBackButton';
import Button from '@/components/ui/Button/Button';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { BLURHASH } from '@/constants/brulhash';
import { useCartStore } from '@/features/cart';
import { RootStackParamList } from '@/navigation/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { useProductById } from '../api/tanstack/product.query';
import ShareProduct from '../components/ShareProduct/ShareProduct';

type RouteProps = RouteProp<RootStackParamList, 'ProductDetails'>;
export const ProductDetailsScreen = () => {
  const { addItem } = useCartStore();
  const route = useRoute<RouteProps>();
  const { productId } = route.params;
  const { data: product, isLoading } = useProductById(productId);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <ThemedView className="flex-1 px-4">
      <GoBackButton />
      <ScrollView className="flex-1">
        <Image
          source={{ uri: product?.images[0] }}
          placeholder={BLURHASH}
          contentFit="cover"
          style={{
            width: '100%',
            height: 250,
            borderWidth: 1,
            borderColor: '#e5e7eb',
            borderRadius: 16,
          }}
        />
        <View className=" justify-between">
          <Typography variant="h1" className="mt-4 text-foreground">
            {product?.title}
          </Typography>
          <Typography variant="h2" className="mt-2 text-green-700">
            ${product?.price}
          </Typography>
        </View>
        <Typography variant="body" className="mt-4 text-secondary">
          {product?.description}
        </Typography>
      </ScrollView>
      <View className="mb-4 flex-row items-center gap-2 ">
        <Button
          className=" flex-1"
          onPress={() => addItem(product!)}
          text="Add to cart"
          textStyle="font-signika-bold"
        />
        <ShareProduct productId={productId} />
      </View>
    </ThemedView>
  );
};
