// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFunctions, httpsCallable } from "firebase/functions";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD89PH6NalTRBWSsPmZEAbjYjRczSVGTz8",
  authDomain: "umeet-3af8b.firebaseapp.com",
  databaseURL: "https://umeet-3af8b-default-rtdb.firebaseio.com",
  projectId: "umeet-3af8b",
  storageBucket: "umeet-3af8b.appspot.com",
  messagingSenderId: "1066841445684",
  appId: "1:1066841445684:web:f54b569ca94abcc3340161",
  measurementId: "G-G7F3K65SHG"
};

// Initialize Firebase
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const analytics = getAnalytics(app);
export const functions = getFunctions(app);
export const enrollInEvent = httpsCallable(functions, 'enrollInEvent');
export const unenrollInEvent = httpsCallable(functions, 'unenrollInEvent');
export const signUp = httpsCallable(functions, 'signUp');
// export const createNewEvent = httpsCallable(functions, 'createNewEvent');
// export const deleteEvent = httpsCallable(functions, 'deleteEvent');

import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";

