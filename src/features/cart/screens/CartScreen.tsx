import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { View } from 'react-native';
import CartList from '../components/CartList/CartList';

export function CartScreen() {
  return (
    <ThemedView edges={['left', 'right']}>
      <View className="bg-secondary px-4 pb-6 pt-12">
        <Typography variant="h1" className="text-white">
          Cart
        </Typography>
      </View>
      <View className="flex-1">
        <CartList />
      </View>
    </ThemedView>
  );
}
