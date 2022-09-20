import styled from 'styled-components'

export const ListWrapper = styled.div`
  padding-left: 2rem;
  text-align: left;
`

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.7rem 0;

  & > div:first-child {
    height: 10rem;
    width: 8rem;
    margin-right: 1rem;

    img {
      height: 10rem;
    }
  }
`

export const Details = styled.div`
  text-align: left;

  div:nth-child(2) {
    margin-top: 0.2rem;
    font-size: 1.3rem;
  }
`
