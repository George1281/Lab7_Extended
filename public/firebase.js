// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFS5E8FSnIhOdZUlIJLUPZaTAbwA_AcQg",
  authDomain: "lab7-e42fd.firebaseapp.com",
  projectId: "lab7-e42fd",
  storageBucket: "lab7-e42fd.appspot.com",
  messagingSenderId: "572276240380",
  appId: "1:572276240380:web:5709bc8697e59e16f28c79",
  measurementId: "G-ZHKM3DKNPZ"
};

const app = initializeApp(firebaseConfig);
export { app };
