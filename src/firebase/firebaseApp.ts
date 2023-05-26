// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAeAGghJhHbuVxSIy0kBF0gAh51pq8sLXk",
  // authDomain: "tcc-puc-2023.firebaseapp.com",
  // projectId: "tcc-puc-2023",
  // storageBucket: "tcc-puc-2023.appspot.com",
  // messagingSenderId: "951692625405",
  // appId: "1:951692625405:web:4fa66d3234fbfa6b970594",
  // measurementId: "G-NY394X7QJT",
  apiKey: `${process.env.FIREBASE_API_KEY}`,
  authDomain: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.FIREBASE_AUTH_DOMAIN}`,
  storageBucket: `${process.env.FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.FIREBASE_APP_ID}`,
  measurementId: `${process.env.FIREBASE_MEASUREMENT_ID}`,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const initFirebase = () => {
  return app;
};
