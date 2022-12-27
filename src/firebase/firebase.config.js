// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdDUk0IAPd9JMYgaZRKXY8ANoU79Qus0M",
  authDomain: "task-manager-app-1651a.firebaseapp.com",
  projectId: "task-manager-app-1651a",
  storageBucket: "task-manager-app-1651a.appspot.com",
  messagingSenderId: "292856359642",
  appId: "1:292856359642:web:96864501cfa448f55dd3e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;