import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfTBukjo5LYQSSjH0gyyWtJHq1m-W5WwQ",
  authDomain: "nendoceramica-40714.firebaseapp.com",
  projectId: "nendoceramica-40714",
  storageBucket: "nendoceramica-40714.appspot.com",
  messagingSenderId: "329192529900",
  appId: "1:329192529900:web:06d81cd128126027ed6ac9"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);