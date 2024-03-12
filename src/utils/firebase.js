// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW8qrymk_l6aeLt9n_oggb__qVx2XocTg",
  authDomain: "netflixgpt-970f8.firebaseapp.com",
  projectId: "netflixgpt-970f8",
  storageBucket: "netflixgpt-970f8.appspot.com",
  messagingSenderId: "591398941154",
  appId: "1:591398941154:web:6f8a6d0e5b4403aa3d89bb",
  measurementId: "G-BRSKTS8WVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();