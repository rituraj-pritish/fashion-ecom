import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
  padding: 10px;
  background: ${({ bg }) => (bg ? bg : '#dbdbdb')};
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const Remove = styled.div`
  width: 20px;
  height: 20px;
  background: #6a6964;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
`;

const Modal = ({ children, open, setOpen }) => {
  return (
    <ModalContainer show={open}>
      <Remove onClick={() => setOpen(false)}>
        <i className='fas fa-times' />
      </Remove>
      {children}
    </ModalContainer>
  );
};

export default Modal;
