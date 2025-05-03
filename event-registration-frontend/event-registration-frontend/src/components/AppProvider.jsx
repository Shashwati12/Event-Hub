import { useEffect, useState, createContext } from "react";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa6dyhRPBzILgeuM6tR5fNPyEn7_ybfAM",
  authDomain: "eventhub-databutton.firebaseapp.com",
  projectId: "eventhub-databutton",
  storageBucket: "eventhub-databutton.appspot.com",
  messagingSenderId: "731554350232",
  appId: "1:731554350232:web:cd0e0e9bf3a3c73d4f0424",
  measurementId: "G-RCMR7Y65L7",
};

export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    const db = getFirestore(app);
    const auth = getAuth(app);
    console.log("Firebase initialized ✅");

    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <Navbar />
      <div className="pt-16">{children}</div>
      <Toaster position="top-right" richColors />
    </AuthContext.Provider>
  );
};