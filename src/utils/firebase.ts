// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRdeeXfSo3b6yb7OaLMHdlCkxeqv34a80",
  authDomain: "dactyl-weather-app.firebaseapp.com",
  projectId: "dactyl-weather-app",
  storageBucket: "dactyl-weather-app.appspot.com",
  messagingSenderId: "336898701353",
  appId: "1:336898701353:web:00bb5962a79d5614260438",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
