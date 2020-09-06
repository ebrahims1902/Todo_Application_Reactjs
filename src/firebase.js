import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBh_3_AjEfMmj7hGiWWG6zB31zG4lWvAU",
    authDomain: "todo-app-5ede7.firebaseapp.com",
    databaseURL: "https://todo-app-5ede7.firebaseio.com",
    projectId: "todo-app-5ede7",
    storageBucket: "todo-app-5ede7.appspot.com",
    messagingSenderId: "2549708035",
    appId: "1:2549708035:web:c9805a5e35bc6b86dba536",
    measurementId: "G-GNHMVT5XMJ"
});

const db = firebaseApp.firestore();

export default db;