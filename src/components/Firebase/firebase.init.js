// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIKckGgt2pZ8I9IdVLiGJVOchCm8zXmcM",
  authDomain: "coffee-store-80982.firebaseapp.com",
  projectId: "coffee-store-80982",
  storageBucket: "coffee-store-80982.firebasestorage.app",
  messagingSenderId: "953895617703",
  appId: "1:953895617703:web:d1e81d7778e165f3a4c782"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);