
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0fh8e2HxWPyY9Vks5Sk2lGFZ00KVqGtU",
  authDomain: "ecommercereact-83ee4.firebaseapp.com",
  projectId: "ecommercereact-83ee4",
  storageBucket: "ecommercereact-83ee4.appspot.com",
  messagingSenderId: "652368215940",
  appId: "1:652368215940:web:0790eb9639ae1ba98167d1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db