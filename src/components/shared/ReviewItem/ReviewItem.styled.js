import styled from 'styled-components'
import theme from 'theme'

export const ReviewWrapper = styled.div`
  text-align: left;
  margin: 1.8rem 0;
`

export const Heading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`

export const Review = styled.div`
  margin-left: 1.7rem;
  word-break: break-word;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
`

export const BottomSection = styled.div`
  display: flex;
  color: ${theme.colors.grey};
  font-size: 1.4rem;

  div {
    margin-right: 15rem;
  }
`
