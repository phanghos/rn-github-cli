import React, { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import { apiService } from '../api/ApiService';
import { Spinner, Text } from '../components';
const mockJson = require('../sagas/commitsMock.json');

const renderItem = ({ item }) => {
  const {
    commit: {
      message,
      author: { name: username },
    },
    author: { avatar_url: avatarUrl },
  } = item;
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
      }}>
      <Text numberOfLines={1} style={{ marginBottom: 4 }}>
        {message}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: avatarUrl }}
          style={{
            width: 15,
            height: 15,
            borderRadius: 3,
            marginRight: 6,
            alignSelf: 'center',
          }}
        />
        <Text fontWeight="500">
          {username}
          <Text style={{ color: '#696969', fontWeight: 'normal' }}>
            {' '}
            authored
          </Text>
        </Text>
      </View>
    </View>
  );
};

const keyExtractor = (_, index) => index.toString();

export const CommitsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [commits, setCommits] = useState();

  useEffect(() => {
    // apiService.fetchCommits('phanghos', 'chh-test').then(({data}) => {
    //   setCommits(data);
    //   setIsLoading(false);
    // });
    setTimeout(() => {
      setCommits(mockJson);
      setIsLoading(false);
    }, 1500);
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <FlatList
      data={commits}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};
