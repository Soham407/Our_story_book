import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Edit2, RefreshCw, ShoppingBag, Share2 } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../types';
import BookPage from '../components/BookPage';
import GoldFoil from '../components/GoldFoil';

const FlipbookEditor: React.FC = () => {
  // Configured for spreads: 
  // Base Left: Page 0 Image
  // Leaf 0: Front = Page 0 Text, Back = Page 1 Image
  // Leaf 1: Front = Page 1 Text, Back = Page 2 Image
  // ...
  const [currentSpreadIndex, setCurrentSpreadIndex] = useState(0);

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
    if (currentSpreadIndex < pages.length - 1) {
      setCurrentSpreadIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSpreadIndex > 0) {
      setCurrentSpreadIndex(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Editor Header */}
      <div className="bg-white border-b border-stone-200 p-4 px-8 flex justify-between items-center sticky top-0 z-40 shadow-sm">
        <Link to={AppRoutes.DIRECTOR} className="text-sm font-medium text-stone-500 hover:text-emerald-950 flex items-center gap-1">
           <ArrowLeft size={16} /> Edit Details
        </Link>
        <span className="font-serif font-bold text-emerald-950">Oliver's Space Adventure</span>
        <div className="flex gap-2">
           <Button size="sm" variant="ghost" icon={<Share2 size={16} />}>Share</Button>
           <Button size="sm" variant="secondary" icon={<ShoppingBag size={16} />}>Order Heirloom ($199)</Button>
        </div>
      </div>

      {/* Book Stage */}
      <div className="flex-grow flex items-center justify-center p-4 lg:p-12 overflow-hidden perspective-1500">
         
         {/* The Book Container */}
         <div className="relative w-full max-w-6xl aspect-[3/2] flex items-center justify-center">
            
            {/* 1. Base Left Page (Static underlay for the left side) */}
            {/* Shows Image of current index, but logically it's the 'previous' sheet's back or the cover inside */}
            <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-stone-50 rounded-l-sm shadow-2xl flex items-center justify-center overflow-hidden border-r border-stone-200/50">
               {/* 
                  Logic: If we are at index 0, this is Image 0.
                  If we flip to index 1, Leaf 0 flips and covers this. 
                  So this acts as the "bottom-most" left page if we consider the stack.
                  Actually, simpler logic for visual:
                  Always render "Image 0" here as the base? No.
                  Render the image of the previous page? 
                  
                  Let's use a simpler stack approach driven by BookPage components.
                  We only need a static left page for the very first scene if needed, 
                  but our loop of BookPages handles the left side content via the "Back" prop.
                  
                  So this base is only visible BEFORE any pages are flipped (Spread 0).
                  In Spread 0, the left side is Image 0.
               */}
               <img 
                 src={pages[0].image} 
                 alt="Start" 
                 className="w-full h-full object-cover p-12 opacity-50 blur-sm" 
               />
               <div className="absolute inset-0 bg-white/60" />
               <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                  <h3 className="font-serif text-3xl text-emerald-950 mb-2">Oliver's Journey</h3>
                  <p className="text-stone-500 font-serif italic">Beginning the adventure...</p>
               </div>
            </div>

            {/* 2. Static Right Page Base (Last page underlay) */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-white rounded-r-sm shadow-xl flex items-center justify-center">
               <div className="text-center p-8">
                  <GoldFoil className="text-4xl mb-4 block">The End</GoldFoil>
                  <Button variant="outline" size="sm" onClick={() => setCurrentSpreadIndex(0)}>Read Again</Button>
               </div>
            </div>

            {/* 3. The Pages Stack */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full preserve-3d" style={{ perspective: '2000px' }}>
              {pages.map((page, index) => {
                 // We create a Leaf for each spread transition.
                 // Leaf 0: Front = Text 0, Back = Image 1 (Flip reveals Image 1 on Left)
                 // Leaf 1: Front = Text 1, Back = Image 2
                 // The "Base Left" (Image 0) handles the starting left state.
                 
                 // Z-Index: Lower index pages must be ON TOP when closed (right), 
                 // but visually usually Page 0 is top.
                 // Correct Order: Page 0 is top of stack. Page 1 is under it.
                 const zIndex = pages.length - index;
                 
                 // If this leaf is flipped (index < currentSpreadIndex), it moves to left.
                 // But wait, our 'currentSpreadIndex' tracks how many pages we've turned.
                 // If currentSpreadIndex = 0, no pages flipped. We see Leaf 0 Front (Text 0).
                 // If currentSpreadIndex = 1, Leaf 0 is flipped. We see Leaf 0 Back (Image 1) and Leaf 1 Front (Text 1).
                 
                 // Edge case: The "Left" content for the START (Image 0) needs to be handled.
                 // Let's adjust:
                 // Leaf 0: Front = Text 0. Back = Image 1.
                 // What about Image 0?
                 // It needs to be a separate Leaf that starts flipped? Or just the base layer?
                 // Let's make Leaf -1? No.
                 // Let's use the Base Layer on the left for "Image 0". 
                 // BUT, when Leaf 0 flips, it covers Image 0. 
                 // So Leaf 0 Back (Image 1) covers Image 0. That works.

                 // Next Edge case: The last text page.
                 // Leaf N: Front = Text N. Back = "The End".
                 
                 const isFlipped = index < currentSpreadIndex;
                 const nextImage = index < pages.length - 1 ? pages[index + 1].image : null;

                 return (
                    <BookPage
                       key={index}
                       zIndex={zIndex}
                       isFlipped={isFlipped}
                       onFlip={() => {
                          if (isFlipped) handlePrev();
                          else handleNext();
                       }}
                       front={
                          <div className="w-full h-full relative group p-12 lg:p-16 flex flex-col justify-between">
                             <div className="text-center mt-8">
                                <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-emerald-950">
                                   {page.text}
                                </p>
                             </div>
                             <div className="flex justify-between items-end text-stone-300 font-serif text-sm">
                                <span>{index + 1}</span>
                                <button 
                                  className="p-2 hover:bg-stone-100 rounded-full text-stone-400 hover:text-amber-600 transition-colors"
                                  onClick={(e) => { e.stopPropagation(); }}
                                >
                                   <Edit2 size={16} />
                                </button>
                             </div>
                          </div>
                       }
                       back={
                          <div className="w-full h-full relative group">
                             {nextImage ? (
                                <img 
                                   src={nextImage} 
                                   alt={`Scene ${index + 2}`} 
                                   className="w-full h-full object-cover p-8 lg:p-10"
                                />
                             ) : (
                                <div className="w-full h-full flex items-center justify-center bg-emerald-950 text-white p-8 text-center">
                                   <GoldFoil className="text-3xl">Fin</GoldFoil>
                                </div>
                             )}
                             
                             <div className="absolute top-4 right-4">
                                <button 
                                  className="p-2 bg-white/80 backdrop-blur rounded-full shadow-md text-stone-500 hover:text-amber-600 transition-colors"
                                  onClick={(e) => { e.stopPropagation(); }}
                                >
                                   <RefreshCw size={16} />
                                </button>
                             </div>
                          </div>
                       }
                    />
                 );
              })}
              
              {/* Special First Page "Cover" handling to show Image 0? 
                  Actually, the loop above handles Text 0 -> Image 1.
                  We need something that represents the "Back" of the previous page which holds "Image 0".
                  We can add a 'Leaf -1' that is always flipped? 
                  Or just put Image 0 on the base layer (done above).
              */}
            </div>
         </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-white border-t border-stone-200 p-6 flex justify-center gap-8 z-50 relative">
         <Button 
            onClick={handlePrev} 
            disabled={currentSpreadIndex === 0}
            variant="outline"
            className="rounded-full w-12 h-12 !p-0 flex items-center justify-center"
         >
            <ArrowLeft size={20} />
         </Button>
         
         <div className="flex items-center gap-2">
            <span className="font-serif text-stone-400 text-sm">Spread</span>
            <span className="font-serif font-bold text-emerald-950 text-xl w-6 text-center">{currentSpreadIndex + 1}</span>
            <span className="font-serif text-stone-400 text-sm">of {pages.length}</span>
         </div>

         <Button 
            onClick={handleNext} 
            disabled={currentSpreadIndex === pages.length}
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