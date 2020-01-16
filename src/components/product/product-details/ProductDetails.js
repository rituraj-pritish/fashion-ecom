import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

import {
  getProduct,
  removeProduct,
  addToCart
} from '../../../redux/actions/userActions';
import { PageContainer } from '../../../index.styles';
import {
  MainImage,
  SmallImages,
  SmallImage,
  ActionsContainer,
  ImagesContainer,
  ProductOverview,
  Variants,
  Variant,
  Name,
  Price,
  Brand,
  Rating,
  Stock,
  CartBtn,
  BuyBtn
} from './ProductDetails.styles';

const ProductDetails = ({
  match,
  getProduct,
  removeProduct,
  product,
  loading,
  addToCart
}) => {
  const productCategory = match.params.productCategory;
  const productId = match.params.productId;

  const [currentImg, setCurrentImg] = useState();
  const [variant, setVariant] = useState(0);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct(productCategory, productId);

    return () => {
      removeProduct();
    };
  }, [match.params]);

  if (loading || product === null) return <div>Loading...</div>;

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
      <SmallImage current={current} onClick={() => setCurrentImg(imageUrl)}>
        <LazyLoad className='lazyload'>
          <img key={imageUrl} src={imageUrl} alt='img' />
        </LazyLoad>
      </SmallImage>
    );
  });

  const stars = [];
  for (let i = 1; i <= rating; i++) {
    stars.push(<i className='fas fa-star' style={{ color: '#FFD700' }} />);
  }

  const handleCartBtn = () => {
    addToCart(product, variant, quantity);
  };

  return (
    <PageContainer>
      <ProductOverview>
        <ImagesContainer>
          <SmallImages>{images}</SmallImages>
          <MainImage>
            <LazyLoad className='lazyload'>
              <img src={currentImg} alt={name} />
            </LazyLoad>
          </MainImage>
        </ImagesContainer>
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
                  data-tip={
                    item.variant[0].toUpperCase() + item.variant.slice(1)
                  }
                  onClick={() => changeVariant(item)}
                  color={item.color}
                />
              ))}
            </Variants>
          )}
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
            <button onClick={handleCartBtn}>ADD TO CART</button>
          </CartBtn>
          <BuyBtn>
            <button>BUY NOW</button>
          </BuyBtn>
        </ActionsContainer>
      </ProductOverview>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  product: state.user.currentProduct,
  loading: state.user.loading
});

export default connect(mapStateToProps, {
  getProduct,
  removeProduct,
  addToCart
})(ProductDetails);

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};
