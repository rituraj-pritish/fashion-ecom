import styled from 'styled-components'
import sizes from 'sizes'

export const SearchBarContainer = styled.form`
  width: 100%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s;
  margin: 5px 0;

  input {
    flex-grow: 1;
  }

  button {
    background: transparent;
    margin-right: 20px;
  }

  @media ${sizes.lg} {
    /* visibility: visible; */
  }
`
