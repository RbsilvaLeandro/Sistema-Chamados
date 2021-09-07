import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBu6Np--Oa8FvAhOoy0onFFKlvsI32E6SQ",
    authDomain: "chamados-46534.firebaseapp.com",
    projectId: "chamados-46534",
    storageBucket: "chamados-46534.appspot.com",
    messagingSenderId: "669076615519",
    appId: "1:669076615519:web:c8c45d4ee3d6dacc3bc6ea"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;