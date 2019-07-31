import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config: any = {
  apiKey: "AIzaSyDPGfYhg9WxIY1bRijCxcVUtht1KMHFpGA",
  authDomain: "agile-development-tool-251e9.firebaseapp.com",
  databaseURL: "https://agile-development-tool-251e9.firebaseio.com",
  projectId: "agile-development-tool-251e9",
  storageBucket: "",
  messagingSenderId: "446433840720",
  appId: "1:446433840720:web:d459ac81e22f918c"
};

export const createUserProfileDocument = 
  async (userAuth: any, additionalData: any) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {
        displayName, 
        email, 
        photoURL
      } = userAuth;

      const createdAt = new Date();

      try {
        await userRef.set({
          displayName, 
          email, 
          createdAt, 
          photoURL,
          ...additionalData
        });
      } catch (error) {
        console.error(error);
      }
    }

    return userRef;
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