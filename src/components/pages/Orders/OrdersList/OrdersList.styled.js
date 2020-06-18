import styled from 'styled-components'
import { lighten } from 'polished'

export const Order = styled.div`
  border: 1px solid #eee;
`

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  padding: 1.5rem 0.5rem;

  & > div {
    margin-right: 6rem;

    div:first-child {
      font-size: 1.2rem;
      font-weight: 300;
      margin-bottom: 0.2rem;
    }

    div:nth-child(2) {
      font-size: 1.4rem;
      color: ${lighten(0.2, 'black')};
    }
  }
`