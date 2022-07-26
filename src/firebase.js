
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAv17LQKV-qzSiTOI5PT78am0zKCI9Fu4E",
  authDomain: "personal-portfolio-a3c45.firebaseapp.com",
  projectId: "personal-portfolio-a3c45",
  storageBucket: "personal-portfolio-a3c45.appspot.com",
  messagingSenderId: "1062886634531",
  appId: "1:1062886634531:web:bef03ce28413d0d671ed96",
  measurementId: "G-VVERH5G0RD"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);