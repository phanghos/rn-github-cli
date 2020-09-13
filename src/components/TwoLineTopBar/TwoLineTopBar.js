import React from 'react';
import Animated from 'react-native-reanimated';
import { TopBar } from '../TopBar';
import { Text } from '../Text';

export const TwoLineTopBar = ({
  title,
  subtitle,
  hasBackButton,
  hasBottomLine,
  translationY,
  opacity,
}) => (
  <TopBar hasBackButton={hasBackButton} hasBottomLine={hasBottomLine}>
    <Animated.View
      style={{
        flex: 1,
        marginLeft: hasBackButton ? 32 : 16,
        transform: [{ translateY: translationY }],
        opacity,
      }}>
      <Text style={{ fontSize: 14 }} fontWeight="200">
        {title}
      </Text>
      <Text style={{ fontSize: 18 }} fontWeight="700">
        {subtitle}
      </Text>
    </Animated.View>
  </TopBar>
);
