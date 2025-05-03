import React, { useState, useContext, useRef, useEffect } from "react";
import { MapPin, Menu, X, LogOut } from "lucide-react";
import useLocationStore from "utils/locationStore";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "./AppProvider";
import { getAuth, signOut } from "firebase/auth";
import { NotificationIcon } from "./NotificationIcon";
import { NotificationCenter } from "./NotificationCenter";

export const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  // Notification states
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const notificationRef = useRef(null);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    ...(user ? [{ href: "/user/my-events", label: "My Events" }] : []),
    { href: "/help", label: "Help" },
    { href: "/contact", label: "Contact" },
  ];
  
  const handleNavigate = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/login/user");
  };

  // Handle View All Notifications button click
  const handleViewAllNotifications = () => {
    setIsNotificationOpen(false);
    setShowNotificationCenter(true);
  };

  // Close notification center on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="py-4 px-6 w-full backdrop-blur-md bg-white/90 fixed top-0 z-50 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.1)] border-b border-gray-100">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <h1
              className="text-2xl font-bold cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#310C7E] to-[#9372C1] font-brand hover:scale-105 transition-transform drop-shadow-md animate-float"
              onClick={() => handleNavigate("/")}
            >
              EventHub
            </h1>
          </div>

          {/* Middle nav items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                delay={index * 0.1}
                onNavigate={handleNavigate}
              />
            ))}
          </div>

          {/* Right section */}
          <div className="hidden md:flex items-center space-x-4 relative" ref={notificationRef}>
            {user && (
              <>
                {/* Notification Icon */}
                <div className="cursor-pointer relative">
                  <NotificationIcon onViewAll={handleViewAllNotifications} />
                </div>
              </>
            )}

            {user ? (
              <>
                <span className="text-gray-700 font-medium">
                  👤 {user.displayName || "User"}
                </span>
                <Button
                  variant="ghost"
                  onClick={handleLogout}
                  className="text-red-500 hover:bg-red-50 rounded-full hover:scale-105 transition-all duration-200 flex items-center space-x-2 px-4 py-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate("/login/user")}
                  className="text-white hover:bg-gray-100 rounded-full hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  Login
                </Button>
                <Button
                  onClick={() => handleNavigate("/signup/user")}
                  className="bg-gradient-to-r from-[#310C7E] to-[#9372C1] hover:from-[#9372c1] hover:to-[#310C7E] text-white rounded-full shadow-md"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Full Notification Center */}
      {showNotificationCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden animate-fade-in-up">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Notification Center</h2>
              <Button 
                variant="ghost" 
                onClick={() => setShowNotificationCenter(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <NotificationCenter />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ href, label, delay = 0, onNavigate }) => (
  <span
    onClick={() => onNavigate(href)}
    className="text-gray-700 hover:text-gray-900 cursor-pointer font-medium relative group transition-all duration-200 hover:drop-shadow-md"
    style={{ animationDelay: `${delay}s` }}
  >
    {label}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#310C7E] to-[#9372C1] group-hover:w-full transition-all duration-300 shadow-sm"></span>
  </span>
);

export default Navbar;