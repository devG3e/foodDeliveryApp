// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './context/AuthContext'; // Assuming you've created AuthProvider
import { ThemeProvider } from './context/ThemeContext'; // Assuming you've created ThemeProvider
import MainNavigator from './navigation/MainNavigator'; // Your main navigation component

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
