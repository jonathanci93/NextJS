// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries   

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSFB61CTXyzayqkHijO6p7RV4rzQWsd1Y",
    authDomain: "sonnos-nextjs.firebaseapp.com",
    projectId: "sonnos-nextjs",
    storageBucket: "sonnos-nextjs.firebasestorage.app",
    messagingSenderId: "358803967464",
    appId: "1:358803967464:web:467c541ae4552c8b6d285d"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

