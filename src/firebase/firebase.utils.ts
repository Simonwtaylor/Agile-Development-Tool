import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Axios from 'axios';

const config: any = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: "",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGESENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

export const createUserProfileDocument = 
  async (userAuth: any, additionalData: any) => {
    if(!userAuth) return;

    const userRef = await Axios.get(`${process.env.REACT_APP_TASK_URL}/user/auth/${userAuth.uid}`);

    if(!userRef || !userRef.data || userRef.status !== 200) {

      const {
        displayName, 
        email, 
        photoURL,
        uid
      } = userAuth;

      const newUserData = {
        displayName, 
        email, 
        photoURL, 
        uid
      };

      try {
       const newUser = await Axios.post(`${process.env.REACT_APP_TASK_URL}/user/`, newUserData);
       return newUser.data();
      } catch (error) {
        console.error(error);
      }
    }

    return userRef.data;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth: any) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}


export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase;