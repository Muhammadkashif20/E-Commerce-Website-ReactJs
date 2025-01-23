// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn38x7XwD7hQLXq-bi7OQvuzfI2qC1u24",
  authDomain: "e-commerce-project-react-3549e.firebaseapp.com",
  projectId: "e-commerce-project-react-3549e",
  storageBucket: "e-commerce-project-react-3549e.firebasestorage.app",
  messagingSenderId: "441122152783",
  appId: "1:441122152783:web:7d13043b2387eca698a53a",
  measurementId: "G-HMEPVF8C2Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);    