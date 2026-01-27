import { Typography } from '@/components/ui/Typography/Typography';
import { Pressable, Text, View } from 'react-native';
import { useShopStore } from '../../store/shopStore';

const AllCategoriesCard = () => {
  const { setCategoryFilter } = useShopStore();
  return (
    <Pressable
      className=" mr-4 flex-1 items-center justify-center"
      onPress={() => setCategoryFilter(null)}>
      <View className="mb-2 h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
        <Text className="text-center text-sm font-medium text-secondary">ALL</Text>
      </View>
      <Typography variant="caption" className=" text-secondary">
        All
      </Typography>
    </Pressable>
  );
};

export default AllCategoriesCard;
