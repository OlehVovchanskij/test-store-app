import { FlatList, View } from 'react-native';

import { useCartStore } from '../../store/cartStore';
import CartItem from '../CartItem/CartItem';

const CartList = () => {
  const { items } = useCartStore();
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={items}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
    </View>
  );
};

export default CartList;
