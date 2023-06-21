import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAquIcTNIH0YAXkSQCdKdk2c22wcObTQN4",
  authDomain: "tarefasplus-27ef1.firebaseapp.com",
  projectId: "tarefasplus-27ef1",
  storageBucket: "tarefasplus-27ef1.appspot.com",
  messagingSenderId: "419263380157",
  appId: "1:419263380157:web:c19811986b2dddb1d695d4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db };