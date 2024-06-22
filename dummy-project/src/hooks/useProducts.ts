import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { fetchProducts } from '../services/productService';

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setLoading(false);
    };

    loadProducts();
  }, []);

  return { products, loading };
};

export default useProducts;