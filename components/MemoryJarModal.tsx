import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, Calendar, Save } from 'lucide-react';
import Button from './Button';

interface MemoryJarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MemoryJarModal: React.FC<MemoryJarModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-950/40 backdrop-blur-sm z-[60]"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none"
          >
            <div className="bg-[#fcfbf7] w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden pointer-events-auto border border-stone-200 relative">
                {/* Paper Texture Effect overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] pointer-events-none"></div>

              {/* Header */}
              <div className="bg-emerald-950 p-6 flex justify-between items-center text-white relative z-10">
                <div>
                  <h3 className="font-serif text-xl font-bold">Memory Jar</h3>
                  <p className="text-emerald-200 text-xs uppercase tracking-wider">Capture a moment</p>
                </div>
                <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 space-y-6 relative z-10">
                
                {/* Date & Photo Row */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">When?</label>
                    <div className="flex items-center gap-2 border-b-2 border-stone-200 py-2 text-emerald-950">
                        <Calendar size={18} className="text-amber-600" />
                        <span className="font-medium">Today, Oct 24</span>
                    </div>
                  </div>
                  <div className="flex-1">
                     <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Photo</label>
                     <button className="flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors py-2">
                        <Camera size={18} />
                        <span className="text-sm">Upload</span>
                     </button>
                  </div>
                </div>

                {/* Text Area */}
                <div>
                    <label className="block text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">The Story</label>
                    <textarea 
                        className="w-full h-32 bg-transparent resize-none border-none p-0 text-emerald-950 font-serif text-lg leading-relaxed focus:ring-0 placeholder:text-stone-300 placeholder:italic"
                        placeholder="What made you smile today?..."
                        style={{ backgroundImage: 'linear-gradient(transparent, transparent 31px, #e7e5e4 31px)', backgroundSize: '100% 32px', lineHeight: '32px' }}
                    ></textarea>
                </div>

                {/* Footer Action */}
                <div className="pt-4 flex justify-end">
                    <Button onClick={onClose} icon={<Save size={18} />}>
                        Save to Jar
                    </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MemoryJarModal;