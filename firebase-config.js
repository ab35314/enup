// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

// 你的 Firebase 專案設定
const firebaseConfig = {
  apiKey: "AIzaSyBzJlJTL39lbaaH0xHO0ER9i3IkdVU4RpY",
  authDomain: "enup-d6c12.firebaseapp.com",
  projectId: "enup-d6c12",
  storageBucket: "enup-d6c12.firebasestorage.app",
  messagingSenderId: "278273996295",
  appId: "1:278273996295:web:90cdf846db6023ffcf9ca2"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Cloud Firestore 並匯出，讓其他 HTML 檔案可以使用
export const db = getFirestore(app);