import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { auth, db } from '@/utils/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { User, KeyRound, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const AuthForm = ({ type, userType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let userCredential;

      if (type === 'signup') {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });

        await setDoc(doc(db, 'users', userCredential.user.uid), {
          name,
          email,
          userType,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });

        toast.success('Account created successfully!');
      } else {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success('Logged in successfully!');
      }

      // ✅ Save user info to localStorage
      localStorage.setItem("user", JSON.stringify({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName || name,
      }));

      // ✅ Redirect
      if (userType === 'host') {
        navigate('/host-dashboard');
      } else {
        navigate('/user-home');
      }

    } catch (err) {
      console.error(err);
      setError(err.message);
      toast.error(err.message);
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
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">
          {type === 'login' ? 'Welcome Back!' : 'Create Account'}
        </h2>
        <p className="text-white/80">
          {type === 'login' ? "Sign in as " : "Sign up as "}
          <span className="font-semibold">{userType}</span>
        </p>
      </div>

      <div className="space-y-4">
        {type === 'signup' && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
              placeholder="Full name"
              required
            />
          </div>
        )}

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
            placeholder="Email address"
            required
          />
        </div>

        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-10 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white/30"
            placeholder="Password"
            required
          />
        </div>
      </div>

      {error && (
        <p className="text-red-300 text-sm text-center">{error}</p>
      )}

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className={`w-full py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-200 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Processing...' : (type === 'login' ? 'Sign In' : 'Sign Up')}
      </motion.button>
    </motion.form>
  );
};
