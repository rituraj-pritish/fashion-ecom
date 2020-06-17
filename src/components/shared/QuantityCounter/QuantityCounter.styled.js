import styled from 'styled-components'

export const CounterWrapper = styled.div`
  background: whitesmoke;
  border-radius: 5px;
  padding: 0 7px;
  margin-right: 20px;
  width: 70px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 1.5rem;
  }

  span {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6;
    pointer-events: none;
  `};
`
