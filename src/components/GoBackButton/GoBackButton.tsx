import { useAppNavigation } from '@/hooks/useAppNavigation';
import { colors } from '@/theme';
import { MoveLeft } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../ui/Typography/Typography';
interface GoBackBtnProps {
  textClassName?: string;
  className?: string;
  color?: string;
}
const GoBackButton = ({ textClassName, className, color }: GoBackBtnProps) => {
  const navigation = useAppNavigation();
  return (
    <View className={className}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="flex-row items-center gap-3">
        <MoveLeft size={24} color={color || colors.secondary} />
        <Typography variant="caption" className={`text-[16px] text-secondary ${textClassName}`}>
          Go Back
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;
