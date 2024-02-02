// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsz9Ol5GloWTSa4YJIf_dcWaRGhldd6do",
  authDomain: "bbcnews-53c7a.firebaseapp.com",
  projectId: "bbcnews-53c7a",
  storageBucket: "bbcnews-53c7a.appspot.com",
  messagingSenderId: "638308963038",
  appId: "1:638308963038:web:a00e099a109be006cf684f",
  measurementId: "G-6TEWN0J6ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app);



