import React, { useCallback } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Text } from './Text';

export const Repository = ({ repo }) => {
  const {
    name,
    owner: { login: username, avatar_url: avatarUrl },
  } = repo;
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('Repository', { repo });
  }, [navigation, repo]);

  const RepositoryContentView = useCallback(
    () => (
      <View style={{ flex: 1, zIndex: 10, backgroundColor: 'white' }}>
        <RectButton
          onPress={onPress}
          underlayColor="#0080FF"
          rippleColor="#0080FF"
          style={{ backgroundColor: '#fff' }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 24,
            }}
            accessible>
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
        </RectButton>
      </View>
    ),
    [name, username, avatarUrl, onPress],
  );

  return <RepositoryContentView />;
};
