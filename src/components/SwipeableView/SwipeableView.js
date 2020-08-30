import React from 'react';
import {
  PanGestureHandler,
  TapGestureHandler,
  State,
} from 'react-native-gesture-handler';
import Animated, { clockRunning } from 'react-native-reanimated';
import { useHorizontalSwipe } from '../../hooks/useHorizontalSwipe';
import { useTapGestureHandler } from 'react-native-redash';
import styles from './styles';

const { interpolate, useCode, block, call } = Animated;

const defaultEndPosition = 325;

export const SwipeableView = ({
  menu,
  onPress,
  endPosition = defaultEndPosition,
  children,
}) => {
  const {
    gestureHandler,
    x,
    isMenuVisible,
    triggerClose,
    clock,
  } = useHorizontalSwipe({
    endPosition,
  });

  const { gestureHandler: tapGestureHandler, state } = useTapGestureHandler();

  const opacity = interpolate(x, {
    inputRange: [0, endPosition / 2, endPosition],
    outputRange: [1, 0.9, 0.5],
  });

  useCode(
    () =>
      block([
        call([state, clockRunning(clock)], args => {
          if (!args[1]) {
            if (args[0] === State.END) {
              if (!isMenuVisible) {
                onPress && onPress();
              } else {
                state.setValue(State.UNDETERMINED);
                triggerClose.setValue(true);
              }
            }
          }
        }),
      ]),
    [state, isMenuVisible],
  );

  return (
    <TapGestureHandler {...tapGestureHandler}>
      <Animated.View>
        <PanGestureHandler
          {...gestureHandler}
          minOffsetX={!isMenuVisible ? 0.5 : Number.MAX_SAFE_INTEGER}>
          <Animated.View style={{ backgroundColor: '#fff' }}>
            <Animated.View style={styles.container}>{menu}</Animated.View>
            <Animated.View style={{ transform: [{ translateX: x }], opacity }}>
              {children}
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </Animated.View>
    </TapGestureHandler>
  );
};
