import React from 'react';
import styled from 'styled-components';
import {
  space,
  typography,
  color,
  layout,
  grid,
  flexbox,
  border
} from 'styled-system';

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.6rem;
  border: none;
  background: #eee;
  margin-bottom: 20px;
  height: 35px;

  &:focus {
    outline: none;
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${space} ${typography} ${color} ${layout} ${grid} ${flexbox} ${border}
`;

const Input = props => {
  return <StyledInput {...props} />;
};

export default Input;
