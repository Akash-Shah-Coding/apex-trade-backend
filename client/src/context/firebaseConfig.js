import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAAnEd4GRf0zgyf67CQdObrAGEnp673V7Y",
    authDomain: "apex-8e026.firebaseapp.com",
    projectId: "apex-8e026",
    storageBucket: "apex-8e026.appspot.com",
    messagingSenderId: "753178886828",
    appId: "1:753178886828:web:86d1ed2bd7f37501dd1509",
    measurementId: "G-W7Z01FTPPJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Intance for google
const googleProvider = new GoogleAuthProvider();


//Sign Up
export const signupUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}

//Sign In
export const signInUserWithEmailandPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

//Auth with Google
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
