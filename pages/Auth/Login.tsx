import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../types';
import Button from '../../components/Button';
import { Mail, Lock } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
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
          <h2 className="text-3xl font-serif text-emerald-950 mb-2">Welcome Back</h2>
          <p className="text-stone-500">Continue your family's story.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
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
            <div className="flex justify-between">
              <label className="text-sm font-bold text-stone-600 uppercase tracking-wider">Password</label>
              <a href="#" className="text-xs text-amber-600 hover:underline">Forgot?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:border-emerald-950 focus:ring-1 focus:ring-emerald-950 outline-none transition-all bg-stone-50 focus:bg-white"
              />
            </div>
          </div>

          <Button className="w-full" size="lg">Sign In</Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-stone-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-white text-stone-400">or continue with</span>
          </div>
        </div>

        <button className="w-full py-3 border border-stone-200 rounded-full flex items-center justify-center gap-3 hover:bg-stone-50 transition-colors text-stone-600 font-medium">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.2 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>

        <p className="mt-8 text-center text-stone-500 text-sm">
          Don't have an account? <Link to={AppRoutes.SIGNUP} className="text-emerald-950 font-bold hover:underline">Create Story</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;