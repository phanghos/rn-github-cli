import React, {useState, useCallback, useRef, useEffect} from 'react';
import {TextInput} from 'react-native';

export const SearchBar = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onSubmitEditting = useCallback(({nativeEvent}) => {
    onSubmit(nativeEvent.text);
  }, []);

  return (
    <TextInput
      ref={inputRef}
      value={value}
      placeholder="Type something here..."
      onChangeText={(text) =>
        setValue(text.slice(0, 1).toLowerCase() + text.slice(1))
      }
      onSubmitEditing={onSubmitEditting}
      style={{
        borderColor: '#DCDCDC',
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 24,
      }}
    />
  );
};
