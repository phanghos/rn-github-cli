import React from 'react';
import Animated from 'react-native-reanimated';

export const Separator = ({
  height,
  marginHorizontal,
  marginVertical,
  style,
}) => (
  <Animated.View
    style={[
      {
        height: height || 1,
        backgroundColor: '#EBEBEB',
      },
      { marginHorizontal, marginVertical },
      style,
    ]}
  />
);
