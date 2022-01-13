import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, getFirestore, query, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlQrsCWMcGu_lesAUv5A-j3uAKoQ-NCSE",
  authDomain: "crwn-clothing-5fa32.firebaseapp.com",
  projectId: "crwn-clothing-5fa32",
  storageBucket: "crwn-clothing-5fa32.appspot.com",
  messagingSenderId: "60310957473",
  appId: "1:60310957473:web:9afc06e3b2403d6fb82fe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = query(doc(firestore, `users/${userAuth.uid}`));
  const snapShot = await getDoc(userRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date().toLocaleDateString();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userRef;
};

const signInWithGoogle = () => signInWithPopup(auth, provider);

export { firestore, auth, signInWithGoogle };
