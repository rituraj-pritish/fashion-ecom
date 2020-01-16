import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import women from '../../../assets/women.webp';
import men from '../../../assets/men.webp';
import accesories from '../../../assets/accesories.webp';
import sale from '../../../assets/sale.jpg';
import newItems from '../../../assets/new.jpg';
import shoe from '../../../assets/shoes.jpg';

import { PageContainer } from '../../../index.styles';
import { ShopLinks, Container } from './Home.styles';
import ProductCarousel from '../../product-carousel/ProductCarousel';

const Home = ({ products }) => {
  useEffect(() => {}, [products]);

  return (
    <PageContainer>
      <Container>
        <ShopLinks>
          <div className='sale'>
            <Link to='shop/sale'>
              <div className='bg' style={{ backgroundImage: `url(${sale})` }} />
              <p>Sale</p>
            </Link>
          </div>

          <div className='new'>
            <Link to='shop/sale'>
              <div
                className='bg'
                style={{ backgroundImage: `url(${newItems})` }}
              />
              <p>New</p>
            </Link>
          </div>

          <div className='women'>
            <Link to=''>
              <div
                className='bg'
                style={{ backgroundImage: `url(${women})` }}
              />
              <p>Women</p>
            </Link>
          </div>

          <div className='men'>
            <Link to=''>
              <div className='bg' style={{ backgroundImage: `url(${men})` }} />
              <p>Men</p>
            </Link>
          </div>

          <div className='accesories'>
            <Link to=''>
              <div
                className='bg'
                style={{ backgroundImage: `url(${accesories})` }}
              />
              <p>Accessories</p>
            </Link>
          </div>

          <div className='shoes'>
            <Link to=''>
              <div className='bg' style={{ backgroundImage: `url(${shoe})` }} />
              <p>Shoes</p>
            </Link>
          </div>
        </ShopLinks>
      </Container>

        <ProductCarousel
          title='Trending'
          data={[...products.shoes, ...products.accessories]}
        />
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  products: state.user.products
});

export default connect(mapStateToProps)(Home);
