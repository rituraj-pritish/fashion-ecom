import styled from 'styled-components'
import sizes from 'theme/sizes'

export const StyledBrands = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2,1fr);
  justify-items: center;
  margin: 4rem 0;
  margin-bottom: 2rem;

  @media ${sizes.md} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3,1fr);
  }

  @media ${sizes.mob} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4,1fr);
  }

  img {
    width: 100%;
  }

  img:last-child {
    align-self: center;
  }
  
`
