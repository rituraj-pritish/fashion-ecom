import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../../../../index.styles';
import FilterPanel from '../filter-panel/FilterPanel';
import ProductsContainer from '../products-container/ProductsContainer';
import { Container } from './Products.styles';
import {
  removeSearch,
  resetFilter
} from '../../../../redux/actions/userActions';

const Products = ({
  match,
  products,
  searching,
  filtered,
  filtering,
  loading,
  removeSearch,
  resetFilter
}) => {
  const category = match.params.productsCategory;

  useEffect(() => {
    return () => {
      if (searching) removeSearch();
      if (filtering) resetFilter();
    };
  }, []);

  if (loading) return <div>loading</div>;

  let items;
  if (!products[category]) {
    items = Object.values(products).flat();
  } else {
    items = products[category];
  }
  return (
    <PageContainer>
      <Container>
        <FilterPanel items={items} />
        {searching && filtered.length === 0 && (
          <div>Sorry no products found. Try different keyword</div>
        )}
        <ProductsContainer items={items} />
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products,
  searching: state.user.searching,
  filtered: state.user.filtered,
  filtering: state.user.filtering,
  loading: state.user.loading
});

export default connect(mapStateToProps, { removeSearch, resetFilter })(
  Products
);

Products.propTypes = {
  products: PropTypes.object.isRequired
};
