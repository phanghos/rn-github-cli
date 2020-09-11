import React from 'react';
import { AnimatedTopBar } from '../AnimatedTopBar';
import { TopBar } from '../TopBar';

export const CollapsibleTopBar = ({ translationY, ...topBarProps }) => (
  <AnimatedTopBar style={{ transform: [{ translateY: translationY }] }}>
    <TopBar {...topBarProps} />
  </AnimatedTopBar>
);
