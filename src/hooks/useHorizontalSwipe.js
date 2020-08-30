import { useState } from 'react';
import Animated from 'react-native-reanimated';
import { State } from 'react-native-gesture-handler';
import { usePanGestureHandler, useClock, timing } from 'react-native-redash';

const {
  useValue,
  useCode,
  block,
  cond,
  eq,
  set,
  add,
  and,
  lessThan,
  greaterOrEq,
  not,
  clockRunning,
  call,
} = Animated;

const defaultThreshold = 100;
const defaultDuration = 250;

export const useHorizontalSwipe = ({
  threshold = defaultThreshold,
  duration = defaultDuration,
  endPosition,
}) => {
  const {
    gestureHandler,
    translation: { x },
    state,
  } = usePanGestureHandler();
  const offsetX = useValue(0);
  const isMenuVisible = useValue(false);
  const triggerClose = useValue(false);
  const clock = useClock();
  const [isMenuVisibleState, setIsMenuVisibleState] = useState(false);

  useCode(
    () =>
      block([
        cond(eq(state, State.BEGAN), set(x, add(x, offsetX))),
        cond(eq(state, State.ACTIVE), [set(x, add(x, offsetX))]),
        // cond(eq(state, State.END), [set(x, add(x, offsetX)), set(offsetX, x)]),
        // cond(eq(state, State.END), set(x, add(x, offsetX))),
        cond(
          and(eq(state, State.END), lessThan(add(x, offsetX), threshold)),
          set(x, timing({ clock, from: x, to: 0, duration })),
        ),
        cond(
          and(
            eq(state, State.END),
            greaterOrEq(add(x, offsetX), threshold),
            not(isMenuVisible),
          ),
          set(
            x,
            timing({
              clock,
              from: add(x, offsetX),
              to: endPosition,
              duration,
            }),
          ),
        ),
        cond(
          and(eq(state, State.END), not(clockRunning(clock))),
          set(offsetX, x),
        ),
        cond(
          and(
            eq(state, State.END),
            eq(x, endPosition),
            not(clockRunning(clock)),
            not(triggerClose),
          ),
          [
            call([], args => {
              setIsMenuVisibleState(true);
            }),
            set(isMenuVisible, true),
            set(triggerClose, false),
          ],
        ),
        cond(
          and(eq(state, State.END), eq(triggerClose, true)),
          set(
            x,
            timing({
              clock,
              from: x,
              to: 0,
              duration,
            }),
          ),
        ),
        cond(and(eq(triggerClose, true), not(clockRunning(clock))), [
          set(x, 0),
          set(offsetX, 0),
          set(isMenuVisible, false),
          set(triggerClose, false),
          call([], () => {
            setIsMenuVisibleState(false);
          }),
        ]),
      ]),
    [state, x, offsetX, clock, isMenuVisible, triggerClose],
  );

  return {
    gestureHandler,
    x,
    isMenuVisible: isMenuVisibleState,
    triggerClose,
    clock,
  };
};
