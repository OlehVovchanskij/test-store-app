import Button from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { useAppNavigation } from '@/hooks/useAppNavigation';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import { useCartStore } from '../../store/cartStore';
import { submitOrderSchema } from './SubmitOrderForm.validator';

export const SubmitOrderForm = () => {
  const navigation = useAppNavigation();
  const { clearCart } = useCartStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(submitOrderSchema) });
  const onSubmit = (data: any) => {
    Alert.alert('Success', 'Order submitted successfully', [
      {
        text: 'OK',
        onPress: () => {
          clearCart();
          navigation.goBack();
        },
      },
    ]);
  };
  return (
    <View className="w-full items-start gap-3 px-4">
      <Controller
        control={control}
        name="fullName"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Full Name"
            onChangeText={onChange}
            error={errors.fullName?.message}
            value={value}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your full name"
          />
        )}
      />

      <Controller
        control={control}
        name="address"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Address"
            onChangeText={onChange}
            value={value}
            error={errors.address?.message}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your address"
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Phone number"
            onChangeText={(text) => onChange(text.replace(/[^0-9]/g, ''))}
            value={value}
            keyboardType="phone-pad"
            error={errors.phoneNumber?.message}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your phone number"
          />
        )}
      />
      <Button className="w-full" text="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default SubmitOrderForm;
