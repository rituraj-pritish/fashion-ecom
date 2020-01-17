import React from 'react';
import styled from 'styled-components';

const StInput = styled.input`
  background: #eee;
  width: 100%;
  margin-bottom: 20px;
  height: 35px;
  border-radius: 8px;
`;

const Input = ({ type, name, value, onChange }) => {
  return <StInput type={type} name={name} value={value} onChange={onChange} />;
};

export default Input;
