import React from 'react';
import { View } from 'react-native';
import { Text } from '@components/Text';
import { Avatar } from '@components/Avatar';

export const Commit = ({
  commit: {
    commit: {
      message,
      author: { name: username },
    },
    author: { avatar_url: avatarUrl },
  },
}) => (
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
      <Avatar
        source={avatarUrl}
        size={15}
        style={{ marginRight: 6, borderRadius: 3 }}
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
