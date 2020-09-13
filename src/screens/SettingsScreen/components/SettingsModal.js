import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Page } from '@components';
import { ThemeContext, themes } from '@context/ThemeContext';

const keyExtractor = (_, index) => index.toString();

const ItemSeparator = () => <View style={{ height: 16 }} />;

export const SettingsModal = ({ isVisible, onClose }) => {
  const { setTheme } = useContext(ThemeContext);

  const updateTheme = theme => {
    setTheme(theme);
    onClose();
  };

  const items = [
    { text: 'Light', onPress: () => updateTheme(themes.light) },
    { text: 'Dark', onPress: () => updateTheme(themes.dark) },
  ];
  return (
    <Modal isVisible={isVisible} onClose={onClose} onBackdropPress={onClose}>
      <Page style={{ flex: 0, borderRadius: 4, backgroundColor: '#fff' }}>
        <FlatList
          bounces={false}
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={item.onPress}>
              <View>
                <Text style={{ color: '#000' }}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={ItemSeparator}
        />
      </Page>
    </Modal>
  );
};
