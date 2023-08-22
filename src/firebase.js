// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBM08pOFKi66pVtGyifXa7JE8AKP0bNLY",
  authDomain: "svelte-auth-5c55a.firebaseapp.com",
  projectId: "svelte-auth-5c55a",
  storageBucket: "svelte-auth-5c55a.appspot.com",
  messagingSenderId: "725500632275",
  appId: "1:725500632275:web:51ec48bea677671ddf0826"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);