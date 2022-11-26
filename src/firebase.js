
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyD5o0NTQ66VrXpIIHiPrbZbmh0N4lAqC_k",
    authDomain: "clone-855e7.firebaseapp.com",
    projectId: "clone-855e7",
    storageBucket: "clone-855e7.appspot.com",
    messagingSenderId: "320899665342",
    appId: "1:320899665342:web:42d7285c6d1f1dd09e7def",
    measurementId: "G-SGZGPH95LD"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const auth= getAuth(app);
  export {db,auth};