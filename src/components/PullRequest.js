import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useThemeContext } from '@context/ThemeContext';
import { Text } from './Text';
import { LabelList } from './LabelList';

export const PullRequest = ({
  repoName,
  username,
  number,
  title,
  labels = [],
}) => {
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  const onPress = useCallback(() => {
    navigation.navigate('Pull Request', { url: '' });
  }, [navigation]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: theme.background,
        }}>
        <Text
          style={{
            marginBottom: 4,
          }}
          fontWeight="200">
          {`${username} / ${repoName} #${number}`}
        </Text>
        <Text
          style={{ marginBottom: labels.length > 0 ? 8 : 0 }}
          fontWeight="400">
          {title}
        </Text>
        <LabelList labels={labels} />
      </View>
    </TouchableOpacity>
  );
};
