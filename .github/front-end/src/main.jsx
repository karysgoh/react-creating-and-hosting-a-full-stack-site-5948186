import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6WXhjDN4apwACbEKDhAjhzn0_fJyBegg",
  authDomain: "full-stack-react-bd2f6.firebaseapp.com",
  projectId: "full-stack-react-bd2f6",
  storageBucket: "full-stack-react-bd2f6.firebasestorage.app",
  messagingSenderId: "309240738546",
  appId: "1:309240738546:web:24d395d3f5791444d1966b",
  measurementId: "G-9VRWVL6KCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
