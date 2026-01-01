import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Edit2, RefreshCw, ShoppingBag, Share2 } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../types';

const FlipbookEditor: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      text: "Once upon a time, in a land far, far away, lived a brave little explorer named Oliver.",
      image: "https://picsum.photos/600/600?random=10"
    },
    {
      text: "Oliver loved to look at the stars. 'One day,' he whispered, 'I will touch the moon.'",
      image: "https://picsum.photos/600/600?random=20"
    },
    {
      text: "With his shiny silver rocket ship, he zoomed past the fluffy white clouds.",
      image: "https://picsum.photos/600/600?random=30"
    },
    {
        text: "He met a friendly alien who taught him that kindness is the universal language.",
        image: "https://picsum.photos/600/600?random=40"
      },
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Editor Header */}
      <div className="bg-white border-b border-stone-200 p-4 px-8 flex justify-between items-center sticky top-0 z-40">
        <Link to={AppRoutes.DIRECTOR} className="text-sm font-medium text-stone-500 hover:text-emerald-950 flex items-center gap-1">
           <ArrowLeft size={16} /> Edit Details
        </Link>
        <span className="font-serif font-bold text-emerald-950">Oliver's Space Adventure</span>
        <div className="flex gap-2">
           <Button size="sm" variant="ghost" icon={<Share2 size={16} />}>Share Preview</Button>
           <Button size="sm" variant="secondary" icon={<ShoppingBag size={16} />}>Order Heirloom ($199)</Button>
        </div>
      </div>

      {/* Book View */}
      <div className="flex-grow flex items-center justify-center p-4 lg:p-12 overflow-hidden">
         <div className="relative w-full max-w-6xl aspect-[3/2] bg-white shadow-2xl rounded-sm flex overflow-hidden">
            {/* Spine Effect */}
            <div className="absolute left-1/2 top-0 bottom-0 w-8 -ml-4 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-200 z-10 shadow-inner opacity-50 pointer-events-none" />

            {/* Left Page (Image) */}
            <div className="flex-1 bg-stone-50 relative group border-r border-stone-200">
               <img 
                  src={pages[currentPage].image} 
                  alt="Story scene" 
                  className="w-full h-full object-cover p-8 lg:p-12"
               />
               
               {/* Hover Controls */}
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-lg text-stone-600 hover:text-amber-600 hover:scale-110 transition-all">
                     <RefreshCw size={20} />
                  </button>
               </div>
            </div>

            {/* Right Page (Text) */}
            <div className="flex-1 bg-white relative group flex items-center justify-center p-12 lg:p-24">
               <div className="max-w-md text-center">
                  <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-emerald-950">
                     {pages[currentPage].text}
                  </p>
               </div>
               
               {/* Hover Controls */}
               <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-lg text-stone-600 hover:text-amber-600 hover:scale-110 transition-all">
                     <Edit2 size={20} />
                  </button>
               </div>

               <div className="absolute bottom-8 text-stone-300 text-sm font-serif">
                  Page {currentPage + 1}
               </div>
            </div>
         </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-stone-200 p-6 flex justify-center gap-8">
         <Button 
            onClick={handlePrev} 
            disabled={currentPage === 0}
            variant="outline"
            className="rounded-full w-12 h-12 !p-0 flex items-center justify-center"
         >
            <ArrowLeft size={20} />
         </Button>
         
         <div className="flex items-center gap-2">
            {pages.map((_, idx) => (
               <div 
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all ${
                     idx === currentPage ? 'bg-emerald-950 w-4' : 'bg-stone-300'
                  }`}
               />
            ))}
         </div>

         <Button 
            onClick={handleNext} 
            disabled={currentPage === pages.length - 1}
            variant="outline"
             className="rounded-full w-12 h-12 !p-0 flex items-center justify-center"
         >
            <ArrowRight size={20} />
         </Button>
      </div>
    </div>
  );
};

export default FlipbookEditor;