import * as LocalAuthentication from 'expo-local-authentication';
import { Alert, Switch, View } from 'react-native';

import { Typography } from '@/components/ui/Typography/Typography';
import { useBiometricStore } from '@/store/BiometricStore';

export const BiometricToggle = () => {
  const { enabled, setEnabled } = useBiometricStore();

  const toggle = async () => {
    const available =
      (await LocalAuthentication.hasHardwareAsync()) &&
      (await LocalAuthentication.isEnrolledAsync());

    if (!available) {
      Alert.alert('Недоступно', 'Біометрія не налаштована на пристрої');
      return;
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Підтвердьте дію',
    });

    if (auth.success) {
      await setEnabled(!enabled);
    }
  };

  return (
    <View className="flex-row items-center justify-between px-4 py-2">
      <Typography variant="h3" className=" pb-2 text-secondary">
        Biometric Authentication
      </Typography>
      <Switch value={enabled} onValueChange={toggle} />
    </View>
  );
};
