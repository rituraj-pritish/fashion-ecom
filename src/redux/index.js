import { combineReducers } from 'redux'
import overlay from './overlay'
import cart from './cart'
import wishlist from './wishlist'
import currency from './currency'
import user from './user'

const appReducer =  combineReducers({
	overlay,
	cart,
	wishlist,
	currency,
	user
})

const rootReducer = (state, action) => {
	if(action.type === 'LOGOUT') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
