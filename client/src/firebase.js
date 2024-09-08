// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-c0b15.firebaseapp.com",
  projectId: "mern-estate-c0b15",
  storageBucket: "mern-estate-c0b15.appspot.com",
  messagingSenderId: "651301204728",
  appId: "1:651301204728:web:62c0926df60a088697010d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);