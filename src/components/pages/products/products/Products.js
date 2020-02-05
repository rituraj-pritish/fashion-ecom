import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Icon from '../../../common/Icon';
import Text from '../../../common/Text';
import BarsIcon from '../../../../assets/icons/BarsIcon';
import { PageContainer } from '../../../../index.styles';
import FilterPanel from '../filter-panel/FilterPanel';
import ProductsContainer from '../products-container/ProductsContainer';
import { Container, FilterBtn } from './Products.styles';
import {
  removeSearch,
  resetFilter,
  setOverlay
} from '../../../../redux/actions/userActions';
import { useState } from 'react';

const Products = ({
  match,
  products,
  searching,
  filtered,
  filtering,
  loading,
  removeSearch,
  resetFilter,
  setOverlay
}) => {
  const category = match.params.productsCategory;
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    return () => {
      if (searching) removeSearch();
      if (filtering) resetFilter();
    };
    // eslint-disable-next-line
  }, [match.params]);

  if (loading) return <div>loading</div>;

  let items;
  if (!products[category]) {
    items = Object.values(products).flat();
  } else {
    items = products[category];
  }

  const handleClick = () => {
    setShowFilter(!showFilter);
    setOverlay(true);
  };
  return (
    <PageContainer>
      <FilterBtn onClick={handleClick}>
        <Icon display='inline-block' width='15px'>
          <BarsIcon />
        </Icon>{' '}
        Filter
      </FilterBtn>

      <Container>
        <FilterPanel show={showFilter} setShow={setShowFilter} items={items} />
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

export default connect(mapStateToProps, {
  removeSearch,
  resetFilter,
  setOverlay
})(Products);

Products.propTypes = {
  products: PropTypes.object.isRequired
};
