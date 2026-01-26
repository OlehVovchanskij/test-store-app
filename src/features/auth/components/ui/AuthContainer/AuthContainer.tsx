import { View, Text, Dimensions } from 'react-native';
import React, { useEffect } from 'react';

import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Typography } from '@/components/ui/Typography/Typography';
import AuthForm from '../../AuthForm/AuthForm';
const HEIGHT = Dimensions.get('window').height;
export const AuthContainer = () => {
  const translateY = useSharedValue(HEIGHT);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });
  useEffect(() => {
    translateY.value = withSpring(0, { damping: 100, stiffness: 150 });
  }, []);
  return (
    <Animated.View
      style={animatedStyle}
      className="w-full items-center rounded-t-3xl bg-white p-8 ">
      <Typography variant="h1" className="text-secondary mb-2">
        Welcome Back
      </Typography>
      <Typography variant="body" className="text-secondary/70 mb-8 text-center">
        Please login to your account
      </Typography>

      <AuthForm />
    </Animated.View>
  );
};
