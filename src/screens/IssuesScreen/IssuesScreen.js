import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Animated from 'react-native-reanimated';
import {
  Spinner,
  PullRequest,
  CollapsibleTopBar,
  Separator,
} from '@components';
import { useGetCollapsibleHeaderProps } from '@hooks/useGetCollapsibleHeaderProps';
import { scrollIndicatorInsets } from '@constants';
import { apiService } from '@api';
import genericStyles from '../../styles';

const mockJson = require('../../mocks/issuesMock.json');

const renderItem = ({ item }) => (
  <PullRequest
    //   repoName={item.head.repo.name}
    repoName="dummy-repo"
    username={item.user.login}
    {...item}
  />
);

const keyExtractor = (_, index) => index.toString();

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export const IssuesScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [issues, setIssues] = useState();
  const headerProps = useGetCollapsibleHeaderProps({
    title: 'Issues',
    hasBackButton: true,
  });

  useEffect(() => {
    // apiService.fetchIssues('').then(({response}) => {})
    setTimeout(() => {
      setIssues(mockJson);
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
        data={issues}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
