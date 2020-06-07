import styled from 'styled-components'

export const SelectorWrapper = styled.div`
  position: relative;

  div {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 3px 5px;
  }
`

export const Selector = styled.form`
  position: absolute;
  background: #eee;
  border-radius: 8px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

  select {
    margin-top: 0.6rem;
  }
`
