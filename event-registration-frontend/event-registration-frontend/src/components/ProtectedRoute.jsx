import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AppProvider"; // ✅ Make sure this path is correct

export const ProtectedRoute = ({ children }) => {
  const context = useContext(AuthContext); // ✅ Don't destructure immediately

  // Handle missing context (prevents crash)
  if (!context) {
    console.warn("AuthContext is undefined — check AppProvider is wrapping your app.");
    return <Navigate to="/login/user" replace />;
  }

  const { user, loading } = context;
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login/user" replace state={{ from: location }} />;
  }

  return children;
};
