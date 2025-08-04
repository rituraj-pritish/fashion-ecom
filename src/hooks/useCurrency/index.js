import { createState, useState } from '@hookstate/core'
import React from 'react'

import currencyList from './currencyList.json'

const CURRENCY_EXCHANGE_BASE_URL = 'https://openexchangerates.org/api'

const currencyCode = localStorage.getItem('currency_code') || 'USD'

const INITIAL_STATE = {
	currency: {
		code: currencyCode,
		symbol: currencyList[currencyCode].symbol,
		rate: 1
	},
	rates: {},
	error: false
}

const CURRENCY_STATE = createState(INITIAL_STATE)

export default () => {
	const currencyState = useState(CURRENCY_STATE)
  
	const getCurrencies = () => {
		fetch(
			`${CURRENCY_EXCHANGE_BASE_URL}/latest.json?app_id=${process.env.REACT_APP_EXCHANGE_RATE_APP_ID}&base=USD`
		)
			.then(res =>
				res
					.json()
					.then(res =>
						currencyState.set(prevState => ({
							...prevState,
							rates: res.rates
						}))
					)
			).catch(err => {
				currencyState.set(prevState => ({
					...prevState,
					error: true
				}))
			})
	}
  
	const changeCurrency = code => {
		localStorage.setItem('currency_code', code)
		currencyState.set(prevState => ({
			...prevState,
			currency: {
				code,
				symbol: currencyList[code].symbol,
				rate: currencyState.get().rates[code]
			}
		}))
	}

	return React.useMemo(() => ({
		...currencyState.get(),
		getCurrencies,
		changeCurrency
	}))
}