// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3_64wW5imeZMYBPp-Lp4Izi-3a_zczUs",
  authDomain: "zomatoapi-d7b96.firebaseapp.com",
  projectId: "zomatoapi-d7b96",
  storageBucket: "zomatoapi-d7b96.appspot.com",
  messagingSenderId: "177082644351",
  appId: "1:177082644351:web:e5207911f1d74d26148c4a",
  measurementId: "G-8JQ8QJV0NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);