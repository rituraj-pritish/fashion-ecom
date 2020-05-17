import React from 'react';
import { Link } from 'react-router-dom';

import { ShopLinksContainer, Container } from './ShopLinks.styles';
import women from '../../../../assets/images/women.webp';
import men from '../../../../assets/images/men.webp';
import accesories from '../../../../assets/images/accesories.webp';
import sale from '../../../../assets/images/sale.jpg';
import newItems from '../../../../assets/images/new.jpg';
import shoe from '../../../../assets/images/shoes.jpg';

const ShopLinks = () => {
  return (
    <Container>
      <ShopLinksContainer>
        <div className='left'>
          <div className='tile sale'>
            <Link to='/products/sale'>
              <div className='bg' style={{ backgroundImage: `url(${sale})` }} />
              <p>Sale</p>
            </Link>
          </div>

          <div className='tile new'>
            <Link to='/products/new'>
              <div
                className='bg'
                style={{ backgroundImage: `url(${newItems})` }}
              />
              <p>New</p>
            </Link>
          </div>

          <div className='tile women'>
            <Link to='/products/women'>
              <div
                className='bg'
                style={{ backgroundImage: `url(${women})` }}
              />
              <p>Women</p>
            </Link>
          </div>
        </div>

        <div className='right'>
          <div className='tile men'>
            <Link to='/products/men'>
              <div className='bg' style={{ backgroundImage: `url(${men})` }} />
              <p>Men</p>
            </Link>
          </div>

          <div className='tile accessories'>
            <Link to='/products/accessories'>
              <div
                className='bg'
                style={{ backgroundImage: `url(${accesories})` }}
              />
              <p>Accessories</p>
            </Link>
          </div>

          <div className='tile shoes'>
            <Link to='/products/shoes'>
              <div className='bg' style={{ backgroundImage: `url(${shoe})` }} />
              <p>Footwear</p>
            </Link>
          </div>
        </div>
      </ShopLinksContainer>
    </Container>
  );
};

export default ShopLinks;
