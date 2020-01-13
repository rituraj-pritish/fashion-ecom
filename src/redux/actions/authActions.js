import firebase from '../../firebase/firebase';

export const signup = data => async dispatch  => {
  const { email, password, name, phone } = data;
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

    console.log(res.user);
    console.log(res.user.uid);

    if (res.user.uid) {
      console.log('called');
      firebase
        .firestore()
        .collection('users')
        .doc(res.user.uid)
        .set({
          name: name,
          phone: phone
        });
    }
  } catch (err) {}

  return { type: 'some' };
};

export const signin = ({ email, password }) => {
  try {
    firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (err) {}
  return { type: 'some' };
};

export const signOut = () => {
  try {
    firebase.auth().signOut();
  } catch (err) {}
  return { type: 'some' };
};
