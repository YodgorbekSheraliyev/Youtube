import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBc_eE3YrlAuUJL8n2DdoArmZVQRNcOf4w",
  authDomain: "fir-6516d.firebaseapp.com",
  projectId: "fir-6516d",
  storageBucket: "fir-6516d.appspot.com",
  messagingSenderId: "1029520074250",
  appId: "1:1029520074250:web:3c345111178a8cc05c61f3",
  measurementId: "G-B16XC9LFZ3"
});

const auth = app.auth();

export { auth };

export default app;