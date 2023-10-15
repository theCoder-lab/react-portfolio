import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoYOyO1p4iAI9K6uChtXxBthQ8b0qoPxA",
  authDomain: "blog-test-d1960.firebaseapp.com",
  projectId: "blog-test-d1960",
  storageBucket: "blog-test-d1960.appspot.com",
  messagingSenderId: "86602397577",
  appId: "1:86602397577:web:cb52f2d59cdce7438a1358"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
