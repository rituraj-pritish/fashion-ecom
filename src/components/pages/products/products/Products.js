import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../../../../index.styles';
import FilterPanel from '../filter-panel/FilterPanel';
import ProductsContainer from '../products-container/ProductsContainer';
import { Container } from './Products.styles';

const Products = ({ match, products }) => {
  const category = match.params.productsCategory;

  let items;
  if (!products[category]) {
    items = Object.values(products).flat();
  } else {
    items = products[category];
  }
  return (
    <PageContainer>
      <Container>
        <FilterPanel />
        <ProductsContainer products={items} />
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products
});

export default connect(mapStateToProps)(Products);

Products.propTypes = {
  products: PropTypes.object.isRequired
};
