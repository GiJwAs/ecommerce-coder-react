import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBuOHPYcs6S8TRNz5t3PfGxi4mpSijLlUo",
    authDomain: "camaronbrujo-coderhouse.firebaseapp.com",
    projectId: "camaronbrujo-coderhouse",
    storageBucket: "camaronbrujo-coderhouse.appspot.com",
    messagingSenderId: "190529714883",
    appId: "1:190529714883:web:583a5af3b9df615adc4076"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = ()=>{
    return app
}