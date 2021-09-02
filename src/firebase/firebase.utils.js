import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBRZ0Gvmn14efsi5J7GJCCtSnNi2nzCfKk",
  authDomain: "crwn-db-88a88.firebaseapp.com",
  projectId: "crwn-db-88a88",
  storageBucket: "crwn-db-88a88.appspot.com",
  messagingSenderId: "641902512560",
  appId: "1:641902512560:web:aaab6b666af6dfdf3b2e75",
  measurementId: "G-JBW2PK1X6V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
