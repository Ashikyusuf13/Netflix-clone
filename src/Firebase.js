import { initializeApp } from "firebase/app";
import {
     createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut,
     GoogleAuthProvider,
     signInWithPopup,
    }from "firebase/auth"
import {
    addDoc,
    collection, 
    getFirestore} from "firebase/firestore"
    
    import {toast} from "react-toastify"
   
   


const firebaseConfig = {
  apiKey: "AIzaSyAsyLkGdVMeFex6rPTa0KEmJNddeq1PJuY",
  authDomain: "redfliix-clone.firebaseapp.com",
  projectId: "redfliix-clone",
  storageBucket: "redfliix-clone.firebasestorage.app",
  messagingSenderId: "859564838979",
  appId: "1:859564838979:web:e7c77fb9c9a1bb855c44f6",
  measurementId: "G-490DKW8H7W"
};

const provider = new GoogleAuthProvider();


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.log(error);
    toast(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
    toast(error.code.split("/")[1].split("-").join(" "));
  }
};

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Add user to Firestore if not already present
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      authProvider: "google",
    });
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData ? error.customData.email : null;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error('Error during Google Sign-In:', errorCode, errorMessage);
    toast(errorCode.split("/")[1].split("-").join(" "));
    return null;
  }
};

export { auth, db, signup, login, logout, signInWithGoogle };