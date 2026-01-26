import './global.css';
import { useFonts } from 'expo-font';
import { Navigation } from '@/navigation';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded] = useFonts({
    SignikaRegular: require('./assets/fonts/SignikaNegative-Regular.ttf'),
    SignikaMedium: require('./assets/fonts/SignikaNegative-Medium.ttf'),
    SignikaSemiBold: require('./assets/fonts/SignikaNegative-SemiBold.ttf'),
    SignikaBold: require('./assets/fonts/SignikaNegative-Bold.ttf'),
    SignikaLight: require('./assets/fonts/SignikaNegative-Light.ttf'),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
