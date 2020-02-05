import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { PageContainer } from '../../../../index.styles';
import ProductCarousel from '../../../product-carousel/ProductCarousel';
import ShopLinks from '../shop-links/ShopLinks';
import CollectionContainer from '../collection/CollectionContainer';
import Brands from '../brands/Brands';

const Home = ({ products }) => {
  useEffect(() => {}, [products]);
  const items = Object.values(products).flat();

  return (
    <PageContainer>
      <ShopLinks />
      <ProductCarousel title='trending' data={items} />
      <CollectionContainer />
      <ProductCarousel title='top selling' data={items} />
      <ProductCarousel title="today's offers" data={items} />
      <Brands />
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products
});

export default connect(mapStateToProps)(Home);
