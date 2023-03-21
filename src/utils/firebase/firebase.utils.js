import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// ----------------------------  Setting up  --------------------------------------------------

const firebaseConfig = {
  apiKey: "AIzaSyBcQtM0GVWkMJrU-UrNQxUPk8tBRVfcRPY",
  authDomain: "clothing-ecommerce-db-2778d.firebaseapp.com",
  projectId: "clothing-ecommerce-db-2778d",
  storageBucket: "clothing-ecommerce-db-2778d.appspot.com",
  messagingSenderId: "662648769320",
  appId: "1:662648769320:web:84212e0f077bd6fe8ade1d",
};

const firebaseApp = initializeApp(firebaseConfig);

// ----------------------------  Authentication  --------------------------------------------------

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

//services of authentication are the same for the app, but the providers can be different.
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ----------------------------  Firestore  --------------------------------------------------

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
