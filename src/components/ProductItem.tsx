import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Product } from '../types/product';
import { theme } from '../theme';
import useProductImage from '../hooks/useProductImage';


interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const { source, onError } = useProductImage({ uri: product.image });

  return (
    <View style={styles.productItem}>
      <Image source={source} style={styles.productImage} onError={onError} />
      <View style={styles.productDetails}>
        <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">{product.name}</Text>
        <Text style={styles.productDescription} numberOfLines={2} ellipsizeMode="tail">{product.description}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    padding: theme.spacing.small,
    borderRadius: theme.borderRadius.medium,
    marginBottom: theme.spacing.medium,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.15,
    // shadowRadius: 1,
    // elevation: 1,
  },
  productImage: {
    width: 75,
    height: 75,
    borderRadius: theme.borderRadius.small,
    marginRight: theme.spacing.medium,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  productName: {
    fontWeight: theme.text.title.fontWeight,
    fontSize: theme.text.title.fontSize
  },
  productDescription: {
    color: theme.text.subtitle.color,
    fontSize: theme.text.subtitle.fontSize,
    marginTop: theme.spacing.small / 2,
    marginBottom: theme.spacing.small / 2
  },
  productPrice: {
    fontWeight: theme.text.title.fontWeight,
    fontSize: theme.text.title.fontSize,
    color: theme.colors.text2
  },
});

export default ProductItem;