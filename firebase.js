import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app"; // Import getApps and getApp
import {
  createUserWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYkGEtwK3sUsHKfF810HPurCa5QgSD7VM",
  authDomain: "backed-cb957.firebaseapp.com",
  projectId: "backed-cb957",
  storageBucket: "backed-cb957.appspot.com",
  messagingSenderId: "262937158437",
  appId: "1:262937158437:web:79c1e72c75f01559cfb0cc",
};

// Initialize Firebase App
let app;

if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp(); // Use existing app instance
}

// Initialize Firebase Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
const firestore = getFirestore(app);

export { auth, createUserWithEmailAndPassword, firestore };
