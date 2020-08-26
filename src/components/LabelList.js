import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {Label} from './Label';
import {FlatList} from 'react-native';
import {View} from 'react-native';

const getStyle = (index, length) => {
  if (index === 0) return {marginRight: 4};
  else if (index === length - 1) return {marginLeft: 4};
  return {marginHorizontal: 4};
};

const keyExtractor = (_, index) => index.toString();

const Separator = () => <View style={{marginHorizontal: 4}} />;

export const LabelList = ({labels}) => {
  const renderItem = useCallback(
    ({item, index}) => (
      <Label
        color={item.color}
        text={item.name}
        key={item.name}
        style={getStyle(index, labels.length)}
      />
    ),
    [labels],
  );

  return labels.length > 0 ? (
    <FlatList
      data={labels}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={Separator}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  ) : null;
};
