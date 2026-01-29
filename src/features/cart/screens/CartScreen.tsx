import Button from '@/components/ui/Button/Button';
import Header from '@/components/ui/Header/Header';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { View } from 'react-native';
import CartList from '../components/CartList/CartList';
import { useCartStore } from '../store/cartStore';

export function CartScreen() {
  const { totalAmount } = useCartStore();
  const navigation = useAppNavigation();
  return (
    <ThemedView edges={['left', 'right']} className="bg-background">
      <Header text="Your Cart" />
      <View className=" flex-1">
        <CartList />
      </View>
      <View className="w-full flex-row items-center  justify-between rounded-t-3xl border-2 border-b-0 border-secondary bg-secondary/20  p-4">
        <Typography variant="h2" className="text-secondary">
          Total: ${totalAmount.toFixed(2)}
        </Typography>
        <Button
          size="md"
          variant="primary"
          text="Order now"
          onPress={() => navigation.navigate('SubmitOrder')}
          disabled={totalAmount === 0}
        />
      </View>
    </ThemedView>
  );
}
