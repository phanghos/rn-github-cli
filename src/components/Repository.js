import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { useThemeContext } from '@context/ThemeContext';
import { Text } from './Text';
import { Avatar } from './Avatar';

export const Repository = ({ repo }) => {
  const {
    name,
    owner: { login: username, avatar_url: avatarUrl },
  } = repo;
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  const onPress = useCallback(() => {
    navigation.navigate('Repository', { repo });
  }, [navigation, repo]);

  const RepositoryContentView = useCallback(
    () => (
      <View style={{ flex: 1, zIndex: 10, backgroundColor: theme.background }}>
        <RectButton
          onPress={onPress}
          underlayColor="#0080FF"
          rippleColor="#0080FF"
          style={{ backgroundColor: theme.background }}>
          <View
            style={{
              paddingHorizontal: 16,
              paddingVertical: 24,
            }}
            accessible>
            <View style={{ flexDirection: 'row' }}>
              <Avatar source={avatarUrl} />
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
    [name, username, avatarUrl, theme.background, onPress],
  );

  return <RepositoryContentView />;
};
