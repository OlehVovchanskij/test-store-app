import GoBackButton from '@/components/GoBackButton/GoBackButton';
import Button from '@/components/ui/Button/Button';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { BLURHASH } from '@/constants/brulhash';
import { RootStackParamList } from '@/navigation/types';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Image } from 'expo-image';
import { ScrollView, View } from 'react-native';

type RouteProps = RouteProp<RootStackParamList, 'ProductDetails'>;
export const ProductDetailsScreen = () => {
  const route = useRoute<RouteProps>();
  const { product } = route.params;
  return (
    <ThemedView className="flex-1 px-4">
      <GoBackButton />
      <ScrollView className="flex-1">
        <Image
          source={{ uri: product.images[0] }}
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
        <View className="flex-row justify-between">
          <Typography variant="h1" className="mt-4">
            {product.title}
          </Typography>
          <Typography variant="h2" className="mt-2 text-green-700">
            ${product.price}
          </Typography>
        </View>
        <Typography variant="body" className="mt-4 text-gray-700">
          {product.description}
        </Typography>
      </ScrollView>
      <Button
        className="mb-4"
        onPress={() => {}}
        text="Add to cart"
        textStyle="font-signika-bold"
      />
    </ThemedView>
  );
};
