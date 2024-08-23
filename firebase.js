// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj3kiRLnCHGZwLavQUpBdrrAzVl8RzfQQ",
  authDomain: "pratice-6fa50.firebaseapp.com",
  projectId: "pratice-6fa50",
  storageBucket: "pratice-6fa50.appspot.com",
  messagingSenderId: "769747085643",
  appId: "1:769747085643:web:523282d93297072c5260ce"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app,firestore}  