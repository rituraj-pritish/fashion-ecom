import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import {
  StyledModal,
  CloseIconWrapper,
  Content,
  Header,
  Footer
} from './Modal.styled'

const Modal = ({
  isOpen,
  onRequestClose,
  children,
  modalStyles,
  showCloseButton = true,
  hasFixedHeader = false,
  header,
  footer,
  ...otherProps
}) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      modalStyles={modalStyles}
      hasFixedHeader={hasFixedHeader}
      {...otherProps}
    >
      <Header hasFixedHeader={hasFixedHeader}>{!!header && header}</Header>
      {showCloseButton && (
        <CloseIconWrapper>
          <CloseIcon onClick={onRequestClose} />
        </CloseIconWrapper>
      )}
      <Content hasFixedHeader={hasFixedHeader}>{children}</Content>
      <Footer>{!!footer && footer}</Footer>
    </StyledModal>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  showCloseIcon: PropTypes.bool,
  hasFixedHeader: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  modalStyles: PropTypes.object,
  header: PropTypes.node,
  footer: PropTypes.node
}

export default Modal
