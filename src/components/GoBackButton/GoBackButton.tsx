import { useAppNavigation } from '@/hooks/useAppNavigation';
import { colors } from '@/theme';
import { MoveLeft } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../ui/Typography/Typography';

const GoBackButton = () => {
  const navigation = useAppNavigation();
  return (
    <View className="mb-4 ">
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        className="flex-row items-center gap-3">
        <MoveLeft size={24} color={colors.secondary} />
        <Typography variant="caption" className="text-[16px]">
          Go Back
        </Typography>
      </TouchableOpacity>
    </View>
  );
};

export default GoBackButton;
