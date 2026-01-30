import * as Linking from 'expo-linking';
import { Share2 } from 'lucide-react-native';
import { Share, TouchableOpacity } from 'react-native';
const ShareProduct = ({ productId }: { productId: number }) => {
  const onShare = async () => {
    const url = Linking.createURL(`product/${productId}`);

    await Share.share({
      message: `Share this product: ${url}`,
    });
  };
  return (
    <TouchableOpacity
      onPress={onShare}
      className="items-center justify-center rounded-full bg-blue-500 p-4">
      <Share2 color="white" size={20} />
    </TouchableOpacity>
  );
};

export default ShareProduct;
