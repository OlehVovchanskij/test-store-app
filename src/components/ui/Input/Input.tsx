import cn from 'clsx';
import { Text, TextInput, View } from 'react-native';
import { Typography } from '../Typography/Typography';

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className="w-full">
      {label && (
        <Typography variant="caption" className="mb-1 text-secondary">
          {label}
        </Typography>
      )}

      <TextInput
        {...props}
        placeholderTextColor="#9CA3AF"
        textAlignVertical="center"
        className={cn(
          ' rounded-xl border px-4 py-3 text-base leading-[0px]  text-text-primary',
          'border-border bg-white',
          error && 'border-danger',
          className
        )}
      />

      {error && <Text className="mt-1 text-xs text-danger">{error}</Text>}
    </View>
  );
}
