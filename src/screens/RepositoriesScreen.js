import React, { useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { REPOS_REQUEST } from '../actions/repositories';
import { Repository, Spinner } from '../components';

export const RepositoriesScreen = () => {
  const isLoading = useSelector(({ repositories }) => repositories.isLoading);
  const repositories = useSelector(
    ({ repositories }) => repositories.repositories,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: REPOS_REQUEST, payload: { user: 'phanghos' } });
  }, []);

  const renderItem = useCallback(({ item }) => {
    return <Repository {...item} />;
  }, []);

  const keyExtractor = (_, index) => index.toString();

  const Separator = () => (
    <View style={{ height: 1, backgroundColor: '#f5f6f7' }} />
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <FlatList
      data={repositories}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
    />
  );
};
