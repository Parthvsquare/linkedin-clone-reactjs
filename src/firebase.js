import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDRyH_aLrU8XA_U66SPyhPDJd8hnkSCfjY",
    authDomain: "linkedin-clone-rjs-c4e90.firebaseapp.com",
    projectId: "linkedin-clone-rjs-c4e90",
    storageBucket: "linkedin-clone-rjs-c4e90.appspot.com",
    messagingSenderId: "625906117780",
    appId: "1:625906117780:web:7339c7a88b9c800bc65881"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
const auth = firebase.auth();

export {database, auth};
