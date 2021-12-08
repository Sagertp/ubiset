import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBU7Uke13tCG6VLmeVU1tjPLqMMen2LW_4",
  authDomain: "ms-app-4207d.firebaseapp.com",
  projectId: "ms-app-4207d",
  storageBucket: "ms-app-4207d.appspot.com",
  messagingSenderId: "846406454989",
  appId: "1:846406454989:web:6d3b0fa8454ea0af612384",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
