import { Text } from 'react-native';
import Swipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Animated, { SharedValue, useAnimatedStyle } from 'react-native-reanimated';

type Props = {
  children: React.ReactNode;
  onDelete: () => void;
};

export const SwipeToDelete = ({ children, onDelete }: Props) => {
  const renderRightActions = (progress: SharedValue<number>, dragX: SharedValue<number>) => {
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        {
          translateX: dragX.value + 80,
        },
      ],
    }));

    return (
      <Animated.View style={animatedStyle} className="items-end justify-center bg-danger px-6">
        <Text className="font-bold text-white">Delete</Text>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      overshootRight={false}
      rightThreshold={60}
      friction={2}
      onSwipeableOpen={onDelete}>
      {children}
    </Swipeable>
  );
};
