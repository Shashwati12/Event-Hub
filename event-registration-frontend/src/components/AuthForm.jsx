import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, KeyRound, Mail } from "lucide-react";
import { toast } from "sonner";

export const AuthForm = ({
  type,
  userType,
  onLogin,
  onRegister,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (type === "signup") {
        if (!onRegister) {
          throw new Error("Register handler not provided");
        }

        await onRegister({
          name,
          email,
          password
        });

        toast.success("Account created successfully!");
      } else {
        if (!onLogin) {
          throw new Error("Login handler not provided");
        }

        await onLogin(email, password);
      }
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-6 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          {type === "login" ? "Welcome Back!" : "Create Account"}
        </h2>
        <p className="text-white/80">
          {type === "login" ? "Sign in as " : "Sign up as "}
          <span className="font-semibold">{userType}</span>
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        {type === "signup" && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              required
              className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
          />
        </div>

        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-200 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading
          ? "Processing..."
          : type === "login"
          ? "Sign In"
          : "Sign Up"}
      </motion.button>
    </motion.form>
  );
};
