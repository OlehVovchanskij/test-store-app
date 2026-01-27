import { Typography } from '@/components/ui/Typography/Typography';
import { BLURHASH } from '@/constants/brulhash';
import cn from 'clsx';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';
import { useShopStore } from '../../store/shopStore';
import { Category } from '../../types/category.types';
const CategoryCard = ({ category }: { category: Category }) => {
  const { setCategoryFilter, categoryFilter } = useShopStore();
  return (
    <Pressable
      className={cn(' mr-4 flex-1 items-center justify-center', {
        'opacity-100': categoryFilter === category.id,
        'opacity-60': categoryFilter !== category.id,
      })}
      onPress={() => setCategoryFilter(category.id)}>
      <Image
        source={{ uri: category.image }}
        placeholder={BLURHASH}
        style={{ marginBottom: 8, height: 64, width: 64, borderRadius: 32 }}
        contentFit="cover"
      />
      <Typography
        variant="caption"
        className={cn(
          {
            ' text-primary': categoryFilter === category.id,
            'text-secondary': categoryFilter !== category.id,
          },
          'font-signika-semibold'
        )}>
        {category.name}
      </Typography>
    </Pressable>
  );
};

export default CategoryCard;
