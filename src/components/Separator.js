import React from 'react';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import { ViewPropTypes } from 'react-native';

export const Separator = ({
  height,
  color,
  marginHorizontal,
  marginVertical,
  style,
}) => (
  <Animated.View
    style={[
      {
        height,
        backgroundColor: color,
      },
      { marginHorizontal, marginVertical },
      style,
    ]}
  />
);

Separator.propTypes = {
  height: PropTypes.number,
  color: PropTypes.string,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  style: ViewPropTypes.style,
};

Separator.defaultProps = {
  height: 1,
  color: '#EBEBEB',
  marginHorizontal: 0,
  marginVertical: 0,
  style: undefined,
};
