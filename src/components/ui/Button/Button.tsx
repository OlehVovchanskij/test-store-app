import cn from 'clsx';
import { FC } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  textStyle?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary/90 active:bg-primary/100',
  secondary: 'bg-secondary/90 active:bg-secondary/100',
  outline: 'border border-primary bg-transparent',
  danger: 'bg-danger/90 active:bg-danger/100',
  ghost: 'bg-transparent',
};

const textVariants: Record<ButtonVariant, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  outline: 'text-primary',
  danger: 'text-white',
  ghost: 'text-primary',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-10 px-3',
  md: 'h-12 px-4',
  lg: 'h-14 px-6',
};

const textSizes: Record<ButtonSize, string> = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
};

const Button: FC<ButtonProps> = ({
  text,
  className,
  textStyle,
  variant = 'primary',
  size = 'md',
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      className={cn(
        ' items-center justify-center rounded-xl',
        variantStyles[variant],
        sizeStyles[size],
        disabled && 'opacity-50',
        className
      )}
      {...props}>
      <Text className={cn('font-signika', textVariants[variant], textSizes[size], textStyle)}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
