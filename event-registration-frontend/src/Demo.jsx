// import React, { useEffect, useState } from "react";
// import { useParams, Navigate, useNavigate, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { toast } from "sonner";

// import { AuthForm } from "../components/AuthForm";
// import { FloatingElement } from "../components/FloatingElement";

// const VALID_TYPES = ["login", "signup"];
// const VALID_USER_TYPES = ["user", "host"];

// const Login = () => {
//   const { type, userType } = useParams();
//   const navigate = useNavigate();

//   const [userTypeState, setUserTypeState] = useState(userType || "user");

//   /* -------------------- Validate route params -------------------- */
//   useEffect(() => {
//     if (VALID_USER_TYPES.includes(userType)) {
//       setUserTypeState(userType);
//     }
//   }, [userType]);

//   if (!VALID_TYPES.includes(type)) {
//     return <Navigate to="/login/user" replace />;
//   }

//   if (!VALID_USER_TYPES.includes(userType)) {
//     return <Navigate to={`/${type}/user`} replace />;
//   }

//   /* -------------------- Helpers -------------------- */
//   const redirectByRole = (role) => {
//     if (role === "host") {
//       navigate("/admin", { replace: true });
//     } else {
//       navigate("/user-home", { replace: true });
//     }
//   };

//   /* -------------------- LOGIN -------------------- */
//   const handleLogin = async (email, password) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       localStorage.setItem("authToken", data.token);
//       toast.success("Logged in successfully");

//       redirectByRole(data.userType);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   /* -------------------- SIGNUP -------------------- */
//   const handleSignup = async (name, email, password) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           userType: userTypeState,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || "Signup failed");
//       }

//       localStorage.setItem("authToken", data.token);
//       toast.success("Account created successfully");

//       redirectByRole(data.userType);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   /* -------------------- UI -------------------- */
//   return (
//     <div
//       className="min-h-screen relative overflow-hidden flex items-center justify-center"
//       style={{
//         background: "linear-gradient(135deg, #310C7E 0%, #9372C1 100%)",
//       }}
//     >
//       {/* Floating Elements */}
//       <FloatingElement className="w-32 h-32 left-[10%] top-[20%]" />
//       <FloatingElement className="w-40 h-40 right-[15%] top-[15%]" />
//       <FloatingElement className="w-24 h-24 left-[20%] bottom-[20%]" />
//       <FloatingElement className="w-36 h-36 right-[20%] bottom-[25%]" />

//       <div className="relative z-10 w-full max-w-md px-4">
//         <div className="flex flex-col items-center">
//           {/* User Type Toggle */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mb-8 bg-white/10 backdrop-blur-lg rounded-full p-1 flex"
//           >
//             {VALID_USER_TYPES.map((ut) => (
//               <button
//                 key={ut}
//                 onClick={() => navigate(`/${type}/${ut}`)}
//                 className={`px-6 py-2 rounded-full transition-all ${
//                   userTypeState === ut
//                     ? "bg-purple-200 text-purple-900"
//                     : "text-white hover:bg-white/5"
//                 }`}
//               >
//                 {ut.charAt(0).toUpperCase() + ut.slice(1)}
//               </button>
//             ))}
//           </motion.div>

//           <AuthForm
//             type={type}
//             userType={userTypeState}
//             onLogin={handleLogin}
//             onSignup={handleSignup}
//           />

//           <p className="mt-6 text-white/80 text-center">
//             {type === "login"
//               ? "Don't have an account? "
//               : "Already have an account? "}
//             <Link
//               to={`/${type === "login" ? "signup" : "login"}/${userTypeState}`}
//               className="font-semibold text-white underline"
//             >
//               {type === "login" ? "Sign up" : "Log in"}
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
