import styled from 'styled-components'
import theme from 'theme'

export const AdapterWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  background: ${theme.colors.lightGrey};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 1rem;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`
