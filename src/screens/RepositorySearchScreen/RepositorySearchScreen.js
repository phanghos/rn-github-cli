import React, { useCallback, useEffect, useContext } from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Spinner, RepositoryResult } from '@components';
import { RepoSearchContext } from '@context/RepoSearchContext';

const keyExtractor = (_, index) => index.toString();

export const RepositorySearchScreen = () => {
  const { isLoading, repos, reset } = useContext(RepoSearchContext);

  useEffect(() => () => reset(), [reset]);

  const renderItem = useCallback(
    ({ item }) => <RepositoryResult repo={item} />,
    [],
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={repos}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      )}
    </SafeAreaView>
  );
};
