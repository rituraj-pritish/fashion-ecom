import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { PageContainer } from '../../../index.styles';
import { Container } from './Home.styles';
import ProductCarousel from '../../product-carousel/ProductCarousel';
import ShopLinks from './shop-links/ShopLinks';

const Home = ({ products }) => {
  useEffect(() => {}, [products]);
  const items = Object.values(products).flat();

  return (
    <PageContainer>
      <ShopLinks />

      <ProductCarousel title='trending' data={items} />

      <ProductCarousel
        title='top selling'
        data={items}
      />

      <ProductCarousel
        title="today's offers"
        data={items}
      />
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products
});

export default connect(mapStateToProps)(Home);
