import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import numbro from 'numbro';
import { Text, Page, Separator, TopBar, Avatar } from '@components';

const RowItem = ({ title, value }) => (
  <View style={{ flexDirection: 'row', padding: 16 }}>
    <Text style={{ flex: 1 }} fontWeight="300">
      {title}
    </Text>
    <Text>{value}</Text>
  </View>
);

export const RepositoryScreen = () => {
  const {
    params: {
      repo: {
        name,
        owner: { login: username, avatar_url: avatarUrl },
        description,
        homepage,
        watchers_count: watchersCount,
        license,
      },
    },
  } = useRoute();
  const navigation = useNavigation();

  const navigateToIssues = useCallback(() => navigation.navigate('Issues'), [
    navigation,
  ]);

  const navigateToPullRequests = useCallback(
    () => navigation.navigate('Pull Requests'),
    [navigation],
  );

  const navigateToCommits = useCallback(() => navigation.navigate('Commits'), [
    navigation,
  ]);

  return (
    <Page style={{ padding: 0 }}>
      <TopBar title="Repository" hasBackButton />
      <View style={{ padding: 16 }}>
        <View style={{ flexDirection: 'row' }}>
          <Avatar source={avatarUrl} size={18} style={{ marginRight: 8 }} />
          <Text fontWeight="300">{username}</Text>
        </View>
        <Text style={{ fontSize: 24, marginVertical: 16 }} fontWeight="600">
          {name}
        </Text>
        <Text fontWeight="300">{description}</Text>
        <Text
          style={{ marginVertical: 0, marginTop: 16, letterSpacing: 1 }}
          fontWeight="bold">
          {homepage}
        </Text>
      </View>
      <Separator marginVertical={8} />
      <TouchableOpacity onPress={navigateToIssues}>
        <RowItem title="Issues" value={1} />
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateToPullRequests}>
        <RowItem title="Pull Requests" value={1} />
      </TouchableOpacity>
      <RowItem
        title="Watchers"
        value={numbro(watchersCount).format({
          average: true,
        })}
      />
      {license && <RowItem title="License" value={license.name} />}
      <Separator />
      <TouchableOpacity onPress={navigateToCommits} style={{ padding: 16 }}>
        <Text fontWeight="300">Commits</Text>
      </TouchableOpacity>
    </Page>
  );
};
