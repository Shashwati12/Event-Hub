import { useEffect, useState, createContext } from "react";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import axios from "axios"; // Make sure to install axios


export const AuthContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to validate JWT token on app load
  const validateToken = async (token) => {
    try {
      // Example API endpoint to validate JWT
      const response = await axios.post("http://localhost:5000/api/validateToken", { token });

      if (response.data.isValid) {
        setUser(response.data.user); // Set the user data after validation
      } else {
        setUser(null); // If token is invalid, clear the user data
      }
    } catch (error) {
      console.error("Error validating token:", error);
      setUser(null); // If an error occurs during validation, clear the user data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (token) {
      validateToken(token); // If token exists, validate it
    } else {
      setLoading(false); // No token, stop loading
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      <Navbar />
      <div className="pt-16">{children}</div>
      <Toaster position="top-right" richColors />
    </AuthContext.Provider>
  );
};
