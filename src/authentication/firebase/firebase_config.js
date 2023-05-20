// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoOrbh9QVsgHF7KwJjxRt-ig7hRKaeFAs",
  authDomain: "assignment-11-68854.firebaseapp.com",
  projectId: "assignment-11-68854",
  storageBucket: "assignment-11-68854.appspot.com",
  messagingSenderId: "327260469304",
  appId: "1:327260469304:web:7880dffed14701fdc68ecd",
  measurementId: "G-MWMNEZRQTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: import.meta.env.VITE_APIKEY,
// authDomain: import.meta.env.VITE_AUTHDOMAIN,
// projectId: import.meta.env.VITE_PROJECTID,
// storageBucket: import.meta.env.VITE_STORAGEBUCKET,
// messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
// appId: import.meta.env.VITE_APPID