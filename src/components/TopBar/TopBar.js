import React, { useContext } from 'react';
import { ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';
import { HeaderBackButton } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useThemeContext } from '@context/ThemeContext';
import { Text } from '../Text';
import { Separator } from '../Separator';

export const TopBar = ({
  title,
  children,
  hasBackButton,
  hasBottomLine,
  fontSize,
  style,
}) => {
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: 56,
          backgroundColor: theme.background,
          justifyContent: 'center',
        },
        style,
      ]}>
      <View style={{ flexDirection: 'row' }}>
        {hasBackButton && (
          <HeaderBackButton
            onPress={navigation.goBack}
            labelVisible={false}
            style={{
              marginRight: 24,
              zIndex: 2,
            }}
          />
        )}
        <Animated.View
          style={{
            flex: 1,
            flexDirection: 'row',
            position: 'absolute',
            left: 0,
            right: 0,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {title && (
            <Text
              style={{
                flex: 1,
                fontSize,
                textAlign: 'center',
              }}
              fontWeight="700">
              {title}
            </Text>
          )}
          {children}
          <TouchableOpacity
            hitSlop={{ top: 16, bottom: 16, left: 32, right: 16 }}
            onPress={() => navigation.navigate('Settings')}>
            <Icon
              name="cog"
              // name="search"
              // size={16}
              size={24}
              color="#4997d0"
              style={{ right: 16 }}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
      <Separator
        style={{
          opacity: hasBottomLine,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
    </Animated.View>
  );
};

TopBar.propTypes = {
  title: PropTypes.string,
  hasBackButton: PropTypes.bool,
  hasBottomLine: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Animated.Node),
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Animated.Node),
  ]),
  style: ViewPropTypes.style,
};

TopBar.defaultProps = {
  title: undefined,
  hasBackButton: false,
  hasBottomLine: 1,
  fontSize: 24,
  style: undefined,
};
