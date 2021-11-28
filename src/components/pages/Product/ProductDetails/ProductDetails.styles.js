import styled from 'styled-components'

export const ProductDetailsContainer = styled.div`
  width: 100%;
  text-align: left;
  margin: 30px 0;
`
export const Tabs = styled.div`
  display: flex;
  font-size: 1.6rem;

  div:first-child {
    border-radius: 5px 0 0 0;
  }

  div:last-child {
    border-radius: 0 5px 0 0;
  }
`

export const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  background: ${({ current }) => (current ? '#eee' : '#ccc')};
`

export const Content = styled.div`
  background: #eee;
  padding: 10px;
  font-size: 1.4rem;
  border-radius: 0 5px 5px 5px;
`
