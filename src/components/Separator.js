import React from 'react';
import {View} from 'react-native';

export const Separator = ({height, marginHorizontal, marginVertical}) => {
  return (
    <View
      style={[
        {
          height: height || 1,
          backgroundColor: '#EBEBEB',
        },
        {marginHorizontal, marginVertical},
      ]}></View>
  );
};
