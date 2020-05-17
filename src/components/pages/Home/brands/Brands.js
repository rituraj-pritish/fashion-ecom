import React from 'react';

import brand1 from '../../../../assets/images/brands/brand1.png';
import brand2 from '../../../../assets/images/brands/brand2.png';
import brand3 from '../../../../assets/images/brands/brand3.png';
import brand4 from '../../../../assets/images/brands/brand4.png';
import brand5 from '../../../../assets/images/brands/brand5.png';
import brand6 from '../../../../assets/images/brands/brand6.png';
import brand7 from '../../../../assets/images/brands/brand7.png';
import brand8 from '../../../../assets/images/brands/brand8.png';
import { StyledBrands } from './Brands.styles';

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8];

const Brands = () => {
  return (
    <StyledBrands>
      {brands.map((brand, idx) => (
        <img src={brand} alt='brand' key={idx} />
      ))}
    </StyledBrands>
  );
};

export default Brands;
