import { Typography } from '@/components/ui/Typography/Typography';
import cn from 'clsx';
import { Pressable, Text, View } from 'react-native';
import { useShopStore } from '../../store/shopStore';
const AllCategoriesCard = () => {
  const { setCategoryFilter, categoryFilter } = useShopStore();

  return (
    <Pressable
      className={cn(' mr-4 flex-1 items-center justify-center', {
        'opacity-100': categoryFilter === null,
        'opacity-60': categoryFilter !== null,
      })}
      onPress={() => setCategoryFilter(null)}>
      <View className="mb-2 h-16 w-16 items-center justify-center rounded-full bg-secondary/30">
        <Text className="text-center text-sm font-medium text-secondary">ALL</Text>
      </View>
      <Typography
        variant="caption"
        className={cn(
          {
            ' text-primary': categoryFilter === null,
            'text-secondary': categoryFilter !== null,
          },
          'font-signika-semibold'
        )}>
        All
      </Typography>
    </Pressable>
  );
};

export default AllCategoriesCard;
