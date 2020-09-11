import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { Comment } from './Comment';
import { Separator } from './Separator';

const keyExtractor = (_, index) => index.toString();

const ItemSeparator = () => (
  <View>
    {/* <View style={{height: 1, backgroundColor: '#efefef'}}></View> */}
    <Separator height={16} />
    {/* <View style={{height: 1, backgroundColor: '#efefef'}}></View> */}
  </View>
);

export const CommentList = ({ comments }) => {
  const renderItem = useCallback(
    ({ item }) => (
      <View
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Comment {...item} />
      </View>
    ),
    [],
  );

  return (
    <FlatList
      data={comments}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};
