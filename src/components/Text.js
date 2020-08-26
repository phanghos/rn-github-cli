import React from 'react';
import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';

export const Text = ({children, fontFamily, fontWeight, style}) => {
  return children ? (
    <RNText style={[{fontFamily, fontWeight}, style]}>{children}</RNText>
  ) : null;
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontFamily: PropTypes.string,
  fontWeight: PropTypes.string,
  style: RNText.propTypes.style,
};

Text.defaultProps = {
  children: undefined,
  fontFamily: 'Roboto-Regular',
  fontWeight: '400',
};
