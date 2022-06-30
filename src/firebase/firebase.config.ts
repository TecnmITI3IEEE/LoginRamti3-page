// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc7nibNg2oPUJIqo1B0i3OQpST6JzEBxI",
  authDomain: "rami3-424e1.firebaseapp.com",
  projectId: "rami3-424e1",
  storageBucket: "rami3-424e1.appspot.com",
  messagingSenderId: "657461845319",
  appId: "1:657461845319:web:6e46a7fc83f22dd94e4062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);