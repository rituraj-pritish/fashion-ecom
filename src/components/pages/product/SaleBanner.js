import React from 'react';
import styled from 'styled-components';

const Sale = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  opacity: 0.7;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  position: absolute;
  border-bottom-right-radius: 5px;
`;

const SaleBanner = () => {
  return <Sale>sale !</Sale>;
};

export default SaleBanner;
