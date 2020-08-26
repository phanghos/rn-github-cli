import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { Text } from './Text';

const bgColorMap = {
  code: 'rgba(0, 128, 255, 0.2)',
  success: 'rgba(80, 200, 120, 0.2)',
};

const textColorMap = {
  code: '#0080FF',
  success: '#2E8B57',
};

export const CodeSnippet = ({ children, type, style }) => {
  return (
    <View
      style={[
        {
          alignSelf: 'flex-start',
          backgroundColor: bgColorMap[type],
          paddingHorizontal: 6,
          paddingVertical: 4,
          borderRadius: 5,
        },
        style,
      ]}>
      <Text
        style={{ color: textColorMap[type] }}
        fontFamily={type === 'code' ? 'SourceCodePro-Regular' : undefined}
        fontWeight="400">
        {children}
      </Text>
    </View>
  );
};

CodeSnippet.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

CodeSnippet.defaultProps = {
  type: 'code',
};
