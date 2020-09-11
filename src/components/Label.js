import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';

export const Label = ({ color, text, style }) => (
  <View
    style={[
      {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        backgroundColor: `#${color}`,
        borderRadius: 4,
      },
      style,
    ]}>
    <Text
      style={{
        color: color !== 'ffffff' ? '#fff' : '#000',
      }}
      fontWeight="500">
      {text}
    </Text>
  </View>
);
