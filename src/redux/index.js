import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer'
import auth from './auth'
import app from './app'
import products from './products'

export default combineReducers({
  user: userReducer,
  app,
  products,
  auth
});
