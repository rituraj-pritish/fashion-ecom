import firebase from '../../firebase/firebase';
import { setAlert } from './userActions';
import { SIGNOUT } from '../types';

export const signup = data => async dispatch => {
  const { email, password, name, phone } = data;
  try {
    const res = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (res.user.uid) {
      firebase
        .firestore()
        .collection('users')
        .doc(res.user.uid)
        .set({
          name: name,
          phone: phone
        });
    }
    setAlert('Sign up successful', 'success');
  } catch (err) {
    setAlert(err.message, 'danger');
  }

  return { type: 'some' };
};

export const signin = ({ email, password }) => async dispatch => {
  try {
    const res = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);

    if (res.user.uid) {
      setAlert('Sign in successful', 'success');
    }
  } catch (err) {
    if (
      err.code === 'auth/invalid-email' ||
      err.code === 'auth/wrong-password'
    ) {
      setAlert('Wrong Credentials', 'danger');
    } else {
      setAlert(err.message, 'danger');
    }
  }
  dispatch({ type: 'some' });
};

export const signOut = () => async dispatch => {
  try {
    const res = await firebase.auth().signOut();
    localStorage.clear();
    setAlert('Sign out successful', 'success');
  } catch (err) {}
  dispatch({ type: SIGNOUT });
};
