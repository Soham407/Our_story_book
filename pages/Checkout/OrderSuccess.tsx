import React from 'react';
import { motion } from 'framer-motion';
import { Check, Package, Printer, Truck, ArrowRight, Library } from 'lucide-react';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../types';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-stone-200/50 w-full max-w-2xl border border-stone-100 relative overflow-hidden"
      >
        {/* Confetti / Decoration Background */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-900 via-amber-500 to-emerald-900" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-20 h-20 bg-emerald-100 text-emerald-900 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check size={40} strokeWidth={3} />
          </motion.div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-3">
            The Magic Has Begun!
          </h1>
          <p className="text-stone-500 max-w-md mx-auto">
            Thank you, Jane. Your heirloom is being crafted with care. Order #ORD-998877.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-12 relative">
           <div className="absolute left-6 top-2 bottom-10 w-0.5 bg-stone-200" />
           
           <div className="space-y-8">
              {/* Step 1: Done */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex gap-6 relative"
              >
                 <div className="w-12 h-12 rounded-full bg-emerald-950 text-white flex items-center justify-center z-10 shadow-lg border-4 border-white">
                    <Check size={20} />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-bold text-emerald-950 text-lg">Order Placed</h4>
                    <p className="text-sm text-stone-500">We've received your story details.</p>
                 </div>
              </motion.div>

              {/* Step 2: In Progress */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 relative"
              >
                 <div className="w-12 h-12 rounded-full bg-amber-500 text-white flex items-center justify-center z-10 shadow-lg border-4 border-white animate-pulse">
                    <Printer size={20} />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-bold text-emerald-950 text-lg">Printing & Binding</h4>
                    <p className="text-sm text-stone-500">Crafting the cover with gold foil.</p>
                 </div>
              </motion.div>

              {/* Step 3: Pending */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="flex gap-6 relative opacity-50"
              >
                 <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center z-10 border-4 border-white">
                    <Truck size={20} />
                 </div>
                 <div className="pt-2">
                    <h4 className="font-bold text-emerald-950 text-lg">On its Way</h4>
                    <p className="text-sm text-stone-500">Estimated arrival: Nov 2nd.</p>
                 </div>
              </motion.div>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center border-t border-stone-100 pt-8">
           <Link to={AppRoutes.DASHBOARD}>
              <Button variant="outline" icon={<Library size={18} />}>
                 View in Library
              </Button>
           </Link>
           <Link to={AppRoutes.HOME}>
              <Button icon={<ArrowRight size={18} />}>
                 Create Another Story
              </Button>
           </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;