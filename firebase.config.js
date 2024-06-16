// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYb7nbVx2zxHYhz8hurS-8K7QQ7r0wAcA",
    authDomain: "food-ordering-1-d5a63.firebaseapp.com",
    projectId: "food-ordering-1-d5a63",
    storageBucket: "food-ordering-1-d5a63.appspot.com",
    messagingSenderId: "909885188710",
    appId: "1:909885188710:web:c70e8a58c3fdc3cb4e5ba7",
    measurementId: "G-0L9F4Z18F6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);