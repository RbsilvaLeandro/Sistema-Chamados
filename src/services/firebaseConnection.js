import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDV_4YiKu3rxviPCKbF3_ypm0Dn4pp3Z3I",
    authDomain: "chamados-e7a4b.firebaseapp.com",
    projectId: "chamados-e7a4b",
    storageBucket: "chamados-e7a4b.appspot.com",
    messagingSenderId: "380863194593",
    appId: "1:380863194593:web:3a3e9ff4591a4837061ea0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;