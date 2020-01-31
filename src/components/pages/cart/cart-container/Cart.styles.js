import styled from 'styled-components'
import sizes from '../../../../sizes'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 5%;

  @media ${sizes.lg} {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
  }
`

export const ItemsContainer = styled.div`

`