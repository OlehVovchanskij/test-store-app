import { View, Text } from 'react-native';
import React from 'react';
import Button from '@/components/ui/Button/Button';

const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-signika-bold">Welcome to the Home Screen</Text>
      <Button text="Click Me" />
    </View>
  );
};

export default HomeScreen;
