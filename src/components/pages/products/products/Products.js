import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { PageContainer } from '../../../../index.styles';
import FilterPanel from '../filter-panel/FilterPanel';
import ProductsContainer from '../products-container/ProductsContainer';
import { Container } from './Products.styles';
import { removeSearch } from '../../../../redux/actions/userActions';

const Products = ({
  match,
  products,
  search,
  filtered,
  loading,
  removeSearch
}) => {
  const category = match.params.productsCategory;

  useEffect(() => {
    return () => {
      if (search) removeSearch();
    };
  }, []);

  if (loading) return <div>loading</div>;

  let items;
  if (search) {
    items = filtered;
  } else if (!products[category]) {
    items = Object.values(products).flat();
  } else {
    items = products[category];
  }
  return (
    <PageContainer>
      <Container>
        <FilterPanel products={items} />
        {search && filtered.length === 0 && (
          <div>Sorry no products found. Try different keyword</div>
        )}
        <ProductsContainer products={items} />
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products,
  search: state.user.search,
  filtered: state.user.filtered,
  loading: state.user.loading
});

export default connect(mapStateToProps, { removeSearch })(Products);

Products.propTypes = {
  products: PropTypes.object.isRequired
};

//todo add bool search to userreducer, to see if user searched or not, then based on that render products, and on unmount if(search) turn search = false
