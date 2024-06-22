import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/components/ProductList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <ProductList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 75,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});