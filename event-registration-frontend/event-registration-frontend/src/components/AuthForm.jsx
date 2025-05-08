import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
      let response;
      let data;

      if (type === 'signup') {
        response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password, userType }),
        });

        if (!response.ok) {
          throw new Error(`Failed to create account. Status: ${response.status}`);
        }

        data = await response.json();

        if (data.message) {
          throw new Error(data.message);
        }

        toast.success('Account created successfully!');
      } else {
        // ✅ Fixed: Send userType during login
        response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, userType }),
        });

        if (!response.ok) {
          throw new Error(`Login failed. Status: ${response.status}`);
        }

        data = await response.json();

        if (data.message) {
          throw new Error(data.message);
        }

        toast.success('Logged in successfully!');
      }

      if (data.token) {
        localStorage.setItem('authToken', data.token);
        localStorage.setItem(
          'user',
          JSON.stringify({
            email,
            userType,
            name: name || data.name,
          })
        );

        if (userType === 'host') {
          navigate('/host-dashboard');
        } else {
          navigate('/user-home');
        }
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
        className={`w-full py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-lg transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Processing...' : (type === 'login' ? 'Sign In' : 'Sign Up')}
      </motion.button>
    </motion.form>
  );
};
