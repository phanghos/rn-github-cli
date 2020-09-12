import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { Spinner, Commit, Separator, CollapsibleTopBar } from '@components';
import { useGetCollapsibleHeaderProps } from '@hooks/useGetCollapsibleHeaderProps';
import { scrollIndicatorInsets } from '@constants';
import { apiService } from '@api';
import genericStyles from '../../styles';

const mockJson = require('../../mocks/commitsMock.json');

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const renderItem = ({ item }) => <Commit commit={item} />;

const keyExtractor = (_, index) => index.toString();

const ItemSeparator = () => <Separator />;

export const CommitsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commits, setCommits] = useState();
  const headerProps = useGetCollapsibleHeaderProps({
    title: 'Commits',
    hasBackButton: true,
  });

  useEffect(() => {
    // apiService.fetchCommits('phanghos', 'chh-test').then(({data}) => {
    //   setCommits(data);
    //   setIsLoading(false);
    // });
    setTimeout(() => {
      setCommits(mockJson);
      setIsLoading(false);
    }, 1000);
  }, []);

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
        data={commits}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};
