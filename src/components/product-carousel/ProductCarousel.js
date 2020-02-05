import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import HeartIcon from '../../assets/icons/HeartIcon';
import SaleBanner from '../pages/product/SaleBanner'
import {
  ProductCarouselContainer,
  CarouselItemContainer,
  ItemBottom,
  Title
} from './ProductCarousel.styles';
import {
  addToCart,
  addToWishlist,
  setAlert
} from '../../redux/actions/userActions';
import Button from '../common/Button';
import Icon from '../common/Icon';
import Text from '../common/Text';

const params = {
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    800: {
      slidesPerView: 4,
      slidesPerGroup: 4
    },
    1000: {
      slidesPerView: 5,
      slidesPerGroup: 5
    }
  },
  lazy: true,
  slidesPerGroup: 2,
  loop: false,
  spaceBetween: 20,
  containerClass: 'carousel-container',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const ProductCarousel = ({
  title,
  data,
  addToCart,
  addToWishlist,
  cart,
  wishlist,
  auth
}) => {
  const render = data.map(product => {
    const { name, variants, id, category, sale } = product;
    const { price, images } = variants[0];
    const isInCart = cart.find(item => item.product.id === id);
    const isInWishlist = wishlist.find(item => item.product.id === id);

    const handleCartBtn = e => {
      if (isInCart) return;
      addToCart(product, 0, 1);
    };

    const handleWishlist = () => {
      if (auth.isEmpty) {
        setAlert('Login to continue', 'danger');
        return;
      }
      if (isInWishlist) return;
      addToWishlist(product, 0);
    };

    return (
      <CarouselItemContainer key={id}>
        <Link to={`/product/${category}/${id}`}>
          <img src={images[0]} alt={name} />
        </Link>
        {sale && <SaleBanner/>}
        <ItemBottom>
          <Icon
            className='wishlist-icon'
            color={isInWishlist ? 'red' : 'lightGrey'}
            onClick={handleWishlist}
          >
            <HeartIcon />
          </Icon>
          <Text fontWeight='bold'>{name}</Text>
          <Text mt='0.5rem' mb='1.5rem'>
            $ {price}
            {price % 1 === 0 && '.00'}
          </Text>
          <Button
            onClick={handleCartBtn}
            variant={isInCart ? 'secondary' : 'primary'}
            minHeight='35px'
            height='auto'
          >
            {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
        </ItemBottom>
      </CarouselItemContainer>
    );
  });

  return (
    <ProductCarouselContainer>
      <Title>{title[0].toUpperCase() + title.slice(1)}</Title>
      <Swiper {...params}>{render}</Swiper>
    </ProductCarouselContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart,
  wishlist: state.user.wishlist,
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { addToCart, addToWishlist })(
  ProductCarousel
);

ProductCarousel.propTypes = {
  data: PropTypes.array.isRequired
};
