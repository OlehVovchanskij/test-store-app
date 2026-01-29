import { useBiometricStore } from '@/store/BiometricStore';
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';

export const AppLockProvider = ({ children }: { children: React.ReactNode }) => {
  const { enabled, load } = useBiometricStore();

  const [unlocked, setUnlocked] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    const authenticate = async () => {
      if (!enabled) {
        setUnlocked(true);
        setChecking(false);
        return;
      }

      const hasHardware = await LocalAuthentication.hasHardwareAsync();

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();

      if (!hasHardware || !isEnrolled) {
        Alert.alert('Біометрія недоступна', 'Увімкніть Face ID у налаштуваннях телефону');
        setUnlocked(false);
        setChecking(false);
        return;
      }

      const faceResult = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Підтвердьте Face ID',
        cancelLabel: 'Скасувати',
        disableDeviceFallback: true,
      });

      if (faceResult.success) {
        setUnlocked(true);
        setChecking(false);
        return;
      }

      const passcodeResult = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Введіть код телефону',
        disableDeviceFallback: false,
      });

      setUnlocked(passcodeResult.success);
      setChecking(false);
    };

    authenticate();
  }, [enabled]);

  if (checking) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!unlocked) {
    return <View className="flex-1 bg-black" />;
  }

  return <>{children}</>;
};
