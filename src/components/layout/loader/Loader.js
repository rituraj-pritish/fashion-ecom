import React from 'react';
import styled from 'styled-components';
import './Loader.css';

const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* change to change size of loader */
  font-size: 2rem;
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <ul className='loader'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </LoaderContainer>
  );
};

export default Loader;
