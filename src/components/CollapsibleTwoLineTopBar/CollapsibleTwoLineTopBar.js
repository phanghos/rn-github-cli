import React from 'react';
import { AnimatedTopBar } from '@components/AnimatedTopBar';
import { TwoLineTopBar } from '@components/TwoLineTopBar';

export const CollapsibleTwoLineTopBar = ({
  translationY,
  titleTransationY,
  opacity,
  ...topBarProps
}) => (
  <AnimatedTopBar style={{ transform: [{ translateY: translationY }] }}>
    <TwoLineTopBar
      translationY={titleTransationY}
      opacity={opacity}
      {...topBarProps}
    />
  </AnimatedTopBar>
);
