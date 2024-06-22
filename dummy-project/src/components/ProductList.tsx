import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProductItem from './ProductItem';
import useProducts from '../hooks/useProducts';
import { theme } from '../theme';

const ProductList: React.FC = () => {
  const { products, loading } = useProducts();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    backgroundColor: theme.colors.background,
    height:'100%',
    padding: 15,
  },
});

export default ProductList;