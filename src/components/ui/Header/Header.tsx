import GoBackButton from '@/components/GoBackButton/GoBackButton';
import { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { Typography } from '../Typography/Typography';
interface HeaderProps extends PropsWithChildren {
  text: string;
  withBackButton?: boolean;
}
const Header = ({ text, children, withBackButton }: HeaderProps) => {
  return (
    <View className="bg-secondary px-4 pb-6 pt-12">
      {withBackButton && <GoBackButton className="mb-2" textClassName="text-white" color="white" />}
      <Typography variant="h1" className="text-white">
        {text}
      </Typography>
      {children}
    </View>
  );
};

export default Header;
