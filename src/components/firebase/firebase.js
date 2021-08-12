import firebase from "firebase";

var firebaseConfig = {
    // Data from Firebase
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const f = firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
