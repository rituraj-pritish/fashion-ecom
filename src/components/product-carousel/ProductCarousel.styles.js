import styled from 'styled-components';

export const ProductCarouselContainer = styled.div`
  margin: 30px 0;

  .carousel-container {
    position: relative;
    margin: 20px 10px;
    overflow: hidden;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-button-next {
    right: 0;
    background: #00000059;
    color: white;
    height: 65px;
    width: 35px;
    border-radius: 4px 0 0 4px;
    z-index: 4;
  }

  .swiper-button-prev {
    left: 0;
    background: #00000059;
    color: white;
    height: 65px;
    width: 35px;
    border-radius: 0 4px 4px 0;
    z-index: 4;
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    cursor: default;
    pointer-events: all;
  }

  /* for touch screens */
  @media (hover: none) and (pointer: coarse) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export const CarouselItemContainer = styled.div`
  background: #f6f8fc;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    cursor: pointer;
  }
`;

export const ItemBottom = styled.div`
  padding: 0 10px 10px 10px;
  text-align: left;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.3rem;
  }

  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.6rem;
    background-color: #ffffff;
    color: #eee;
    padding: 3px;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  p {
    margin-top: 5px;
    font-size: 1.3rem;
    margin-bottom: 15px;
  }

  button {
    margin-top: auto;
  }
`;
export const Title = styled.div`
  text-align: left;
  font-size: 1.8rem;
`;
