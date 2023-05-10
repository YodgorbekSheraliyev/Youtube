import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAHMvC-ZJaKEKaYrlho8txKRVXHGIgUYBM",
  authDomain: "auth-lesson-55.firebaseapp.com",
  projectId: "auth-lesson-55",
  storageBucket: "auth-lesson-55.appspot.com",
  messagingSenderId: "700281087864",
  appId: "1:700281087864:web:5f06b9f21a596f6f688a8d",
  measurementId: "G-X86THT2ZKC",
});

const auth = app.auth();

export { auth };

export default app;