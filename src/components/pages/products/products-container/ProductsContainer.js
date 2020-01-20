import React from 'react';

import ProductItem from '../../../product/product-item/ProductItem';
import { Container } from './ProductsContainer.styles';

const ProductsContainer = ({ products }) => {
  return (
    <Container>
      {products.map(item => (
        <ProductItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default ProductsContainer;
