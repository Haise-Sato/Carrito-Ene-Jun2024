import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeC_xNw8j_oPxnUV-_k2tzcHgLItpn4lM",
  authDomain: "carrito-ene-jun.firebaseapp.com",
  projectId: "carrito-ene-jun",
  storageBucket: "carrito-ene-jun.appspot.com",
  messagingSenderId: "750981302959",
  appId: "1:750981302959:web:0bbad9d28f44fb950a625a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)