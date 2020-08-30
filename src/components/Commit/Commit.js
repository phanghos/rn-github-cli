import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../../components';

export const Commit = ({
  commit: {
    commit: {
      message,
      author: { name: username },
    },
    author: { avatar_url: avatarUrl },
  },
}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
      }}>
      <Text numberOfLines={1} style={{ marginBottom: 4 }}>
        {message}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: avatarUrl }}
          style={{
            width: 15,
            height: 15,
            borderRadius: 3,
            marginRight: 6,
            alignSelf: 'center',
          }}
        />
        <Text fontWeight="500">
          {username}
          <Text style={{ color: '#696969', fontWeight: 'normal' }}>
            {' '}
            authored
          </Text>
        </Text>
      </View>
    </View>
  );
};
