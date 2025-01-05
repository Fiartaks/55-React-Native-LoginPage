// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaGwlQeDEagIRiWMuI_tPAQG781u2jYqA",
  authDomain: "test-app-ea4d3.firebaseapp.com",
  projectId: "test-app-ea4d3",
  storageBucket: "test-app-ea4d3.firebasestorage.app",
  messagingSenderId: "872129659349",
  appId: "1:872129659349:web:83accb154c0741b3ccfd5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
 export const db = getFirestore(app);

export default app;