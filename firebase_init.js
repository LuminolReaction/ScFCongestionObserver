// firebase_init.js

// Firebase 設定と初期化
const firebaseConfig = {
  apiKey: "AIzaSyBeAn328E1zhdwikuEkEQNez_MHWXsTNDo",
  authDomain: "scfcongestionobserver-1fd15.firebaseapp.com",
  databaseURL: "https://scfcongestionobserver-1fd15-default-rtdb.firebaseio.com",
  projectId: "scfcongestionobserver-1fd15",
  storageBucket: "scfcongestionobserver-1fd15.appspot.com",  // ← 修正あり
  messagingSenderId: "210845466082",
  appId: "1:210845466082:web:ef5f09a69732e0fcf10dbb",
  measurementId: "G-2Y41C3HN2D"
};

// Firebase App を初期化
firebase.initializeApp(firebaseConfig);

// 他のスクリプトで使うために db をグローバルに定義
const db = firebase.database();
