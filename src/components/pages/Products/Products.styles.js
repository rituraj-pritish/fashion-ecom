import styled from 'styled-components'
import sizes from 'sizes'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 270px auto;
  grid-gap: 2%;

  @media ${sizes.xl} {
    display: block;
  }
`
