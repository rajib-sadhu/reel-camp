// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm71z2mQBiasNlIh_QtaA0PM-DlAXQETA",
  authDomain: "rs-reel-camp.firebaseapp.com",
  projectId: "rs-reel-camp",
  storageBucket: "rs-reel-camp.appspot.com",
  messagingSenderId: "28858554104",
  appId: "1:28858554104:web:04be8a70c138a3ee0d0d0d",
  measurementId: "G-MMMSK9NZCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;