import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4Ihrwi88UW7sRjHhaUV4-WJNeVw7Q1QY",
  authDomain: "event-endeavors.firebaseapp.com",
  projectId: "event-endeavors",
  storageBucket: "event-endeavors.appspot.com",
  messagingSenderId: "267665243824",
  appId: "1:267665243824:web:d3aa20b12333508e028575",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
