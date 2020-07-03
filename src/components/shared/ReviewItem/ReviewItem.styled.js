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
  display: flex;
  align-items: center;

  & > span {
    margin-left: 0.8rem;
    margin-bottom: -2px;
  }
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
  font-size: 1.3rem;

  div {
    margin-right: 0.6rem;
  }
`
