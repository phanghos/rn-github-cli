import {
  useValue,
  concat,
  interpolate,
  useCode,
  block,
  cond,
  eq,
  not,
  set,
  and,
  greaterThan,
  call,
} from 'react-native-reanimated';
import { useClock, timing } from 'react-native-redash';
import { useCallback } from 'react';

const animationDuration = 200;

export const useRotation = ({ onFinish }) => {
  const animateValues = useValue(false);

  const boomerang = useValue(false);

  const animationVal = useValue(0);

  const clock = useClock();

  const rotation = concat(
    interpolate(animationVal, {
      inputRange: [0, 1],
      outputRange: [0, 180],
    }),
    'deg',
  );

  useCode(
    () =>
      block([
        cond(
          and(eq(animateValues, true), not(boomerang)),
          set(
            animationVal,
            timing({
              clock,
              from: 0,
              to: 1,
              duration: animationDuration,
            }),
          ),
        ),
        cond(
          and(eq(animateValues, true), eq(animationVal, 1), not(boomerang)),
          [set(animateValues, false), set(boomerang, true)],
        ),
        cond(and(not(animateValues), greaterThan(animationVal, 0)), [
          set(boomerang, true),
          set(
            animationVal,
            timing({
              clock,
              from: 1,
              to: 0,
              duration: animationDuration,
            }),
          ),
        ]),
        and(and(not(animateValues), eq(boomerang, true), eq(animationVal, 0)), [
          set(animateValues, false),
          set(boomerang, false),
          call([], () => onFinish()),
        ]),
      ]),
    [animationVal, animateValues, boomerang, clock],
  );

  const start = useCallback(() => {
    animateValues.setValue(true);
  }, [animateValues]);

  return { rotation, start };
};
