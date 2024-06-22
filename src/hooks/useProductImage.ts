import { useState } from 'react';
import { ImageSourcePropType } from 'react-native';

const useProductImage = (initialSource: ImageSourcePropType) => {
  const [source, setSource] = useState<ImageSourcePropType>(initialSource);

  const onError = () => {
    setSource(require('../../assets/product-fallback.png'));
  };

  return { source, onError };
};

export default useProductImage;
