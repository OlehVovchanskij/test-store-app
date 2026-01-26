import { TouchableWithoutFeedback, Keyboard, Pressable, StyleSheet } from 'react-native';
import Animated, {
  KeyboardState,
  useAnimatedKeyboard,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { Image } from 'expo-image';
import React from 'react';
import ThemedView from '@/components/ui/ThemedView/ThemedView';

import { AuthContainer } from '@/features/auth';
import { BLURHASH } from '@/constants/brulhash';

export const LoginScreen = () => {
  const keyboard = useAnimatedKeyboard();

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: -keyboard.height.value }],
  }));

  return (
    <ThemedView
      edges={['top', 'left', 'right']}
      className="bg-secondary/70 flex-1 items-center justify-end ">
      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6quLP6ko2l5S875qeuP5G-obJo2ad3jtY-g&s',
        }}
        placeholder={BLURHASH}
        contentFit="cover"
        style={StyleSheet.absoluteFill}
      />
      <Pressable style={StyleSheet.absoluteFill} onPress={Keyboard.dismiss} />

      <Animated.View className="w-full" style={animatedStyle}>
        <AuthContainer />
      </Animated.View>
    </ThemedView>
  );
};
