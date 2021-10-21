import styled, { css } from 'styled-components'
import theme from 'theme'

export const CounterWrapper = styled.div`
  background: whitesmoke;
  border-radius: ${theme.borderRadius};
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
    width: 3rem;
    text-align: center;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    pointer-events: none;
  `};
`

export const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #c9c9c9;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  padding: 1rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${theme.borderRadius};
  border-bottom-left-radius: ${theme.borderRadius};

  &:last-child {
    border-radius: unset;
    border-top-right-radius: ${theme.borderRadius};
    border-bottom-right-radius: ${theme.borderRadius};
  }

  &:hover {
    background: ${({ disabled }) => !disabled && '#e0e0e0'};

    svg {
      path {
        fill: ${({ disabled }) => !disabled ? 'black' : '#808080'};
      }
    }
  }

  ${({ disabled }) => disabled && css`
    cursor: default;
    background: #f7f7f7;

    & > div {
      cursor: default;
    }
  `};
`