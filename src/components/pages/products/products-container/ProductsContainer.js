import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  setCurrentProducts,
  updateFiltered
} from '../../../../redux/actions/userActions';
import ProductItem from '../product-item/ProductItem';
import { Container } from './ProductsContainer.styles';

import Text from '../../../common/Text'
const ProductsContainer = ({
  items,
  setCurrentProducts,
  updateFiltered,
  filtered,
  filtering,
  searching,
  loading
}) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (searching) {
      setProducts(filtered);
      setCurrentProducts(filtered);
    } else {
      setProducts(items);
      setCurrentProducts(items);
    }

    if (filtering) {
      // updateFiltered(items);
      setProducts(filtered);
    }
  }, [filtering, searching, filtered, items, setCurrentProducts]);

  if (loading || products === null) return <div>loading...</div>;

  return (
    <Container>
      {products.length === 0 && <Text gridColumn='1/-1' m='3rem 0'>No products found.</Text>}
      {products.length > 0 &&
        products.map(item => <ProductItem key={item.id} item={item} />)}
    </Container>
  );
};

const mapStateToProps = state => ({
  filtered: state.user.filtered,
  filtering: state.user.filtering,
  searching: state.user.searching,
  loading: state.user.loading
});

export default connect(mapStateToProps, { setCurrentProducts, updateFiltered })(
  ProductsContainer
);
