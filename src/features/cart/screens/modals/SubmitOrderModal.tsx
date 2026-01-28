import GoBackButton from '@/components/GoBackButton/GoBackButton';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { colors } from '@/theme';
import { Keyboard, Pressable, StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormCartList from '../../components/CartList/FormCartList';
import SubmitOrderForm from '../../components/SubmitOrderForm/SubmitOrderForm';
import { useCartStore } from '../../store/cartStore';

export const SubmitOrderModal = () => {
  const { totalAmount } = useCartStore();

  return (
    <ThemedView edges={['left', 'right']} className="flex-1 bg-white">
      <Pressable style={StyleSheet.absoluteFill} onPress={Keyboard.dismiss} />

      <KeyboardAwareScrollView
        enableOnAndroid
        extraScrollHeight={120}
        enableResetScrollToCoords={false}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}>
        <View className="mb-6 bg-secondary px-4 pb-6 pt-6">
          <GoBackButton className="mb-2" textClassName="text-white" color={colors.background} />

          <Typography className="text-2xl font-bold text-white">Submit Order</Typography>
        </View>

        <FormCartList />

        <Typography variant="h2" className="mb-2 px-4 text-text-primary">
          Total ${totalAmount.toFixed(2)}
        </Typography>

        <SubmitOrderForm />
      </KeyboardAwareScrollView>
    </ThemedView>
  );
};
