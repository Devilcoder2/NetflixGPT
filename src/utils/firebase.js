/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase J S SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwmfx3OpDoHNvn2yD0CPgFu3ebErfc9EE",
  authDomain: "netflixgpt-a0baf.firebaseapp.com",
  projectId: "netflixgpt-a0baf",
  storageBucket: "netflixgpt-a0baf.appspot.com",
  messagingSenderId: "471345166634",
  appId: "1:471345166634:web:f4842aa8cf72d6c9868653",
  measurementId: "G-47BB1B9LC2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
