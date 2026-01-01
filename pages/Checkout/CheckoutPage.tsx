import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Truck, Lock } from 'lucide-react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column: Forms */}
        <div className="flex-1 space-y-12">
            <div className="flex items-center gap-4 text-sm font-bold text-stone-400 uppercase tracking-widest mb-8">
                <span className={step >= 1 ? "text-emerald-950" : ""}>1. Shipping</span>
                <span className="w-8 h-[1px] bg-stone-300"></span>
                <span className={step >= 2 ? "text-emerald-950" : ""}>2. Payment</span>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
            >
                <h2 className="text-2xl font-serif text-emerald-950">Where should we send the magic?</h2>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1 col-span-1">
                        <label className="text-xs font-bold text-stone-500 uppercase">First Name</label>
                        <input type="text" className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" placeholder="Jane" />
                    </div>
                    <div className="space-y-1 col-span-1">
                        <label className="text-xs font-bold text-stone-500 uppercase">Last Name</label>
                        <input type="text" className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" placeholder="Doe" />
                    </div>
                    <div className="space-y-1 col-span-2">
                        <label className="text-xs font-bold text-stone-500 uppercase">Street Address</label>
                        <input type="text" className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" placeholder="123 Storybook Lane" />
                    </div>
                    <div className="space-y-1 col-span-1">
                        <label className="text-xs font-bold text-stone-500 uppercase">City</label>
                        <input type="text" className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" placeholder="New York" />
                    </div>
                    <div className="space-y-1 col-span-1">
                        <label className="text-xs font-bold text-stone-500 uppercase">Postal Code</label>
                        <input type="text" className="w-full p-3 bg-white border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" placeholder="10001" />
                    </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-xl flex items-start gap-3">
                    <Truck className="text-emerald-900 mt-1" size={20} />
                    <div>
                        <h4 className="text-sm font-bold text-emerald-950">Free Global Shipping</h4>
                        <p className="text-xs text-emerald-800/70">Estimated delivery: 5-7 business days via DHL Express.</p>
                    </div>
                </div>
            </motion.div>
            
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="pt-8 border-t border-stone-200 space-y-6"
            >
                <h2 className="text-2xl font-serif text-emerald-950">Payment Method</h2>
                 {/* Mock Credit Card Element */}
                 <div className="p-4 border border-emerald-950/20 bg-white rounded-xl space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 rounded-full border-[5px] border-emerald-950"></div>
                        <span className="font-bold text-emerald-950">Credit Card</span>
                        <div className="flex gap-2 ml-auto grayscale opacity-50">
                            <div className="w-8 h-5 bg-stone-200 rounded"></div>
                            <div className="w-8 h-5 bg-stone-200 rounded"></div>
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-stone-500 uppercase">Card Number</label>
                        <div className="relative">
                            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
                            <input type="text" className="w-full pl-10 p-3 bg-stone-50 border border-stone-200 rounded-lg outline-none" placeholder="0000 0000 0000 0000" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                             <label className="text-xs font-bold text-stone-500 uppercase">Expiry</label>
                             <input type="text" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg outline-none" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs font-bold text-stone-500 uppercase">CVC</label>
                             <input type="text" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg outline-none" placeholder="123" />
                        </div>
                    </div>
                 </div>

                 <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
                    <Lock size={12} />
                    <span>Payments are secure and encrypted.</span>
                 </div>
            </motion.div>
        </div>

        {/* Right Column: Summary (Sticky) */}
        <div className="lg:w-96">
            <div className="sticky top-28 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-xl shadow-stone-200 border border-stone-100">
                    <h3 className="font-serif text-xl font-bold text-emerald-950 mb-6">Order Summary</h3>
                    
                    <div className="flex gap-4 mb-6 pb-6 border-b border-stone-100">
                        <img src="https://picsum.photos/100/100" alt="Book Thumbnail" className="w-20 h-20 object-cover rounded-lg shadow-md" />
                        <div>
                            <h4 className="font-bold text-emerald-950">Oliver's Space Adventure</h4>
                            <p className="text-sm text-stone-500 mb-1">Hardcover Heirloom</p>
                            <p className="text-sm text-amber-600 font-bold">$49.00</p>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm text-stone-600 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$49.00</span>
                        </div>
                        <div className="flex justify-between text-emerald-700">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="flex justify-between pt-3 border-t border-stone-100 font-serif font-bold text-lg text-emerald-950">
                            <span>Total</span>
                            <span>$49.00</span>
                        </div>
                    </div>

                    <Button size="lg" className="w-full" onClick={() => navigate('/dashboard')}>
                        Place Order
                    </Button>
                </div>
                
                <div className="flex items-center justify-center gap-2 text-stone-400">
                    <ShieldCheck size={16} />
                    <span className="text-xs font-medium">100% Satisfaction Guarantee</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;