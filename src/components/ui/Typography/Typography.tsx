import { Text, TextProps } from 'react-native';
import cn from 'clsx';

type Variant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'small' | 'error';

interface TypographyProps extends TextProps {
  variant?: Variant;
}

export function Typography({ variant = 'body', className, ...props }: TypographyProps) {
  const styles = {
    h1: 'text-3xl font-signika-bold text-text-primary',
    h2: 'text-2xl font-signika-bold text-text-primary',
    h3: 'text-xl font-signika-semibold text-text-primary',
    body: 'text-base text-text-primary',
    caption: 'text-sm text-text-secondary',
    small: 'text-xs text-text-muted',
    error: 'text-danger font-signika-medium text-base',
  };

  return <Text {...props} className={cn(styles[variant], className)} />;
}
