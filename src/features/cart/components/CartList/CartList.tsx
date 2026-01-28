import { FlatList, View } from 'react-native';

import { SwipeToDelete } from '@/components/SwipeToDelete/SwipeToDelete';
import { useCartStore } from '../../store/cartStore';
import CartItem from '../CartItem/CartItem';

const CartList = () => {
  const { items, removeItem } = useCartStore();
  return (
    <View className="flex-1 bg-white">
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
