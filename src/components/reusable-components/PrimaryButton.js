import React from 'react';
import styled from 'styled-components';

const PrimaryBtn = styled.button`
  color: #fff;
  text-transform: uppercase;
  background: ${({ theme }) => theme.color.primary.main};
  padding: 1rem;
  font-weight: bold;
  border-radius: 5px;
  width: ${({ fullWidth }) => fullWidth && '100%'};

  &:hover {
    background: ${({ theme }) => theme.color.primary.darker};
  }
`;

const PrimaryButton = ({ children, fullWidth }) => {
  return <PrimaryBtn fullWidth={fullWidth}>{children}</PrimaryBtn>;
};

export default PrimaryButton;
