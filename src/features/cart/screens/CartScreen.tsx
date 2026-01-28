import Button from '@/components/ui/Button/Button';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { View } from 'react-native';
import CartList from '../components/CartList/CartList';
import { useCartStore } from '../store/cartStore';

export function CartScreen() {
  const { totalAmount } = useCartStore();
  return (
    <ThemedView edges={['left', 'right']} className="bg-white">
      <View className="bg-secondary px-4 pb-6 pt-12">
        <Typography variant="h1" className="text-white">
          Cart
        </Typography>
      </View>
      <View className="flex-1">
        <CartList />
      </View>
      <View className="w-full flex-row items-center justify-between rounded-t-3xl border-t-2 border-gray-200 bg-secondary/10  p-4">
        <Typography variant="h2">Total: ${totalAmount.toFixed(2)}</Typography>
        <Button className="w-1/3" variant="primary" text="Order now" />
      </View>
    </ThemedView>
  );
}
