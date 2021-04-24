import React from 'react';
import { TextInput, useColorScheme } from 'react-native';
import dynamicStyles from './styles';

export function AppTextInput({ placeholder, onChange, value }) {
  const theme = useColorScheme();
  const styles = dynamicStyles(theme);

  return (
    <TextInput
      style={[styles.inputContainer]}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
    />
  );
}
