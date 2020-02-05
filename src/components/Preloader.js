import React from 'react';

import women from '../assets/images/women.webp';
import men from '../assets/images/men.webp';
import accesories from '../assets/images/accesories.webp';
import sale from '../assets/images/sale.jpg';
import newItems from '../assets/images/new.jpg';
import shoe from '../assets/images/shoes.jpg';
import { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const images = [women, men, accesories, sale, newItems, shoe];
    images.forEach(image => (new Image().src = image));
  }, []);
  return null;
};

export default Preloader;
