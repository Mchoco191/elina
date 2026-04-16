// src/firebase.js
// ⚠️ REMPLACE CES VALEURS par celles de TON projet Firebase
// (voir le guide étape 3 dans GUIDE_INSTALLATION.txt)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCqbtLJDg0K2J3-mUrNo_HJ3G3J9cNUspc",
  authDomain: "elina-marius-wedding.firebaseapp.com",
  projectId: "elina-marius-wedding",
  storageBucket: "elina-marius-wedding.firebasestorage.app",
  messagingSenderId: "525858973056",
  appId: "1:525858973056:web:ff00d4d8faccfecececd65"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
