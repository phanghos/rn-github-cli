import React, { useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  Repository,
  Spinner,
  CollapsibleTopBar,
  Separator,
  Page,
} from '@components';
import { useGetCollapsibleHeaderProps } from '@hooks/useGetCollapsibleHeaderProps';
import { scrollIndicatorInsets } from '@constants';
import { useFetchRepositories } from './useFetchRepositories';
import genericStyles from '../../styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const keyExtractor = (_, index) => index.toString();

export const RepositoriesScreen = () => {
  const { isLoading, repos, fetchRepositories } = useFetchRepositories(
    'phanghos',
  );
  const headerProps = useGetCollapsibleHeaderProps({ title: 'Repositories' });

  useEffect(() => {
    fetchRepositories('phanghos');
  }, [fetchRepositories]);

  const renderItem = useCallback(({ item }) => <Repository repo={item} />, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Page style={{ padding: 0 }}>
      <CollapsibleTopBar {...headerProps} />
      <AnimatedFlatList
        onScroll={headerProps.onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={genericStyles.listWithAnimatedHeader}
        scrollIndicatorInsets={scrollIndicatorInsets}
        data={repos}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </Page>
  );
};
