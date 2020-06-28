import produce from 'immer'
import currencyList from './currencyList.json'

const GET_CURRENCIES_REQUEST = 'GET_CURRENCIES_REQUEST'
const GET_CURRENCIES_SUCCESS = 'GET_CURRENCIES_SUCCESS'
const GET_CURRENCIES_FAILURE = 'GET_CURRENCIES_FAILURE'

const CHANGE_CURRENCY = 'CHANGE_CURRENCY'

const currencyCode = localStorage.getItem('currency_code') || 'USD'

const initialState = {
  currency: {
    code: currencyCode,
    symbol: currencyList[currencyCode].symbol,
    rate: 1
  },
  rates: {},
  isLoading: true,
  error: false
}

export const getCurrencies = () => async dispatch => {
  dispatch({ type: GET_CURRENCIES_REQUEST })

  fetch('https://api.exchangeratesapi.io/latest?base=USD ')
    .then(res =>
      res
        .json()
        .then(res =>
          dispatch({ type: GET_CURRENCIES_SUCCESS, payload: res.rates })
        )
    )
    .catch(() => {
      dispatch({ type: GET_CURRENCIES_FAILURE })
    })
}

export const changeCurrency = code => {
  localStorage.setItem('currency_code', code)
  return {
    type: CHANGE_CURRENCY,
    payload: {
      code: code,
      symbol: currencyList[code].symbol
    }
  }
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    switch (type) {
      case GET_CURRENCIES_REQUEST:
        draft.isLoading = true
        break

      case GET_CURRENCIES_SUCCESS:
        draft.isLoading = false
        draft.error = false
        draft.rates = payload
        break

      case GET_CURRENCIES_FAILURE:
        draft.error = true
        draft.isLoading = false
        break

      case CHANGE_CURRENCY:
        draft.currency = {
          ...payload,
          rate: state.rates[payload.code]
        }
        break

      default:
        break
    }
  })
