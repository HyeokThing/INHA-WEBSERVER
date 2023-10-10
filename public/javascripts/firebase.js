// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAV7dpB8sTcUc6RwxJe2lg5ri-d6WeQizY",
  authDomain: "inha-web.firebaseapp.com",
  projectId: "inha-web",
  storageBucket: "inha-web.appspot.com",
  messagingSenderId: "756547363562",
  appId: "1:756547363562:web:474eabdc28c71d65672d93",
  measurementId: "G-H7T4DW2NG4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);