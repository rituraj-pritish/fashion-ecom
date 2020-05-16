import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer'
import auth from './auth'
import app from './app'

export default combineReducers({
  user: userReducer,
  app,
  auth
});
