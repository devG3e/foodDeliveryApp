import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const cartItems = [
    { id: '1', name: 'Pizza', quantity: 2, price: 12.99 },
    { id: '2', name: 'Burger', quantity: 1, price: 8.49 },
    { id: '3', name: 'Salad', quantity: 3, price: 6.99 },
    { id: '5', name: 'Bobotie', quantity: 1, price: 65.00 },
    { id: '6', name: 'Biltong', quantity: 500, price: 150.00 },
    { id: '7', name: 'Samoosas', quantity: 5, price: 10.00 },
    { id: '8', name: 'Boerewors', quantity: 1, price: 100.00 },
    { id: '9', name: 'Malva Pudding', quantity: 1, price: 40.00 },
    { id: '10', name: 'Chakalaka', quantity: 1, price: 20.00 },
    { id: '11', name: 'Pap and Wors', quantity: 1, price: 30.00 },
    { id: '12', name: 'Koeksisters', quantity: 1, price: 5.00 },
    { id: '13', name: 'Samp and Beans', quantity: 1, price: 25.00 },
    { id: '14', name: 'Melktert', quantity: 1, price: 35.00 }

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
