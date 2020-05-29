import React from 'react'

import PlusIcon from 'assets/icons/PlusIcon'
import MinusIcon from 'assets/icons/MinusIcon'
import Icon from 'components/ui/Icon'
import Text from 'components/ui/Text'
import { CounterWrapper } from './QuantityCounter.styled'

const QuantityCounter = ({
  count = 0,
  setCount = () => {},
  onIncrement = () => {},
  onDecrement = () => {}
}) => {
  return (
    <CounterWrapper>
      <Icon
        width='10px'
        onClick={() => {
          if (count === 1) return
          setCount(count - 1)
          onDecrement()
        }}
      >
        <MinusIcon />
      </Icon>
      <Text mb='3px'>{count}</Text>
      <Icon
        width='10px'
        onClick={() => {
          setCount(count + 1)
          onIncrement()
        }}
      >
        <PlusIcon />
      </Icon>
    </CounterWrapper>
  )
}

export default QuantityCounter
