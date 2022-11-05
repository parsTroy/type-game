// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDnZbszJzRs4rk1vB4sjkJsMjO0hIK6VLA',
  authDomain: 'type-game-auth.firebaseapp.com',
  projectId: 'type-game-auth',
  storageBucket: 'type-game-auth.appspot.com',
  messagingSenderId: '475972355356',
  appId: '1:475972355356:web:a745424d234a3d9db066d9',
  measurementId: 'G-1SXDGCQLJ3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
