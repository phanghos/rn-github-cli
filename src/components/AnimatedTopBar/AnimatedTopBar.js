import React from 'react';
import Animated from 'react-native-reanimated';

export const AnimatedTopBar = ({ children, style }) => {
  return (
    <Animated.View
      style={[
        {
          width: '100%',
          position: 'absolute',
          zIndex: 2,
        },
        style,
      ]}>
      {children}
    </Animated.View>
  );
};
