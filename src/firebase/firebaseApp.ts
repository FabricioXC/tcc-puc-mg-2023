// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgu0_VXHpK609_wlpbli8JFBAc_765o0A",
  authDomain: "tcc-puc-2023.firebaseapp.com",
  projectId: "tcc-puc-2023",
  storageBucket: "tcc-puc-2023.appspot.com",
  messagingSenderId: "951692625405",
  appId: "1:951692625405:web:4fa66d3234fbfa6b970594",
  measurementId: "G-NY394X7QJT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const initFirebase = () => {
  return app;
};
