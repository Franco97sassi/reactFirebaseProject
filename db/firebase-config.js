 //inicializo firebase
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyCtxbbahdYsG6Mk7EMI5iJoKosywlRiYT8",
  authDomain: "reactfirebase-e1fd4.firebaseapp.com",
  projectId: "reactfirebase-e1fd4",
  storageBucket: "reactfirebase-e1fd4.appspot.com",
  messagingSenderId: "643323982580",
  appId: "1:643323982580:web:cbb085c3f36960317224a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;