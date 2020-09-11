import React, { useCallback } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import numbro from 'numbro';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from './Text';

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

  const onPress = useCallback(() => {
    navigation.navigate('Repository', { repo });
  }, [navigation, repo]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
          backgroundColor: '#fff',
        }}>
        <View style={{ flexDirection: 'row', marginBottom: 4 }}>
          <Image
            source={{ uri: avatarUrl }}
            style={{
              width: 18,
              height: 18,
              alignSelf: 'center',
              marginRight: 8,
              borderRadius: 4,
            }}
          />
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
