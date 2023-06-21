// Import library firebase
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore, collection, getDoc, query, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";



//Firebase credentials 
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_APYKEY,
    authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECTID,
    storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APP_APPID,
    measurementId: import.meta.env.VITE_APP_MEASUREMENTID
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//Autenticacion Login
export const auth = getAuth(app)
//DB
export const db = getFirestore(app)
export const storage = getStorage(app)

