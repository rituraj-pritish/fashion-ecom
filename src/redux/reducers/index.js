import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import userReducer from './userReducer';

export default combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  user: userReducer
});
