import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAU0WtPCJIUD3lcMxWpDQc1UznBiC8IJsQ",
  authDomain: "clone-aaa2e.firebaseapp.com",
  projectId: "clone-aaa2e",
  storageBucket: "clone-aaa2e.appspot.com",
  messagingSenderId: "630495399760",
  appId: "1:630495399760:web:f88589b933c7da9964e655",
  measurementId: "G-7J6Q56Z5EN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
