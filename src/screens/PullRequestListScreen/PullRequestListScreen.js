import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { apiService } from '../../api/ApiService';
import { PullRequest, Spinner } from '../../components';
import { useGetCollapsibleHeaderProps } from '../../hooks/useGetCollapsibleHeaderProps';
import { scrollIndicatorInsets } from '../../constants';
import { CollapsibleTopBar } from '../../components/CollapsibleTopBar/CollapsibleTopBar';
import genericStyles from '../../styles';
const mockJson = require('../sagas/pullRequestsMock.json');

const renderItem = ({ item }) => {
  return (
    <PullRequest
      repoName={item.head.repo.name}
      username={item.user.login}
      {...item}
    />
  );
};

const keyExtractor = (_, index) => index.toString();

const Separator = () => (
  <View style={{ height: 1, backgroundColor: '#f5f6f7' }} />
);

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const PullRequestListScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pullRequests, setPullRequests] = useState();
  const headerProps = useGetCollapsibleHeaderProps({
    title: 'Pull Requests',
    hasBackButton: true,
  });

  useEffect(() => {
    // apiService.fetchPullRequests('phanghos', 'rn-ts-starter').then(({data}) => {
    //   setPullRequests(data);
    //   setIsLoading(false);
    // });
    setTimeout(() => {
      setPullRequests(mockJson);
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
        data={pullRequests}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
