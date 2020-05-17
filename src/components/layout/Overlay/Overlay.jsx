import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { setOverlay } from 'redux/overlay'
import { useEffect } from 'react'

export const OverlayContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
`

const Overlay = ({ showOverlay, setOverlay }) => {
  const root = document.getElementById('root')

  useEffect(() => {
    if (showOverlay) {
      root.style.position = 'fixed'
      root.style.overflow = 'hidden'
    }

    return () => {
      root.style.position = 'initial'
      root.style.overflow = 'initial'
    }
    // eslint-disable-next-line
  }, [showOverlay])

  return (
    <OverlayContainer onClick={() => setOverlay(false)} show={showOverlay} />
  )
}

const mapStateToProps = state => ({
  showOverlay: state.overlay
})

export default connect(mapStateToProps, { setOverlay })(Overlay)
