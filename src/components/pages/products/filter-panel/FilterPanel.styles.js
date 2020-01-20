import styled from 'styled-components'
import sizes from '../../../../sizes'

export const FilterPanelContainer = styled.aside`
  background: pink;
  height: calc(100vh - 80px);
  position: sticky;
  top: 65px;

  @media ${sizes.xl} {
    display: none;
  }
`
