import { Typography } from '@/components/ui/Typography/Typography';
import { View } from 'react-native';
import { useCartStore } from '../../store/cartStore';
import CartItem from '../CartItem/CartItem';

const FormCartList = () => {
  const { items } = useCartStore();
  return (
    <View className="bg-background mb-2 w-full py-2">
      {items.length === 0 && (
        <View className="flex-1 items-center justify-center ">
          <View className="text-center">
            <Typography variant="h3" className="mb-2 text-2xl font-bold text-secondary">
              Your cart is empty.
            </Typography>
          </View>
        </View>
      )}
      {items.length > 0 && (
        <Typography variant="h3" className="mb-1 px-4 text-lg font-medium text-primary">
          Review your order before submitting.
        </Typography>
      )}
      {items.map((item, ind) => (
        <CartItem key={ind} item={item} />
      ))}
    </View>
  );
};

export default FormCartList;
