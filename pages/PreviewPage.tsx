import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';
import Button from '../components/Button';
import { ArrowRight, RefreshCcw } from 'lucide-react';

const PreviewPage: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve image from local storage
    const img = localStorage.getItem('uploadedImage');
    if (img) {
      setOriginalImage(img);
    } else {
      navigate(AppRoutes.HOME);
    }
  }, [navigate]);

  if (!originalImage) return null;

  return (
    <div className="container mx-auto px-6 py-12 min-h-[80vh] flex flex-col items-center">
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-5xl font-serif text-emerald-950 mb-4">
          Meet Your New Hero
        </h1>
        <p className="text-stone-600">
          Our AI has reimagined your little one as the star of the story.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 items-center mb-16">
        {/* Original */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -top-4 left-4 bg-white px-4 py-1 rounded-full shadow-md text-sm font-bold text-stone-500 z-10">
            Original Photo
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl bg-stone-200">
            <img src={originalImage} alt="Original" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Magic Result */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
           <div className="absolute -top-4 right-4 bg-amber-500 px-4 py-1 rounded-full shadow-md text-sm font-bold text-white z-10 flex items-center gap-1">
            <span className="animate-pulse">✨</span> Magic Preview
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 border-4 border-white relative group">
             {/* Simulated AI result */}
             <img src={`https://picsum.photos/600/750?grayscale&blur=2`} alt="Magic Result" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-serif text-2xl italic">"The boy who touched the stars..."</p>
             </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 items-center"
      >
        <Link to={AppRoutes.HOME}>
          <Button variant="outline" icon={<RefreshCcw size={18} />}>
            Try Another Photo
          </Button>
        </Link>
        <Link to={AppRoutes.DIRECTOR}>
          <Button size="lg" variant="secondary" icon={<ArrowRight size={18} />} className="px-12">
            Unlock Full Story
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default PreviewPage;