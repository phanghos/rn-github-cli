import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import { useThemeContext } from '@context/ThemeContext';

const AnimatedText = Animated.createAnimatedComponent(RNText);

export const Text = ({ children, fontFamily, fontWeight, style }) => {
  const { theme } = useThemeContext();

  return children ? (
    <AnimatedText
      style={[{ color: theme.text, fontFamily, fontWeight }, style]}>
      {children}
    </AnimatedText>
  ) : null;
};

Text.propTypes = {
  // children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  style: PropTypes.oneOfType([RNText.propTypes.style, PropTypes.object]),
};

Text.defaultProps = {
  // children: undefined,
  fontFamily: 'Roboto-Regular',
  fontWeight: '400',
  style: undefined,
};
