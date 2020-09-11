import React, { useEffect, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';
import { REPOS_REQUEST } from '../../actions/repositories';
import { Repository, Spinner } from '../../components';
import { CollapsibleTopBar } from '../../components/CollapsibleTopBar/CollapsibleTopBar';
import { useGetCollapsibleHeaderProps } from '../../hooks/useGetCollapsibleHeaderProps';
import { scrollIndicatorInsets } from '../../constants';
import genericStyles from '../../styles';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const keyExtractor = (_, index) => index.toString();

export const RepositoriesScreen = () => {
  const isLoading = useSelector(({ repositories }) => repositories.isLoading);
  const repositories = useSelector(
    ({ repositories }) => repositories.repositories, // eslint-disable-line no-shadow
  );
  const dispatch = useDispatch();
  const headerProps = useGetCollapsibleHeaderProps({ title: 'Repositories' });

  useEffect(() => {
    dispatch({ type: REPOS_REQUEST, payload: { user: 'phanghos' } });
  }, [dispatch]);

  const renderItem = useCallback(({ item }) => <Repository repo={item} />, []);

  const Separator = () => (
    <View style={{ height: 1, backgroundColor: '#f5f6f7' }} />
  );

  return isLoading ? (
    <Spinner />
  ) : (
    <View>
      <CollapsibleTopBar {...headerProps} />
      <AnimatedFlatList
        onScroll={headerProps.onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={genericStyles.listWithAnimatedHeader}
        scrollIndicatorInsets={scrollIndicatorInsets}
        data={repositories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
