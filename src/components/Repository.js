import React, { useCallback } from 'react';
import { View, Image } from 'react-native';
import { Text } from './Text';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export const Repository = ({
  name,
  owner: { login: username, avatar_url: avatarUrl },
}) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('Pull Requests');
  }, [navigation]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          backgroundColor: '#fff',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: avatarUrl }}
            style={{
              width: 35,
              height: 35,
              alignSelf: 'center',
              marginRight: 24,
              borderRadius: 4,
            }}
          />
          <View>
            <Text style={{ marginBottom: 4 }} fontWeight="200">
              {username}
            </Text>
            <Text style={{ marginRight: 24 }} fontWeight="400">
              {name}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
