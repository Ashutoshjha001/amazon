import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhOO9PcViuuuAG0QXHfw4fFgCFMFVg_WA",
  authDomain: "clone-bcbbe.firebaseapp.com",
  projectId: "clone-bcbbe",
  storageBucket: "clone-bcbbe.appspot.com",
  messagingSenderId: "204267909640",
  appId: "1:204267909640:web:3071754ab0ae5089f017bd",
  measurementId: "G-92QRZM4HXD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
