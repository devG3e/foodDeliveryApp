// navigation/screens/MenuScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card'; // Assuming you've created the Card component

const menuData = [
  { id: '1', name: 'Burger', description: 'Delicious burger', price: 8.99 },
  { id: '2', name: 'Pizza', description: 'Classic Margherita', price: 10.49 },
  { id: '3', name: 'Salad', description: 'Fresh garden salad', price: 6.99 },
  { id: '4', name: 'Pasta', description: 'Spaghetti Carbonara', price: 12.99 },
  // Add more menu items here
  // { id: '5', name: 'Your Item', description: 'Description', price: 9.99 },
];

const MenuScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MenuScreen;
