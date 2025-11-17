import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLLVgClxmt6AIa4poKXLsUH0w8BMLHDHo",
    authDomain: "mohammed-project1-86537.firebaseapp.com",
    projectId: "mohammed-project1-86537",
    storageBucket: "mohammed-project1-86537.firebasestorage.app",
    messagingSenderId: "763638328916",
    appId: "1:763638328916:web:ac1934b3d8cddd5d9d07c1",
    measurementId: "G-TCDB56B8SQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
