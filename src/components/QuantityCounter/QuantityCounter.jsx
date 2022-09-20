import React from 'react'

import PlusIcon from 'assets/icons/PlusIcon'
import MinusIcon from 'assets/icons/MinusIcon'
import Text from 'atoms/Text'
import Icon from 'atoms/Icon'
import { CounterWrapper, Divider, IconWrapper } from './QuantityCounter.styled'

const QuantityCounter = ({
  count = 0,
  setCount = () => {},
  onIncrement = () => {},
  onDecrement = () => {},
  disabled = false,
}) => {
  return (
    <CounterWrapper disabled={disabled}>
      <IconWrapper
        onClick={() => {
          if (count === 1) return
          setCount(count - 1)
          onDecrement()
        }}
        disabled={count === 1}
      >
        <Icon width='10px'>
          <MinusIcon />
        </Icon>
      </IconWrapper>
      <Divider />
      <Text mb='3px'>{count}</Text>
      <Divider />
      <IconWrapper
        onClick={() => {
          setCount(count + 1)
          onIncrement()
        }}
      >
        <Icon width='10px'>
          <PlusIcon />
        </Icon>
      </IconWrapper>
    </CounterWrapper>
  )
}

export default QuantityCounter
