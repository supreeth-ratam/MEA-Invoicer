import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAFmqP50dRPdSp91B62b5zVgrL-rSHFRxM",
  authDomain: "mea--invoicer.firebaseapp.com",
  projectId: "mea--invoicer",
  storageBucket: "mea--invoicer.appspot.com",
  messagingSenderId: "441222978553",
  appId: "1:441222978553:web:2ed490425e0111bbf87b28",
  measurementId: "G-W79Z4DRLYG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
