import cn from 'clsx';
import { Text, TextProps } from 'react-native';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small' | 'error';

interface TypographyProps extends TextProps {
  variant?: Variant;
}

export function Typography({ variant = 'body', className, ...props }: TypographyProps) {
  const styles = {
    h1: 'text-3xl font-signika-bold text-secondary',
    h2: 'text-2xl font-signika-bold ',
    h3: 'text-xl font-signika-semibold text-primary',
    body: 'text-base ',
    caption: 'text-sm font-signika-medium',
    small: 'text-xs text-muted',
    error: 'text-danger font-signika-medium text-base',
  };

  return <Text {...props} className={cn(className, styles[variant])} />;
}
