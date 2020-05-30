import React from 'react'

const CurrencySelector = ({ changeCurrency, currencyCode }) => {
  const handleChange = e => {
    changeCurrency(e.target.value)
  }
  return (
    <form>
      <label for='currency'>Currency</label>
      <select name='currency' id='currency' onChange={handleChange}>
        <option selected={currencyCode === 'USD'} value='USD'>USD</option>
        <option selected={currencyCode === 'INR'} value='INR'>INR</option>
        {/* <option value='opel'>Opel</option>
        <option value='audi'>Audi</option> */}
      </select>
    </form>
  )
}

export default CurrencySelector
