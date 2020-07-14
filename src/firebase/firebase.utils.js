import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyCOdkyobii4eOCS0rNCy6JFPqbTCc5LeN8",
    authDomain: "ecom-7c14d.firebaseapp.com",
    databaseURL: "https://ecom-7c14d.firebaseio.com",
    projectId: "ecom-7c14d",
    storageBucket: "ecom-7c14d.appspot.com",
    messagingSenderId: "1093940627246",
    appId: "1:1093940627246:web:181812864ab59a7e8cdcbf",
    measurementId: "G-DSV91V1FWF"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default  firebase;