import React, { useCallback } from 'react';
import { ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { useRotation } from '@hooks/useRotation';

export const Avatar = React.memo(({ source, size, style }) => {
  const navigation = useNavigation();

  const { rotation, start } = useRotation({
    onFinish: () => navigation.navigate('Profile'),
  });

  const goToProfile = useCallback(() => {
    start();
  }, [start]);

  return (
    <TouchableOpacity onPress={goToProfile}>
      <Animated.Image
        source={{ uri: source }}
        style={[
          {
            width: size,
            height: size,
            alignSelf: 'center',
            marginRight: 24,
            borderRadius: 4,
            transform: [{ rotateX: rotation, rotateY: rotation }],
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
