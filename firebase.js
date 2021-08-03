import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1GPALmNkxl219Hlr-Ba66CT0PlceL-T0",
  authDomain: "easy-essay-writing.firebaseapp.com",
  projectId: "easy-essay-writing",
  storageBucket: "easy-essay-writing.appspot.com",
  messagingSenderId: "596448484478",
  appId: "1:596448484478:web:75ce17ba3de80f19b50c2f",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
