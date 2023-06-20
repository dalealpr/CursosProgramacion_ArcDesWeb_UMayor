// Import library firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//Firebase credentials 
const firebaseConfig = {
    apiKey: "AIzaSyCLNGQYNSLHIWKz8LPFbuJwvzRntIaoVLE",
    authDomain: "ecommercecursosprog.firebaseapp.com",
    projectId: "ecommercecursosprog",
    storageBucket: "ecommercecursosprog.appspot.com",
    messagingSenderId: "857702461413",
    appId: "1:857702461413:web:f97c660ed501c0d9cb090c",
    measurementId: "G-80YV3PYR8E"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

export default app