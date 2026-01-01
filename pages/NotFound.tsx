import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookX, Home } from 'lucide-react';
import Button from '../components/Button';
import { AppRoutes } from '../types';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div 
          initial={{ rotate: -10, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-8 text-stone-400"
        >
          <BookX size={48} />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-serif text-emerald-950 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-stone-500 max-w-md mx-auto mb-8 leading-relaxed">
          It seems this page hasn't been written yet. You might be lost in the enchanted forest.
        </p>

        <Link to={AppRoutes.HOME}>
          <Button size="lg" icon={<Home size={18} />}>
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;