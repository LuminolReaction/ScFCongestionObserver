// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeAn328E1zhdwikuEkEQNez_MHWXsTNDo",
  authDomain: "scfcongestionobserver-1fd15.firebaseapp.com",
  databaseURL: "https://scfcongestionobserver-1fd15-default-rtdb.firebaseio.com",
  projectId: "scfcongestionobserver-1fd15",
  storageBucket: "scfcongestionobserver-1fd15.firebasestorage.app",
  messagingSenderId: "210845466082",
  appId: "1:210845466082:web:ef5f09a69732e0fcf10dbb",
  measurementId: "G-2Y41C3HN2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);