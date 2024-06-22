import axios from 'axios';
import { Product } from '../types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get('https://dummyjson.com/products');

console.log(response, 'response');
    
    const products = response.data.products.map((product: any) => ({
      id: product.id,
      name: product.title,
      price: product.price,
      description: product.description,
      image: 'product.thumbnail',
    }));
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
