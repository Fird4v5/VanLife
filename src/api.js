
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCJABaznv3jKbNqMuQD4Upqu89bwFMe_7k",
  authDomain: "vanlife-5f2db.firebaseapp.com",
  projectId: "vanlife-5f2db",
  storageBucket: "vanlife-5f2db.firebasestorage.app",
  messagingSenderId: "137859932841",
  appId: "1:137859932841:web:539df98c795d69edf9bfb8"
};

const app = initializeApp(firebaseConfig);
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


export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}