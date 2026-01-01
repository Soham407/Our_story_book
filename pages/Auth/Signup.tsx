import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../types';
import Button from '../../components/Button';
import { Mail, Lock, User } from 'lucide-react';

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(AppRoutes.DASHBOARD);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 w-full max-w-md border border-stone-100"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif text-emerald-950 mb-2">Join the Magic</h2>
          <p className="text-stone-500">Start your first heirloom collection.</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Your Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="text" 
                placeholder="Jane Doe"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-950 focus:ring-1 focus:ring-emerald-950 outline-none transition-all bg-stone-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="email" 
                placeholder="parent@example.com"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-950 focus:ring-1 focus:ring-emerald-950 outline-none transition-all bg-stone-50 focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-950 focus:ring-1 focus:ring-emerald-950 outline-none transition-all bg-stone-50 focus:bg-white"
              />
            </div>
          </div>

          <Button className="w-full" size="lg">Create Account</Button>
        </form>

        <p className="mt-8 text-center text-stone-500 text-sm">
          Already have an account? <Link to={AppRoutes.LOGIN} className="text-emerald-950 font-bold hover:underline">Log in</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;