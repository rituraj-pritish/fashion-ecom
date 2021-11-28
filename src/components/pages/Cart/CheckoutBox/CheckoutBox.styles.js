import styled from 'styled-components'
import sizes from 'sizes'

export const CheckoutBoxContainer = styled.div`
  @media ${sizes.lg} {
    position: sticky;
    top: -15px;
  }
`

export const Container = styled.div`
  background: #eee;
  border-radius: 5px;
  position: sticky;
  top: 65px;
  text-align: left;
  padding: 20px;
  font-size: 1.5rem;

  p {
    display: inline-block;
    font-weight: bold;
  }

  button {
    width: 100%;
    margin-top: 10px;
  }
`

export const Line = styled.div`
  border-bottom: 1px solid black;
  margin: 10px 0;
`
