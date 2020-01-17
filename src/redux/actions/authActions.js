import firebase from '../../firebase/firebase';
import { setAlert } from './userActions';

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
  } catch (err) {}

  return { type: 'some' };
};

export const signin = ({ email, password }) => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
    setAlert('Sign in successful', 'success');
  } catch (err) {}
  return { type: 'some' };
};

export const signOut = () => {
  try {
    firebase.auth().signOut();
    setAlert('Sign out successful', 'success');
  } catch (err) {}
  return { type: 'some' };
};
