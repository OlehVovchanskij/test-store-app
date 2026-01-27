import { Typography } from '@/components/ui/Typography/Typography';
import { BLURHASH } from '@/constants/brulhash';
import { Image } from 'expo-image';
import { Pressable } from 'react-native';
import { useShopStore } from '../../store/shopStore';
import { Category } from '../../types/category.types';
const CategoryCard = ({ category }: { category: Category }) => {
  const { setCategoryFilter } = useShopStore();
  return (
    <Pressable
      className="flex-1 items-center justify-center"
      onPress={() => setCategoryFilter(category.id)}>
      <Image
        source={{ uri: category.image }}
        placeholder={BLURHASH}
        style={{ marginBottom: 8, height: 64, width: 64, borderRadius: 32 }}
        contentFit="cover"
      />
      <Typography variant="caption" className=" text-secondary">
        {category.name}
      </Typography>
    </Pressable>
  );
};

export default CategoryCard;
