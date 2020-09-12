import Animated, { useValue, interpolate } from 'react-native-reanimated';
import { onScrollEvent } from 'react-native-redash';
import { headerHeight } from '@constants';

export const useMovableHeader = () => {
  const y = useValue(0);
  const onlyPositiveY = interpolate(y, {
    inputRange: [-1, 0, Number.MAX_SAFE_INTEGER],
    outputRange: [0, 0, Number.MAX_SAFE_INTEGER],
  });
  const clampedY = Animated.diffClamp(onlyPositiveY, 0, headerHeight);
  const translationY = interpolate(clampedY, {
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
  });
  const opacity = interpolate(clampedY, {
    inputRange: [0, headerHeight],
    outputRange: [1, 0],
  });
  const fontSize = interpolate(clampedY, {
    inputRange: [0, headerHeight],
    outputRange: [24, 14],
  });
  const onScroll = onScrollEvent({ y });

  return { y, translationY, opacity, fontSize, onScroll };
};
