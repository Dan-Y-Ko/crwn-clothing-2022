import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// use your own config
// I used env but it's not necssary, just paste the config you get from firebase console
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crown-clothing-2022-a2a8a.firebaseapp.com",
  projectId: "crown-clothing-2022-a2a8a",
  storageBucket: "crown-clothing-2022-a2a8a.appspot.com",
  messagingSenderId: "165475965508",
  appId: "1:165475965508:web:7cf114c3d757810a22ba11",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promp: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
