import { combineReducers } from 'redux'
import cart from './cart'
import wishlist from './wishlist'

const appReducer =  combineReducers({
	cart,
	wishlist
})

const rootReducer = (state, action) => {
	if(action.type === 'LOGOUT') {
		state = undefined
	}

	return appReducer(state, action)
}

export default rootReducer
