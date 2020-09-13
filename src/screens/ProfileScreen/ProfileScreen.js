import React from 'react';
import { View } from 'react-native';
import Animated, { interpolate } from 'react-native-reanimated';
import { Spinner, CollapsibleTwoLineTopBar, Page } from '@components';
import { useGetCollapsibleHeaderProps } from '@hooks/useGetCollapsibleHeaderProps';
import { headerHeight } from '@constants';
import { useFetchUser } from './hooks/useFetchUser';
import { ProfileHeader } from './components/ProfileHeader';

export const ProfileScreen = () => {
  const { isLoading, user } = useFetchUser({
    username: 'phanghos',
    fetchOnMount: true,
  });
  const headerProps = useGetCollapsibleHeaderProps({
    title: 'phanghos',
    hasBackButton: true,
  });

  const translationY = interpolate(headerProps.translationY, {
    inputRange: [-headerHeight, 0],
    outputRange: [0, headerHeight],
  });

  const opacity = interpolate(translationY, {
    inputRange: [0, headerHeight / 2.8, headerHeight],
    outputRange: [1, 0, 0],
  });

  return isLoading ? (
    <Spinner />
  ) : (
    <Page style={{ padding: 0 }}>
      <CollapsibleTwoLineTopBar
        {...headerProps}
        subtitle="Roberto Tatasciore"
        translationY={0}
        titleTransationY={translationY}
        opacity={opacity}
      />
      <Animated.ScrollView
        onScroll={headerProps.onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          // backgroundColor: '#fff',
          padding: 16,
          paddingTop: headerHeight + 24,
        }}>
        <ProfileHeader user={user} />
        <View style={{ height: 300 }} />
        <View style={{ height: 300 }} />
        <View style={{ height: 150 }} />
      </Animated.ScrollView>
    </Page>
  );
};
