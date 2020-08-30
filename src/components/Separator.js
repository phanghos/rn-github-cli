import React from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';

export const Separator = ({
  height,
  marginHorizontal,
  marginVertical,
  style,
}) => {
  return (
    <Animated.View
      style={[
        {
          height: height || 1,
          backgroundColor: '#EBEBEB',
        },
        { marginHorizontal, marginVertical },
        style,
      ]}></Animated.View>
  );
};
