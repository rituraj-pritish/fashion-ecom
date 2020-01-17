import React from 'react'
import styled from 'styled-components'

const PrimaryBtn = styled.button`
  color: #fff;
  text-transform: uppercase;
  background: ${({theme}) => theme.color.primary.main};
  padding: 1rem;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
  background: ${({theme}) => theme.color.primary.darker} ;
  }
`


const PrimaryButton = ({children,w,h}) => {
  return (
    <PrimaryBtn>
      {children}
    </PrimaryBtn>
  )
}

export default PrimaryButton
