import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Page, Text } from '@components';
import { SettingsModal } from './components/SettingsModal';

export const SettingsScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const open = useCallback(() => {
    setIsVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setIsVisible(false);
  }, []);

  return (
    <Page>
      <TouchableOpacity onPress={open}>
        <View>
          <Text>Theme</Text>
        </View>
      </TouchableOpacity>
      <SettingsModal isVisible={isVisible} onClose={onClose} />
    </Page>
  );
};
