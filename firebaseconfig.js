import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBafMvUMdnbrQLyX-6ZzT3Ej-kPcokXhtY",
    authDomain: "bookeridos.firebaseapp.com",
    projectId: "bookeridos",
    storageBucket: "bookeridos.appspot.com",
    messagingSenderId: "653383466786",
    appId: "1:653383466786:web:40b7348766315bc9e7ef7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);