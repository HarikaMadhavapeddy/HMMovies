// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDalnUjnx_xNWE_D943P7MbYLz5wkgEh7g",
  authDomain: "hmmovies-9a714.firebaseapp.com",
  projectId: "hmmovies-9a714",
  storageBucket: "hmmovies-9a714.appspot.com",
  messagingSenderId: "199085097764",
  appId: "1:199085097764:web:ace941cb29141d83d4a9b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);