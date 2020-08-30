import React from 'react';
import { ViewPropTypes, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text } from '../Text';
import { Separator } from '../Separator';
import { HeaderBackButton } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export const TopBar = ({
  title,
  hasBackButton,
  hasBottomLine,
  fontSize,
  style,
}) => {
  const navigation = useNavigation();

  return (
    <Animated.View
      style={[
        {
          width: '100%',
          height: 56,
          backgroundColor: '#fff',
          justifyContent: 'center',
        },
        style,
      ]}>
      <View
        style={{
          flexDirection: 'row',
        }}>
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
          <Text
            style={{
              flex: 1,
              fontSize: fontSize || new Animated.Value(24),
              textAlign: 'center',
            }}
            fontWeight={'700'}>
            {title}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('RepositorySearch');
            }}>
            <Icon
              name="search"
              size={16}
              color="#4997d0"
              style={{ right: 16, zIndex: 3 }}
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
  title: PropTypes.string.isRequired,
  hasBackButton: PropTypes.bool,
  hasBottomLine: PropTypes.object,
  fontSize: PropTypes.object,
  style: PropTypes.oneOfType([ViewPropTypes.style, PropTypes.object]),
};

TopBar.defaultProps = {
  hasBackButton: false,
  hasBottomLine: new Animated.Value(1),
  fontSize: new Animated.Value(24),
};
