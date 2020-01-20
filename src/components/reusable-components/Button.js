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

  /* secondary styles */
  color: ${({ secondary }) => secondary && '#000'};
  background: ${({ secondary }) => secondary && '#fff'};
  border: 1.5px solid
    ${({ theme, secondary }) => secondary && theme.color.primary.main};

  &:hover {
    background: ${({ theme }) => theme.color.primary.darker};
    background: ${({ secondary, theme }) => secondary && '#fff'};
  }
`;

const Button = ({ children, onClick, fullWidth, secondary }) => {
  return (
    <PrimaryBtn onClick={onClick} secondary={secondary} fullWidth={fullWidth}>
      {children}
    </PrimaryBtn>
  );
};

export default Button;
