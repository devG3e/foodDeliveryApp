import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const userData = {
    name: 'Dev Gee',
    email: 'dev.gee@example.com',
  };

  return (
    <View style={styles.container}>
      <Text>Your Profile</Text>
      <Text>Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
