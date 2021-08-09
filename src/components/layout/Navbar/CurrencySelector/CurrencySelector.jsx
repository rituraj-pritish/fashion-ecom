import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'

import currencyList from 'redux/currency/currencyList'
import { Selector, SelectorWrapper } from './CurrencySelector.styled'
import clickOutside from 'helpers/clickOutside'

const CurrencySelector = ({ changeCurrency, currencyCode, hasError }) => {
  const [showSelector, setShowSelector] = useState(false)
  const node = useRef()

  const handleChange = e => {
    changeCurrency(e.target.value)
    setShowSelector(false)
  }

  clickOutside(node, () => setShowSelector(false))

  if(hasError) return null

  return (
    <SelectorWrapper ref={node}>
      <div onClick={() => setShowSelector(!showSelector)}>{currencyCode}</div>
      {showSelector && (
        <Selector>
          <label htmlFor='currency'>Select Currency</label>
          <select
            value={currencyCode}
            name='currency'
            id='currency'
            onChange={handleChange}
          >
            {Object.values(currencyList).map(({ code, name_plural }) => (
              <option
                key={code}
                value={code}
              >{`${code} - ${name_plural}`}</option>
            ))}
          </select>
        </Selector>
      )}
    </SelectorWrapper>
  )
}

CurrencySelector.propTypes = {
  changeCurrency: PropTypes.func.isRequired,
  currencyCode: PropTypes.string.isRequired,
  hasError: PropTypes.bool.isRequired
}

export default CurrencySelector
