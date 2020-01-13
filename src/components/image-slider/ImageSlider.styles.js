import styled from 'styled-components';

export const SwiperContainer = styled.div`
  .slider-container {
    height: 60vh;
    overflow: hidden;
  }

  .swiper-button-next {
    right: 25px;
    top: 30vh;
    color: black;
    transform: translateY(50%);
    background: #ffffff9e;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    visibility: hidden;

    &::after {
      margin-left: 8px;
    }
  }

  .swiper-button-prev {
    left: 25px;
    top: 30vh;
    color: black;
    transform: translateY(50%);
    background: #ffffff9e;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    visibility: hidden;

    &::after {
      margin-right: 8px;
    }
  }

  &:hover .swiper-button-next,
  &:hover .swiper-button-prev {
    visibility: visible;
  }
`;

export const BG = styled.div`
  background-size: cover;
  background-position: top;
`;

export const Slide = styled.div`
  width: 500px;
  height: 300px;
  background: red;
`;
