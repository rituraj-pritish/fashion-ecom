import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
	ProductWrapper,
	Details,
	ListWrapper
} from './OrdersProductList.styled'
import { MoreProducts } from '../OrdersList/OrdersList.styled'

const OrdersProductList = ({ products, currency_rate, currency_symbol }) => {
	return (
		<ListWrapper>
			{products
				.slice(0, 2)
				.map(({ productId, variantId, name, price, imageUrl }) => (
					<ProductWrapper key={variantId}>
						<div>
							<Link to={`/product/${productId}/variant/${variantId}`}>
								<img src={imageUrl} alt={name} />
							</Link>
						</div>
						<Details>
							<Link to={`/product/${productId}/variant/${variantId}`}>
								<div>{name}</div>
							</Link>
							<div>
								{`${currency_symbol} ${(currency_rate * price).toFixed(2)}`}
							</div>
						</Details>
					</ProductWrapper>
				))}
			<MoreProducts>
				{products.length > 2 &&
          `. . . ${products.length - 2} more ${
          products.length > 3 ? 'products' : 'product'
          }`}
			</MoreProducts>
		</ListWrapper>
	)
}

OrdersProductList.propTypes = {
	products: PropTypes.array.isRequired,
	currency_rate: PropTypes.number.isRequired,
	currency_symbol: PropTypes.number.isRequired
}

export default OrdersProductList
