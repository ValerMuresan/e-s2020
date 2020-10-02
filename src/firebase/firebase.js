import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBwv5JhCjwaM9AUNcnPhcXXWwXcLtMW6ec",
    authDomain: "e-store-v1.firebaseapp.com",
    databaseURL: "https://e-store-v1.firebaseio.com",
    projectId: "e-store-v1",
    storageBucket: "e-store-v1.appspot.com",
    messagingSenderId: "444048328047",
    appId: "1:444048328047:web:af3d0f07890cfbda94949a",
    measurementId: "G-PWLTJ0PLNV"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters = ( { prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;