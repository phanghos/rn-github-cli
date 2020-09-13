import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import numbro from 'numbro';
import { useThemeContext } from '@context/ThemeContext';
import { Text } from './Text';
import { Avatar } from './Avatar';

const languageColors = require('../utils/languageColors.json');

export const RepositoryResult = ({
  repo,
  repo: {
    name,
    description,
    watchers,
    language,
    owner: { login: username, avatar_url: avatarUrl },
  },
}) => {
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  const onPress = useCallback(() => {
    navigation.navigate('Repository', { repo });
  }, [navigation, repo]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          backgroundColor: theme.background,
        }}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          <Avatar source={avatarUrl} size={18} style={{ marginRight: 8 }} />
          <Text fontWeight="300">{username}</Text>
        </View>
        <Text style={{ marginBottom: 4 }} fontWeight="500">
          {name}
        </Text>
        <Text fontWeight="300">{description}</Text>
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 24,
            }}>
            <Icon
              name="star"
              size={16}
              color="#FFC30B"
              style={{ marginRight: 8 }}
            />
            <Text fontWeight="300">
              {numbro(watchers).format({
                average: true,
                mantissa: 1,
              })}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 24,
            }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: languageColors[language],
                marginRight: 8,
                borderRadius: 5,
              }}
            />
            <Text fontWeight="300">{language}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
