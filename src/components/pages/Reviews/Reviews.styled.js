import styled from 'styled-components'
import theme from 'theme'

export const TopSection = styled.div`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 3rem;

  & > div {
    margin-left: 2rem;

    /* product name */
    & > div:first-child {
      font-weight: 400;
      font-size: 2.5rem;
    }

    /* rating section */
    & > div:nth-child(2) {
      margin-bottom: 1.5rem;
    }

    /* total reviews & ratings */
    & > div:nth-child(3),
    & > div:nth-child(4) {
      font-size: 1.4rem;
      color: ${theme.colors.grey};
      margin-bottom: 0.5rem;

      & > span {
        font-weight: 500;
        margin-right: 0.2rem;
      }
    }
  }
`

export const Image = styled.img`
  width: 18rem;
  height: 22rem;
`

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 100%;
`

export const AvgRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5rem;

  & > div {
    margin-left: 0.5rem;
    margin-bottom: 2px;
  }
`
