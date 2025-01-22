// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCieEBQ7K17g0qSt-LBDor2Teh58OJDGgI",
  authDomain: "cookbook-26536.firebaseapp.com",
  projectId: "cookbook-26536",
  storageBucket: "cookbook-26536.firebasestorage.app",
  messagingSenderId: "594348148672",
  appId: "1:594348148672:web:ec9f18abf355a721c56a25",
  measurementId: "G-XT5XYJ4KCR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);