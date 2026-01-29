import cn from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
type ThemedViewProps = {
  className?: string;
  edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
};
type Props = PropsWithChildren<ThemedViewProps>;
const ThemedView: FC<Props> = ({ children, className, edges }) => {
  return (
    <SafeAreaView edges={edges} className={cn('bg-background flex-1', className)}>
      {children}
    </SafeAreaView>
  );
};

export default ThemedView;
