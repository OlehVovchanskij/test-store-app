import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { RootStackParamList } from './types';

import { useAuthStore } from '@/features/auth';
import { useCartStore } from '@/features/cart';
import { ProductDetailsScreen } from '@/features/shop/screens/ProductDetailsScreen';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { AppTabs } from './AppTabs';
import { AuthStack } from './AuthStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  const { isAuthenticated, fetchMe, isLoading } = useAuthStore();
  const { setCartItems } = useCartStore();
  useEffect(() => {
    setCartItems();
    fetchMe();
  }, []);
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="App" component={AppTabs} />
            <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
