import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lighten } from 'polished'

export const ReviewsWrapper = styled.div`
  text-align: left;
  margin-top: 3rem;

  & > div:first-child {
    font-size: 2rem;
    font-weight: 400;
  }
`

export const StyledLink = styled(Link)`
  color: blue;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`

export const SpinnerWrapper = styled.div`
  margin-top: 3rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NoReviews = styled.div`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: ${lighten(0.2, 'black')};
`
