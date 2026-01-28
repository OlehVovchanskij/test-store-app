import Header from '@/components/ui/Header/Header';
import ThemedView from '@/components/ui/ThemedView/ThemedView';
import { Typography } from '@/components/ui/Typography/Typography';
import { Keyboard, Pressable, StyleSheet } from 'react-native';
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
        <Header text="Submit Order" withBackButton />

        <FormCartList />

        <Typography variant="h2" className="mb-2 px-4 text-text-primary">
          Total ${totalAmount.toFixed(2)}
        </Typography>

        <SubmitOrderForm />
      </KeyboardAwareScrollView>
    </ThemedView>
  );
};
