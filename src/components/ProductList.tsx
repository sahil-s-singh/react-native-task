import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ProductItem from './ProductItem';
import useProducts from '../hooks/useProducts';
import { theme } from '../theme';

const ProductList: React.FC = () => {
  const { products, loading } = useProducts();


  // Here another error state can be added and a nice loading and error compomennt can be added for better experience
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (

    <ScrollView style={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productList: {
    backgroundColor: theme.colors.background,
    height:'100%',
    width: '100%',
    padding: theme.spacing.small,
  },
});

export default ProductList;