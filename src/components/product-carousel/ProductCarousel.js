import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import LazyLoad from 'react-lazy-load';

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
  loop: false,
  spaceBetween: 20,
  containerClass: 'carousel-container',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const ProductCarousel = ({ title, data }) => {
  // const render = Object.values(data).map(({ name, variants }) => (
  //   <ProductItem
  //     key={variants[0].variant}
  //     name={name}
  //     price={variants[0].price}
  //     image={variants[0].images[0]}
  //   />
  // ));

  const render = Object.values(data).map(({ name, variants }) => {
    const { price, images } = variants[0];
    return (
      <CarouselItemContainer>
        <LazyLoad className='lazyload product'>
          <img src={images[0]} alt={name} />
        </LazyLoad>
        <ItemBottom>
          <i className='fas fa-heart' />
          <h3>{name}</h3>
          <p>$ {price}</p>
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
  data: PropTypes.object.isRequired
};
