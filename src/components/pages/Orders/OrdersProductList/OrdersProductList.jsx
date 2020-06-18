import React from 'react'
import PropTypes from 'prop-types'

import { ProductWrapper, Details, ListWrapper } from './OrdersProductList.styled'

const OrdersProductList = ({ products, currency_rate, currency_symbol }) => {
  return (
    <ListWrapper>
      {products.map(({ name, price, imageUrl }) => (
        <ProductWrapper>
          <div>
            <img src={imageUrl} alt={name} />
          </div>
          <Details>
            <div>{name}</div>
            <div>
              {`${currency_symbol} ${(currency_rate * price).toFixed(2)}`}
            </div>
          </Details>
        </ProductWrapper>
      ))}
    </ListWrapper>
  )
}

OrdersProductList.propTypes = {
  products: PropTypes.array.isRequired,
  currency_rate: PropTypes.number.isRequired,
  currency_symbol: PropTypes.number.isRequired
}

export default OrdersProductList
