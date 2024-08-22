// navigation/screens/CartScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const cartItems = [
  { id: '1', name: 'Pizza', quantity: 2, price: 12.99 },
  { id: '2', name: 'Burger', quantity: 1, price: 8.49 },
  { id: '3', name: 'Salad', quantity: 3, price: 6.99 },
  // Add more random cart items here
];

const CartScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Text>{item.name}</Text>
      <Text>Quantity: {item.quantity}</Text>
      <Text>Price: ${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text>Your Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      {/* Calculate and display total cost */}
      <Text>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartItem: {
    marginBottom: 16,
  },
});

export default CartScreen;
