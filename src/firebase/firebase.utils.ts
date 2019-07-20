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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;