import React from 'react'
import styled, { css } from 'styled-components/macro'
import theme from 'theme'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

function ReactModalAdapter ({ className, modalClassName, ...props }) {
  return (
    <ReactModal
      className={modalClassName}
      portalClassName={className}
      ariaHideApp={false}
      {...props}
    />
  )
}

ReactModalAdapter.propTypes = {
  className: PropTypes.string,
  modalClassName: PropTypes.string
}

// reference - https://github.com/reactjs/react-modal/issues/627#issuecomment-578814799
export const StyledModal = styled(ReactModalAdapter).attrs({
  overlayClassName: 'Overlay',
  modalClassName: 'Modal'
})`
  & .Overlay {
    position: fixed;
    z-index: 999;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0,0,0, 0.2);
  }
  & .Modal {
    left: 1.6rem;
    top: 1.6rem;
    right: 1.6rem;
    bottom: 1.6rem;
    position: absolute;
    background: ${theme.colors.white};
    border-radius: 0.3rem;
    outline: none;
    padding: 1.6rem;
    overflow: ${({ hasFixedHeader }) => hasFixedHeader ? 'hidden' : 'auto'};
    ${({ modalStyles }) => modalStyles && css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      ${modalStyles};
    `}
  }
`

StyledModal.propTypes = {
  hasFixedHeader: PropTypes.bool,
  modalStyles: PropTypes.object
}

StyledModal.defaultProps = {
  hasFixedHeader: false,
  modalStyles: null
}

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: ${({ position }) => position === 'right' && 'auto'};
  margin-right: ${({ position }) => position === 'left' && 'auto'};
  margin-bottom: 1rem;
`

Header.propTypes = {
  position: PropTypes.oneOf(['left', 'right', 'auto'])
}

Header.defaultProps = {
  position: 'auto'
}

export const Footer = styled.div`
  margin-bottom: 1rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Title = styled.div`
  width: 100%;
  text-align: ${({ align }) => align ? 'center' : 'auto'};
  font-weight: 700;
  font-size: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '1.9rem'
      case 'large':
        return '2.4rem'
      default:
        return '1.6rem'
    }
  }};
`

Title.propTypes = {
  align: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Title.defaultProps = {
  align: 'center',
  size: 'small'
}

export const Content = styled.div`
  flex: 1;
  margin-top: 1.6rem;
  overflow: ${({ hasFixedHeader }) => hasFixedHeader && 'auto'};
  overflow: ${({ overflowHidden }) => overflowHidden && 'hidden'};  
`

Content.propTypes = {
  hasFixedHeader: PropTypes.bool,
  overflowHidden: PropTypes.bool
}

Content.defaultProps = {
  hasFixedHeader: false,
  overflowHidden: false
}