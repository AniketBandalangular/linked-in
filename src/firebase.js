
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBX9YoM1Igjno_gUUKcLXlV7dgwPXlnN6U",
  authDomain: "my-linkedin-app-c96de.firebaseapp.com",
  projectId: "my-linkedin-app-c96de",
  storageBucket: "my-linkedin-app-c96de.appspot.com",
  messagingSenderId: "898574455215",
  appId: "1:898574455215:web:b12c78e27669afcfc45f5a",
  measurementId: "G-T7YB646GST"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);