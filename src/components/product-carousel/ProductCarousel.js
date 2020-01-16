import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import heart from '../../assets/heart.svg';
import {
  ProductCarouselContainer,
  CarouselItemContainer,
  ItemBottom
} from './ProductCarousel.styles';
import ProductItem from '../product/product-item/ProductItem';

const params = {
  slidesPerView: 5,
  // breakpoints: {
  //   1250: {
  //     slidesPerView: 7
  //   },
  //   1050: {
  //     slidesPerView: 6
  //   },
  //   860: {
  //     slidesPerView: 5
  //   },
  //   670: {
  //     slidesPerView: 4
  //   },
  //   400: {
  //     slidesPerView: 3
  //   }
  // },
  slidesPerGroup: 5,
  loop: false,
  spaceBetween: 20,
  containerClass: 'carousel-container',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const ProductCarousel = ({ title, data }) => {
  const render = data.map(({ name, variants, id, category }) => {
    const { price, images } = variants[0];
    return (
      <CarouselItemContainer key={id}>
        <LazyLoad className='lazyload product'>
          <Link to={`/product/${category}/${id}`}>
            <img src={images[0]} alt={name} />
          </Link>
        </LazyLoad>
        <ItemBottom>
          <i className='fas fa-heart' />
          <h3>{name}</h3>
          <p>
            $ {price}
            {price % 1 === 0 && '.00'}
          </p>
          <button>ADD TO CART</button>
        </ItemBottom>
      </CarouselItemContainer>
    );
  });

  return (
    <ProductCarouselContainer>
      <Swiper {...params}>
        {render}
        {render}
      </Swiper>
    </ProductCarouselContainer>
  );
};

export default ProductCarousel;

ProductCarousel.propTypes = {
  data: PropTypes.array.isRequired
};
