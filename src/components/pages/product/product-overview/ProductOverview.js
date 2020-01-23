import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { withRouter } from 'react-router-dom';

import returnImg from '../../../../assets/return.webp';
import worldwideImg from '../../../../assets/worldwide.webp';
import Button from '../../../reusable-components/Button';
import {
  MainImage,
  SmallImages,
  SmallImage,
  ActionsContainer,
  ImagesContainer,
  ProductOverviewContainer,
  Variants,
  Variant,
  Name,
  Price,
  Brand,
  Rating,
  Stock,
  CartBtn,
  BuyBtn,
  Policy,
  Wishlist,
  StickyContainer
} from './ProductOverview.styles';

const ProductOverview = ({
  product,
  cart,
  wishlist,
  addToCart,
  addToWishlist,
  auth,
  setAlert,
  history
}) => {
  const [currentImg, setCurrentImg] = useState();
  const [variant, setVariant] = useState(0);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  const { id, name, rating, brand, variants } = product;

  const changeVariant = item => {
    const index = variants.indexOf(item);
    if (index === variant) return;
    setVariant(index);
    setCurrentImg(variants[index].images[0]);
    setPrice(variants[index].price);
  };

  if (!currentImg) {
    setCurrentImg(variants[variant].images[0]);
    setPrice(variants[variant].price);
  }

  const images = variants[variant].images.map(imageUrl => {
    let current = imageUrl === currentImg;
    return (
      <SmallImage
        key={imageUrl}
        current={current}
        onClick={() => setCurrentImg(imageUrl)}
      >
        <LazyLoad className='lazyload'>
          <img src={imageUrl} alt='img' />
        </LazyLoad>
      </SmallImage>
    );
  });

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(
      <i key={i} className='fas fa-star' style={{ color: '#FFD700' }} />
    );
  }

  const isInCart = cart.find(item => item.product.id === product.id);

  const isInWishlist = wishlist.find(item => item.product.id === product.id);

  const handleCartBtn = () => {
    if (isInCart) return;
    addToCart(product, variant, quantity);
  };

  const handleWishlist = () => {
    if (auth.isEmpty) {
      setAlert('Login to continue', 'danger');
      return;
    }
    if (isInWishlist) return;
    addToWishlist(product, variant);
  };

  const handleBuy = e => {
    e.preventDefault();

    if (auth.isEmpty) {
      history.push('/signin');
      return;
    }
    addToCart(product, variant, 1);
    history.push('/user/cart')
  };

  return (
    <ProductOverviewContainer>
      <div>
        <ImagesContainer>
          <SmallImages>{images}</SmallImages>
          <LazyLoad>
            <LazyLoad className='lazyload'>
              <img src={currentImg} alt={name} />
            </LazyLoad>
          </LazyLoad>
        </ImagesContainer>
      </div>

      <ActionsContainer>
        <Name>{name}</Name>
        <Brand>{brand}</Brand>
        <Price>
          $ {price}
          {price % 1 === 0 && '.00'}
        </Price>
        <Rating>{stars}</Rating>
        <Stock>In Stock</Stock>
        {variants.length > 1 && (
          <Variants>
            {variants.map(item => (
              <Variant
                key={item.color}
                data-tip={item.variant[0].toUpperCase() + item.variant.slice(1)}
                onClick={() => changeVariant(item)}
                color={item.color}
              />
            ))}
          </Variants>
        )}
        <Policy>
          <span>
            <LazyLoad className='lazyload'>
              <img src={worldwideImg} alt='worldwide shipping' />
            </LazyLoad>
            <p>
              Worldwide <br /> Shipping
            </p>
          </span>
          <span>
            <LazyLoad className='lazyload'>
              <img src={returnImg} alt={'return policy'} />
            </LazyLoad>
            <p>
              30 Days
              <br />
              Return
            </p>
          </span>
        </Policy>

        <CartBtn>
          <div>
            <span
              onClick={() => {
                if (quantity === 1) return;
                setQuantity(quantity - 1);
              }}
            >
              <i className='fas fa-minus' />
            </span>
            <p>{quantity}</p>
            <span onClick={() => setQuantity(quantity + 1)}>
              <i className='fas fa-plus' />
            </span>
          </div>
          <Button secondary onClick={handleCartBtn}>
            {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
        </CartBtn>
        <BuyBtn>
          <Button onClick={handleBuy} fullWidth>
            BUY NOW
          </Button>
        </BuyBtn>
        <Wishlist onClick={handleWishlist}>
          {isInWishlist ? (
            <i className='fas fa-heart' style={{ color: 'red' }} />
          ) : (
            <i className='far fa-heart' />
          )}
          {isInWishlist ? <p>Added To Wishlist</p> : <p>Add To Wishlist</p>}
        </Wishlist>
      </ActionsContainer>
    </ProductOverviewContainer>
  );
};

export default withRouter(ProductOverview);
