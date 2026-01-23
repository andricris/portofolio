// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtCCtOmYQeYR0duoNFmXkBZi8KksI5KVs",
  authDomain: "andri-chat.firebaseapp.com",
  projectId: "andri-chat",
  storageBucket: "andri-chat.firebasestorage.app",
  messagingSenderId: "13413990724",
  appId: "1:13413990724:web:8b4f24b2539b8e9ca09711",
  measurementId: "G-4YQFMQDZZK"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
