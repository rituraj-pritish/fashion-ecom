import styled from 'styled-components'
import theme from 'theme'

export const StyledForm = styled.form`
  max-width: 700px;
  margin: 0 auto;

  & > div:first-child {
    border-top-width: 2px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  & > div:nth-last-child(2) {
    border-bottom-width: 2px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  & > div {
    padding: 1rem;
    margin-bottom: 0;

    border-color: ${theme.colors.lightGrey};
    border-style: solid;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 2px;
    border-right-width: 2px;
  }

  button {
    width: 16rem;
    margin-left: auto;
    margin-top: 1rem;
  }
`

export const AddressBlock = styled.div`
  text-align: left;
  font-size: 1.6rem;

  & > div:first-child {
    margin-top: 0.8rem;
  }

  & > div > label {
    font-size: 1.4rem;
  }
`
