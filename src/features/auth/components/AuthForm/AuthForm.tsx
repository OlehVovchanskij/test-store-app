import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { loginSchema } from './AuthForm.validator';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@/components/ui/Typography/Typography';
import { Input } from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { login } from '../../api/auth.api';
import { LoginCredentials } from '../../types';
import { useAuthStore } from '../../store/AuthStore';
const AuthForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data: LoginCredentials) => {
    login(data);
  };
  const { error } = useAuthStore();
  return (
    <View className="w-full items-start">
      {error && (
        <Typography variant="error" className="w-full text-center">
          {error}
        </Typography>
      )}
      <Typography variant="body" className="text-secondary font-signika-medium mb-1">
        username
      </Typography>
      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            error={errors.username?.message}
            value={value}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your username"
          />
        )}
      />
      <Typography variant="body" className="text-secondary font-signika-medium mb-1 mt-4">
        password
      </Typography>

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            secureTextEntry={true}
            onChangeText={onChange}
            value={value}
            error={errors.password?.message}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your password"
          />
        )}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        textStyle="text-secondary font-signika-semibold "
        className=" mb-10 mt-6"
        text="Login"
      />
    </View>
  );
};

export default AuthForm;
