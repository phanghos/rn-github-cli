import React, { useCallback } from 'react';
import { Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const Avatar = React.memo(({ source, size, style }) => {
  const navigation = useNavigation();

  const goToProfile = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  return (
    <TouchableOpacity onPress={goToProfile}>
      <Image
        source={{ uri: source }}
        style={[
          {
            width: size,
            height: size,
            alignSelf: 'center',
            marginRight: 24,
            borderRadius: 4,
          },
          style,
        ]}
      />
    </TouchableOpacity>
  );
});

Avatar.propTypes = {
  source: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: ViewPropTypes.style,
};

Avatar.defaultProps = {
  size: 35,
  style: undefined,
};
