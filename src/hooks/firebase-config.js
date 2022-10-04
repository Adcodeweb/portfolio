import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzLuYk2LhIlecLgBHR8SekFanm-Wc-9vg",
  authDomain: "portfolio-89ff7.firebaseapp.com",
  projectId: "portfolio-89ff7",
  storageBucket: "portfolio-89ff7.appspot.com",
  messagingSenderId: "753694273138",
  appId: "1:753694273138:web:de9a1ce59018426bffdceb",
  measurementId: "G-V60FXN4GWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
