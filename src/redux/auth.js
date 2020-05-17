import { firebase, db } from 'services/firebase'
import produce from 'immer'
import { setAppLoading } from './app'
import setAlert from 'setAlert'

// types

const AUTH_REQUEST = 'AUTH_REQUEST'
const AUTH_FAILURE = 'AUTH_FAILURE'
const AUTH_SUCCESS = 'AUTH_SUCCESS'

// action creators

export const signup = data => async dispatch => {
  dispatch({ type: AUTH_REQUEST })

  const { email, password, name, phone } = data
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

    if (res.user.uid) {
      firebase.firestore().collection('users').doc(res.user.uid).set({
        name: name,
        phone: phone
      })
    }
    //TODO set user
    dispatch({ type: AUTH_SUCCESS })
    setAlert({ message: 'Sign up successful', type: 'success' })
  } catch (err) {
    dispatch({ type: AUTH_FAILURE, payload: err })
    //TODO handle err message
    console.log(err)
    // set alert
  }
}

export const signin = ({ email, password }) => async dispatch => {
  dispatch({ type: AUTH_REQUEST })
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)

    if (res.user.uid) {
      setAlert('Sign in successful', 'success')
    }
    //TODO set user
    dispatch({ type: AUTH_SUCCESS })
  } catch (err) {
    dispatch({ type: AUTH_FAILURE })
    if (
      err.code === 'auth/invalid-email' ||
      err.code === 'auth/wrong-password'
    ) {
      setAlert('Wrong Credentials', 'danger')
    } else {
      setAlert(err.message, 'danger')
    }
  }
}

export const authStateChangeHandler = () => async dispatch => {
  firebase.auth().onAuthStateChanged(async user => {
    if (user) {
      const res = await db.collection('users').doc(user.uid).get()

      const { displayName, email, photoURL, uid } = res.data()

      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          displayName,
          email,
          photoURL,
          uid
        }
      })

      dispatch(setAppLoading(false))
    } else {
      dispatch(setAppLoading(false))
    }
  })
}

export const signOut = () => async dispatch => {
  try {
    await firebase.auth().signOut()
    localStorage.clear()
    setAlert('Sign out successful', 'success')
  } catch (err) {}
  dispatch({ type: AUTH_FAILURE })
}

//reducer

const initialState = {
  user: null,
  isLoading: false,
  isAuthenticated: false
}

export default (state = initialState, { type, payload }) =>
  produce(state, draft => {
    //eslint-disable-next-line
    switch (type) {
      case AUTH_REQUEST:
        draft.isLoading = true
        draft.isAuthenticated = false
        draft.user = null
        break
      case AUTH_SUCCESS:
        draft.isLoading = false
        draft.isAuthenticated = true
        draft.user = payload
        break
      case AUTH_FAILURE:
        draft.isLoading = false
        draft.isAuthenticated = false
        draft.user = null
        break
    }
  })
