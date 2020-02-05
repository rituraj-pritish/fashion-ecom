import React from 'react';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Slide, SwiperContainer,BG } from './ImageSlider.styles';
import image from '../../assets/images/maillist.jpg'
import image2 from '../../assets/images/male + female.webp'
import { Keyboard } from 'swiper/js/swiper.esm';

const ImageSlider = () => {
  const params = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    containerClass: 'slider-container',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <SwiperContainer>
      <Swiper {...params}>
        <BG style={{background: `url(${image})`}}/>
        <BG style={{background: `url(${image2})`}}/>
      </Swiper>
    </SwiperContainer>
  );
};

export default ImageSlider;