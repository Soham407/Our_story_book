import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../types';

interface MagicUploaderProps {
  onUploadStart?: () => void;
}

const MagicUploader: React.FC<MagicUploaderProps> = ({ onUploadStart }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setIsUploading(true);
      if (onUploadStart) onUploadStart();
      
      // Simulate magical processing time
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          // Store in local storage for demo purposes
          localStorage.setItem('uploadedImage', e.target?.result as string);
          setIsUploading(false);
          navigate(AppRoutes.PREVIEW);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        layout
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative cursor-pointer group rounded-3xl border-2 border-dashed p-8 transition-all duration-500 ease-out
          ${isDragging 
            ? 'border-amber-500 bg-amber-50/50 scale-105' 
            : 'border-stone-300 hover:border-amber-400 hover:bg-white bg-white/60'
          }
          ${isUploading ? 'pointer-events-none border-none bg-emerald-950' : ''}
        `}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileSelect}
        />

        <AnimatePresence mode="wait">
          {!isUploading ? (
            <motion.div
              key="upload-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className={`
                p-4 rounded-full transition-colors duration-300
                ${isDragging ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-500 group-hover:bg-amber-50 group-hover:text-amber-600'}
              `}>
                <Upload size={32} />
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-emerald-950 mb-1">
                  Upload a photo
                </h3>
                <p className="text-sm text-stone-500">
                  Drag & drop or click to see the magic
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="processing-state"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-6 py-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-t-2 border-amber-400"
                />
                <div className="p-4 rounded-full bg-emerald-900 text-amber-400">
                  <Sparkles size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Weaving Magic...
                </h3>
                <p className="text-emerald-200 text-sm">
                  Transforming your photo into a storybook illustration
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        {!isUploading && (
            <>
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-200/20 rounded-full blur-xl" />
                <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-emerald-200/20 rounded-full blur-xl" />
                </div>
            </>
        )}
      </motion.div>
    </div>
  );
};

export default MagicUploader;