import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { apiService } from '../api/ApiService';
import { PullRequest, Spinner } from '../components';
const mockJson = require('../sagas/pullRequestsMock.json');

const renderItem = ({ item }) => {
  return <PullRequest {...item} />;
};

const keyExtractor = (_, index) => index.toString();

const Separator = () => (
  <View style={{ height: 1, backgroundColor: '#f5f6f7' }} />
);

export const PullRequestsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pullRequests, setPullRequests] = useState();

  useEffect(() => {
    // apiService.fetchPullRequests('phanghos', 'rn-ts-starter').then(({data}) => {
    //   setPullRequests(data);
    //   setIsLoading(false);
    // });
    setTimeout(() => {
      setPullRequests(mockJson);
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <FlatList
      data={pullRequests}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
    />
  );
};
