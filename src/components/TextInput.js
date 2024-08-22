// src/components/TextInput.js
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextInputComponent = ({ label, placeholder, value, onChangeText, error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 14,
  },
});

export default TextInputComponent;
