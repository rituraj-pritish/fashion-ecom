import React from 'react'
import currencyList from 'redux/currency/currencyList'

const CurrencySelector = ({ changeCurrency, currencyCode }) => {
  const handleChange = e => {
    changeCurrency(e.target.value)
  }

  return (
    <form>
      <label for='currency'>Currency</label>
      <select name='currency' id='currency' onChange={handleChange}>
        {/* <option selected={currencyCode === 'USD'} value='USD'>USD</option>
        <option selected={currencyCode === 'INR'} value='INR'>INR</option> */}
        {Object.values(currencyList).map(({ code, name_plural }) => (
          <option
            selected={currencyCode === code}
            value={code}
          >{`${code} - ${name_plural}`}</option>
        ))}
      </select>
    </form>
  )
}

export default CurrencySelector
