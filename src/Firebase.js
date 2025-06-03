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
  apiKey: "AIzaSyA6OkRdZfLfn_9gWAh_cLfSvkPadbV9HiI",
  authDomain: "netflex-clone-f742a.firebaseapp.com",
  projectId: "netflex-clone-f742a",
  storageBucket: "netflex-clone-f742a.firebasestorage.app",
  messagingSenderId: "433245337255",
  appId: "1:433245337255:web:814f70751222d010090d82"
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