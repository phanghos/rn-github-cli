import React, { useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Markdown from 'react-native-markdown-display';
import { useFetchPullRequest } from './useFetchPullRequest';
import { useFetchComments } from './useFetchComments';
import {
  Spinner,
  Text,
  CodeSnippet,
  Separator,
  CommentList,
  Comment,
} from '../../components';

const keyExtractor = (_, index) => index.toString();

const ItemSeparator = () => (
  <View>
    {/* <View style={{height: 1, backgroundColor: '#efefef'}}></View> */}
    <Separator height={16} />
    {/* <View style={{height: 1, backgroundColor: '#efefef'}}></View> */}
  </View>
);

export const PullRequestScreen = () => {
  const {
    params: { url },
  } = useRoute();
  const { isLoading, pullRequest } = useFetchPullRequest(url);
  const comments = useFetchComments();

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

  if (pullRequest) {
    const {
      title,
      head: { ref: headRef },
      base: { ref: baseRef },
      state,
      mergeable_state: mergeableState,
      additions,
      deletions,
      changed_files: changedFiles,
      commits,
      body,
    } = pullRequest;

    return (
      <>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <View style={{ padding: 16 }}>
                <Text
                  style={{ fontSize: 28, marginBottom: 16 }}
                  fontWeight="700">
                  {title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 16,
                  }}>
                  <CodeSnippet>{headRef}</CodeSnippet>
                  <Icon
                    name="long-arrow-right"
                    size={16}
                    style={{ alignSelf: 'center', marginHorizontal: 16 }}
                  />
                  <CodeSnippet>{baseRef}</CodeSnippet>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CodeSnippet type="success" style={{ marginRight: 24 }}>
                    {state}
                  </CodeSnippet>
                  <CodeSnippet type="success">{mergeableState}</CodeSnippet>
                </View>
              </View>
              <Separator />
              <View style={{ padding: 16 }}>
                <Text style={{ marginBottom: 4 }} fontWeight="300">
                  {`${changedFiles} file(s) changed`}
                </Text>
                <Text>
                  <Text
                    style={{ color: '#2E8B57', fontSize: 13 }}
                    fontWeight="300">
                    {`+${additions}`}
                  </Text>
                  <Text
                    style={{ color: '#f00', fontSize: 13 }}
                    fontWeight="300">
                    {` -${deletions}`}
                  </Text>
                </Text>
              </View>
              <Separator />
              <View style={{ padding: 16 }}>
                <Text fontWeight="300">{`${commits} commit(s)`}</Text>
              </View>
              <View style={{ height: 1, backgroundColor: '#efefef' }} />
              <Separator height={25} />
              <View style={{ padding: 16 }}>
                <Markdown
                  style={{
                    link: { color: '#0080FF' },
                    heading2: { fontWeight: 'bold', marginVertical: 12 },
                  }}>
                  {body}
                </Markdown>
              </View>
              <View style={{ height: 1, backgroundColor: '#efefef' }} />
              <Separator height={25} />
            </>
          )}
          data={comments || []}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparator}
        />
      </>
    );
  }
  return <Spinner />;
};
