import styled from 'styled-components'
import theme from 'theme'
import { darken, lighten } from 'polished'

export const AdapterWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
`

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  border: 1px solid ${darken(0.1, theme.colors.lightGrey)};
  background: ${theme.colors.lightGrey};
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 1rem;
  resize: none;
  overflow: auto;
  height: ${({ height }) => height && height};
  font-family: inherit;
  font-size: inherit;

  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 0px 0px 1px ${lighten(0.1, theme.colors.primary)};
  }
`
