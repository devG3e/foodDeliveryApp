// navigation/screens/ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  // Assume you have user data (e.g., name, email, profile picture) from your authentication system
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    // Add more user data fields as needed
  };

  return (
    <View style={styles.container}>
      <Text>Your Profile</Text>
      <Text>Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
      {/* Display other user data (e.g., profile picture, settings, etc.) */}
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
