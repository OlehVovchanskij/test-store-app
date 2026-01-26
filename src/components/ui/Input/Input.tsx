import { TextInput, View, Text } from 'react-native';
import cn from 'clsx';

interface InputProps extends React.ComponentProps<typeof TextInput> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className="w-full">
      {label && <Text className="text-text-secondary mb-1 text-sm">{label}</Text>}

      <TextInput
        {...props}
        placeholderTextColor="#9CA3AF"
        className={cn(
          'text-text-primary h-12 rounded-xl border px-4 text-base',
          'border-border bg-white',
          error && 'border-danger',
          className
        )}
      />

      {error && <Text className="text-danger mt-1 text-xs">{error}</Text>}
    </View>
  );
}
