import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCfD9KCXq_cWCXe2GkBeW9GLkaLyQ9JaYE",
    authDomain: "todo-app-5ba4c.firebaseapp.com",
    projectId: "todo-app-5ba4c",
    storageBucket: "todo-app-5ba4c.appspot.com",
    messagingSenderId: "827293876482",
    appId: "1:827293876482:web:8f81b0e9bf60f986d2021b",
    measurementId: "G-LXN07C38YE"
});

const db = firebaseApp.firestore();
export default db ;