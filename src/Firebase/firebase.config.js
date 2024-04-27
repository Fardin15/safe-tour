// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0-BHu6cv0r_8KZ2tf8fLonSMH-xuoUlY",
  authDomain: "safe-tour-7bec4.firebaseapp.com",
  projectId: "safe-tour-7bec4",
  storageBucket: "safe-tour-7bec4.appspot.com",
  messagingSenderId: "17685174132",
  appId: "1:17685174132:web:dc9a9feac69918e1933e21",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
