import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

const menuData = [
    { id: '1', name: 'Bobotie', description: 'Spiced minced meat dish', price: 65.00 },
    { id: '2', name: 'Biltong', description: 'Cured meat snack', price: 150.00 },
    { id: '3', name: 'Samoosas', description: 'Deep-fried pastry with spiced filling', price: 10.00 },
    { id: '4', name: 'Boerewors', description: 'Traditional South African sausage', price: 100.00 },
    { id: '5', name: 'Malva Pudding', description: 'Sweet, sticky dessert with apricot jam', price: 40.00 },
    { id: '6', name: 'Chakalaka', description: 'Spicy vegetable relish', price: 20.00 },
    { id: '7', name: 'Pap and Wors', description: 'Maize porridge with sausage', price: 30.00 }
    
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
