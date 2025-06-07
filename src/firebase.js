import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCNWtccAz5Rw7-GJA7a5OEcSgiHjnDz8K0",
  authDomain: "test1-373e6.firebaseapp.com",
  projectId: "test1-373e6",
  storageBucket: "test1-373e6.appspot.com",
  messagingSenderId: "27586284103",
  appId: "1:27586284103:web:4d2ff0686a8d88a1ea7f62"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
