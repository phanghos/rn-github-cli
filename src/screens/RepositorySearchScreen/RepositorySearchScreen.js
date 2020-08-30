import React, { useCallback, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { Spinner, RepositoryResult } from '../../components';
import { REPOS_SEARCH_CLEAR } from '../../actions/repositories';

const keyExtractor = (_, index) => index.toString();

export const RepositorySearchScreen = () => {
  const isLoading = useSelector(({ repoSearch }) => repoSearch.isLoading);
  const repos = useSelector(({ repoSearch }) => repoSearch.repositories);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch({ type: REPOS_SEARCH_CLEAR });
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <RepositoryResult repo={item} />;
  }, []);

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
