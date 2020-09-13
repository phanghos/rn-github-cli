import React from 'react';
import { View } from 'react-native';
import { Text } from '@components';

export const UserStats = ({ followers, following }) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={{ fontSize: 16 }} fontWeight="500">
      {`${followers} `}
      <Text fontWeight="300">following</Text>
    </Text>
    <View
      style={{
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: '#000',
        marginHorizontal: 8,
        alignSelf: 'center',
      }}
    />
    <Text style={{ fontSize: 16 }} fontWeight="500">
      {`${following} `}
      <Text fontWeight="300">followers</Text>
    </Text>
  </View>
);
