import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCUVppIwDsXRqI3zhRMx1fVVNnFSvFa1d8',
  authDomain: 'fashion-e40e0.firebaseapp.com',
  databaseURL: 'https://fashion-e40e0.firebaseio.com',
  projectId: 'fashion-e40e0',
  storageBucket: 'fashion-e40e0.appspot.com',
  messagingSenderId: '349280087194',
  appId: '1:349280087194:web:bfb69ffc998ef31ae58323',
  measurementId: 'G-EDWS9NMZCX'
};

firebase.initializeApp(config);
firebase.firestore();
firebase.auth()

export default firebase