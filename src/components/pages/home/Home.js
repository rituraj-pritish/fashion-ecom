import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { PageContainer } from '../../../index.styles';
import { Container } from './Home.styles';
import ProductCarousel from '../../product-carousel/ProductCarousel';
import ShopLinks from './shop-links/ShopLinks';

const Home = ({ products }) => {
  useEffect(() => {}, [products]);

  return (
    <PageContainer>
      <ShopLinks />

      <ProductCarousel title='trending' data={Object.values(products).flat()} />

      <ProductCarousel
        title='top selling'
        data={Object.values(products).flat()}
      />

      <ProductCarousel
        title="today's offers"
        data={Object.values(products).flat()}
      />
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products
});

export default connect(mapStateToProps)(Home);
