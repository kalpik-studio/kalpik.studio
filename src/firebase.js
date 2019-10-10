import firebase from "firebase/app";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXLw0u6kkhqLJOG-FecBxoZLw3QS0A5OY",
  authDomain: "kalpikstudio.firebaseapp.com",
  databaseURL: "https://kalpikstudio.firebaseio.com",
  projectId: "kalpikstudio",
  storageBucket: "kalpikstudio.appspot.com",
  messagingSenderId: "433756918281",
  appId: "1:433756918281:web:db132f3aee64ebd2eaded8",
  measurementId: "G-C412CFVNLS"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
