
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where} from "firebase/firestore/lite";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

// Getting vans data below

const db = getFirestore(app); 

const vansCollectionRef = collection(db, "vans");


export const getVans = async () => {
  const snapshot = await getDocs(vansCollectionRef);
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
};

export const getVan = async (id) => {
  const docRef = doc(db, "vans", id)
  const snapshot = await getDoc(docRef); 
  
  if (!snapshot.exists()) {
    console.log("Van not found")
  }
  
  return {
    ...snapshot.data(),
    id: snapshot.id
  }
}


export const getHostVans = async () => {
  const q = query(vansCollectionRef, where("hostId", "==", "123"));
  const snapshot = await getDocs(q);
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
};


// handling login below


export const auth = getAuth(app); 

export async function loginUser({ email, password, isSignup = false}) {
  try {
    if (isSignup) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user; 
    } else {
      const userCredential = await signInWithEmailAndPassword(auth, email, password); 
      return userCredential.user; 
    }
  } catch (error) {
    throw new Error(error.message); 
  }
}

