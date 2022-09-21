import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhZ2a5uqie9redPrA7TjO3VyKTO9Wbt9k",
  authDomain: "newone1-7594c.firebaseapp.com",
  projectId: "newone1-7594c",
  storageBucket: "newone1-7594c.appspot.com",
  messagingSenderId: "232538688867",
  appId: "1:232538688867:web:4e46f96082600c529e9756",
  measurementId: "G-N09J65S62V"
};
  export default firebase.initializeApp(firebaseConfig)