import { initializeApp } from "firebase/app";

const firebaseConfig = {
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