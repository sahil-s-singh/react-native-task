import { Product } from '../types/product';

export const fetchProducts = async (): Promise<Product[]> => {
  return [
    { id: 1, name: 'Eye Cream Plus 30ml', price: 300, description: 'Product by DM Skin Care', image: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Innisfree Orchid Lotion', price: 100, description: 'Product by DM Skin Care', image: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Face Cream', price: 150, description: 'Product by DM Skin Care', image: 'https://via.placeholder.com/50' },
    { id: 4, name: 'Innisfree Orchid Lotion', price: 210, description: 'Product by DM Skin Care', image: 'https://via.placeholder.com/50' },
  ];
};