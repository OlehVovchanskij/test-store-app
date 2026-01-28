import { FlatList, View } from 'react-native';

import { SwipeToDelete } from '@/components/SwipeToDelete/SwipeToDelete';
import { Typography } from '@/components/ui/Typography/Typography';
import cn from 'clsx';
import { useCartStore } from '../../store/cartStore';
import CartItem from '../CartItem/CartItem';
interface CartListProps {
  isOnSubmitOrder?: boolean;
}
const CartList = ({ isOnSubmitOrder }: CartListProps) => {
  const { items, removeItem } = useCartStore();
  return (
    <View
      className={cn('w-full bg-white', { 'flex-1': !isOnSubmitOrder, 'mb-2': isOnSubmitOrder })}>
      {isOnSubmitOrder && items.length === 0 && (
        <View className="flex-1 items-center justify-center ">
          <View className="text-center">
            <Typography variant="h3" className="mb-2 text-2xl font-bold text-secondary">
              Your cart is empty.
            </Typography>
          </View>
        </View>
      )}
      {isOnSubmitOrder && items.length > 0 && (
        <Typography variant="h3" className="mb-1 px-4 text-lg font-medium text-text-primary">
          Review your order before submitting.
        </Typography>
      )}
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => (
          <SwipeToDelete onDelete={() => removeItem(item.product.id)}>
            <CartItem item={item} />
          </SwipeToDelete>
        )}
      />
    </View>
  );
};

export default CartList;
