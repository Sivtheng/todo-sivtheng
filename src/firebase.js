import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBRk5BMeYXnj0EZJByZ6iY355jkpoaQhXA",
  authDomain: "todo-sivtheng-firebase.firebaseapp.com",
  projectId: "todo-sivtheng-firebase",
  storageBucket: "todo-sivtheng-firebase.appspot.com",
  messagingSenderId: "621294881219",
  appId: "1:621294881219:web:623c6fa463f0ffe3391576",
  measurementId: "G-J80NZ91431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };