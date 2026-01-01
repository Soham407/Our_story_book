import React from 'react';
import { motion, Variants } from 'framer-motion';

interface BookPageProps {
  front: React.ReactNode;
  back: React.ReactNode;
  isFlipped: boolean;
  zIndex: number;
  onFlip?: () => void;
}

const pageVariants: Variants = {
  initial: { 
    rotateY: 0,
    transition: { 
      duration: 1.2, 
      ease: [0.645, 0.045, 0.355, 1.000] // Cubic-bezier for realistic heavy paper
    }
  },
  turnPage: { 
    rotateY: -180, 
    transition: { 
      duration: 1.2, 
      ease: [0.645, 0.045, 0.355, 1.000] 
    }
  }
};

const BookPage: React.FC<BookPageProps> = ({ 
  front, 
  back, 
  isFlipped, 
  zIndex,
  onFlip 
}) => {
  return (
    <motion.div
      className="absolute top-0 left-0 w-full h-full cursor-pointer preserve-3d origin-left"
      style={{ 
        zIndex: zIndex,
        transformOrigin: 'left center',
      }}
      variants={pageVariants}
      initial="initial"
      animate={isFlipped ? "turnPage" : "initial"}
      onClick={onFlip}
    >
      {/* Front Face (Right Side Page) */}
      <div 
        className="absolute inset-0 w-full h-full bg-white backface-hidden shadow-md overflow-hidden rounded-r-sm"
        style={{ backfaceVisibility: 'hidden' }}
      >
        {front}
        {/* Spine gradient for depth */}
        <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-stone-400/20 to-transparent pointer-events-none" />
      </div>

      {/* Back Face (Left Side Page after flip) */}
      <div 
        className="absolute inset-0 w-full h-full bg-white backface-hidden shadow-md overflow-hidden rounded-l-sm"
        style={{ 
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden'
        }}
      >
        {back}
        {/* Spine gradient for depth */}
        <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-stone-400/20 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default BookPage;