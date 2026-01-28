import Button from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/Input/Input';
import { Typography } from '@/components/ui/Typography/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { useAuthStore } from '../../store/AuthStore';
import { LoginCredentials } from '../../types';
import { loginSchema } from './AuthForm.validator';
const AuthForm = () => {
  const { login } = useAuthStore();
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

      <Controller
        control={control}
        name="username"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Username"
            onChangeText={onChange}
            error={errors.username?.message}
            value={value}
            className="w-full rounded border border-gray-300 p-2"
            placeholder="Enter your username"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <Input
            label="Password"
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
        textStyle="text-secondary font-signika-semibold"
        className=" mb-10 mt-6 w-full"
        text="Login"
      />
    </View>
  );
};

export default AuthForm;
