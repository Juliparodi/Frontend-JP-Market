// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBW408RhISmY44T8EVbMq2aunc6lMmfCcM",
  authDomain: "jp-market-1944d.firebaseapp.com",
  projectId: "jp-market-1944d",
  storageBucket: "jp-market-1944d.appspot.com",
  messagingSenderId: "586869991163",
  appId: "1:586869991163:web:a7068dfd37bc63fecef25e",
  measurementId: "G-H02H1MWBM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(getFirestore(app))

export const db = getFirestore(app);
