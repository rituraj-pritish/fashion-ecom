import styled from 'styled-components'
import { lighten } from 'polished'
import theme from 'theme'
import sizes from 'theme/sizes'

export const Order = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  margin: 2rem 0;
  padding-bottom: 1.5rem;
`

export const TopSection = styled.div`
  display: flex;
  align-items: center;
  background: #eee;
  padding: 1.5rem 2rem;

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

  @media ${sizes.md} {
    justify-content: space-between;

    & > div {
      margin: 0;
    }
  }
`

export const DeliveryDetail = styled.div`
  font-weight: bold;
  text-align: left;
  padding: 0.7rem 2rem;
  font-size: 1.8rem;
`

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-right: 2rem;

  & > div:last-child {
    button {
      margin-bottom: 1rem;
    }
  }
`

export const MoreProducts = styled.div`
  font-size: 1.3rem;
  color: ${theme.colors.grey};
`
