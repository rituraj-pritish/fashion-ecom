import React from 'react'
import PropTypes from 'prop-types'

import { StyledModal } from './Modal.styled'

const Modal = ({
  isOpen,
  onRequestClose,
  children,
  modalStyles,
  ...otherProps
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalStyles={modalStyles}
      {...otherProps}
    >
      {children}
    </StyledModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modalStyles: PropTypes.object
}

export default Modal
