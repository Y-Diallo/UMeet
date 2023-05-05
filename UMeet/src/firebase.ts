// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);