import styled from 'styled-components'

export const ProductsList = styled.div`
  /* overflow-y: auto; */
  padding-top: 2rem;
`

export const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 0;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > div:first-child {
    height: 10rem;
    width: 8rem;
    margin-right: 1rem;

    img {
      height: 10rem;
    }
  }
`
