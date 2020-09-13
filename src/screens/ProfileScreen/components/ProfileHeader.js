import React from 'react';
import { View, Image } from 'react-native';
import { Text } from '@components';
import { UserStats } from './UserStats';

export const ProfileHeader = ({ user }) => {
  if (!user) return null;

  const {
    avatar_url: avatarUrl,
    name,
    login,
    location,
    followers,
    following,
  } = user;
  return (
    <View>
      <View style={{ flexDirection: 'row', marginBottom: 16 }}>
        <Image
          source={{ uri: avatarUrl }}
          style={{
            width: 60,
            height: 60,
            alignSelf: 'center',
            marginRight: 24,
            borderRadius: 8,
          }}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, marginBottom: 2 }} fontWeight="bold">
            {name}
          </Text>
          <Text fontWeight="200">{login}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, marginBottom: 16 }} fontWeight="300">
        {location}
      </Text>
      <UserStats followers={followers} following={following} />
    </View>
  );
};
