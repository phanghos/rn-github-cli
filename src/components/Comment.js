import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import Markdown from 'react-native-markdown-display';
import moment from 'moment';
import {Text} from '../components';

const rules = {
  table: (node, children, parent, styles) => (
    <View
      key={node.key}
      style={[
        styles.table,
        {
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#dcdcdc',
          flex: 1,
          alignSelf: 'stretch',
        },
      ]}>
      {children}
    </View>
  ),
  thead: (node, children, parent, styles) => (
    <View
      key={node.key}
      style={[styles.thead, {flex: 1, alignSelf: 'stretch'}]}>
      {children}
    </View>
  ),
  tbody: (node, children, parent, styles) => (
    <View
      key={node.key}
      style={[styles.tbody, {flex: 1, alignSelf: 'stretch'}]}>
      {children}
    </View>
  ),
  th: (node, children, parent, styles) => (
    <View
      key={node.key}
      style={[
        styles.th,
        {
          borderBottomWidth: 1,
          borderRightWidth: 1,
          borderBottomColor: '#dcdcdc',
          borderRightColor: '#dcdcdc',
          alignItems: 'center',
          width: 100,
        },
      ]}>
      <Text>{children}</Text>
    </View>
  ),
  tr: (node, children, parent, styles) => (
    <View
      key={node.key}
      style={[
        styles.tr,
        {
          borderBottomWidth: 0,
          borderBottomColor: '#dcdcdc',
        },
      ]}>
      {children}
    </View>
  ),
  td: (node, children, parent, styles) => {
    return (
      <View
        key={node.key}
        style={[
          styles.td,
          {
            borderWidth: 0,
            borderRightWidth: 1,
            borderRightColor: '#dcdcdc',
            width: 100,
          },
        ]}>
        {children}
      </View>
    );
  },
};

export const Comment = ({
  user: {login: username, avatar_url: avatarUrl},
  created_at: createdAt,
  body,
}) => {
  return (
    <View style={{padding: 16, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: avatarUrl}}
          style={{
            width: 35,
            height: 35,
            alignSelf: 'center',
            marginRight: 16,
            borderRadius: 4,
          }}
        />
        <View>
          <Text style={{marginBottom: 2}} fontWeight="500">
            {username}
          </Text>
          <Text style={{fontSize: 12}} fontWeight="300">
            {moment(createdAt).fromNow()}
          </Text>
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Markdown
          style={{
            link: {color: '#0080FF'},
            heading2: {fontWeight: 'bold', marginVertical: 12},
            // text: {fontWeight: '300'},
            table: {marginVertical: 16},
          }}
          rules={rules}>
          {body}
        </Markdown>
      </ScrollView>
    </View>
  );
};