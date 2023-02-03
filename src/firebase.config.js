import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBE0uJsSS5YS75jmjIxpFM2cmQ19e5XtAc",
  authDomain: "vuonthongminh-d3dc4.firebaseapp.com",
  databaseURL: "https://vuonthongminh-d3dc4-default-rtdb.firebaseio.com",
  projectId: "vuonthongminh-d3dc4",
  storageBucket: "vuonthongminh-d3dc4.appspot.com",
  messagingSenderId: "315617951382",
  appId: "1:315617951382:web:9b7550cff9f84fcfdc4cb7",
  measurementId: "G-95BF043621"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
