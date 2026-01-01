import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Book, Heart, Star, ShieldCheck, Truck } from 'lucide-react';
import MagicUploader from '../components/MagicUploader';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 min-h-[85vh] flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        <div className="flex-1 space-y-8 text-center lg:text-left pt-10 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-6">
              AI-Powered Magic
            </span>
            <h1 className="text-5xl lg:text-7xl font-serif font-medium text-emerald-950 leading-tight mb-6">
              Turn Family Photos into <span className="italic text-amber-600">Fairy Tales</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform fleeting moments into heirloom-quality storybooks. 
              Our magic engine turns your child's photo into the hero of their own adventure in seconds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="bg-white p-6 rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100">
               <div className="text-center mb-4">
                  <p className="font-serif text-lg text-emerald-950 font-medium">See the Magic in 15 Seconds</p>
               </div>
               <MagicUploader />
               <div className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-400">
                  <ShieldCheck size={14} />
                  <span>Private & Secure • 100% Satisfaction Guarantee</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual - Magical Loop */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative z-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-900/20"
          >
            {/* Placeholder for magical video loop */}
            <img 
               src="https://picsum.photos/600/750" 
               alt="Child reading magic book" 
               className="object-cover w-full h-full hover:scale-105 transition-transform duration-[20s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent flex items-end p-8">
               <div className="text-white">
                  <p className="font-serif italic text-2xl mb-2">"The Bravest Space Explorer"</p>
                  <p className="text-sm opacity-90">Created by the Thompson Family</p>
               </div>
            </div>
          </motion.div>
          
          {/* Decorative background blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 bg-amber-200/20 rounded-full blur-3xl animate-pulse" />
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6">
         <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex -space-x-3">
               {[1,2,3,4,5].map((i) => (
                  <img key={i} src={`https://picsum.photos/50/50?random=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
               ))}
            </div>
            <p className="text-stone-600 font-medium">
               Trusted by <span className="text-emerald-950 font-bold">10,000+ families</span> to preserve their memories.
            </p>
         </div>
      </section>

      {/* Value Proposition */}
      <section id="how-it-works" className="bg-white py-24 rounded-[3rem] mx-4 lg:mx-10 shadow-sm border border-stone-100">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-serif text-emerald-950 mb-4">From Photo to Fairytale</h2>
               <p className="text-stone-500">Three simple steps to create a forever treasure.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
               {[
                  {
                     icon: <Wand2 size={32} />,
                     title: "Upload & Transform",
                     desc: "Upload a photo. Our AI weaves your child's likeness into beautiful hand-painted style illustrations instantly."
                  },
                  {
                     icon: <Book size={32} />,
                     title: "Craft the Story",
                     desc: "Choose a theme—Space, Safari, or Castle. Select a life lesson like bravery or kindness."
                  },
                  {
                     icon: <Heart size={32} />,
                     title: "Heirloom Quality",
                     desc: "We print on archival paper with leather binding and gold foil, delivering a book that lasts generations."
                  }
               ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center group">
                     <div className="w-16 h-16 rounded-2xl bg-stone-50 text-emerald-900 flex items-center justify-center mb-6 group-hover:bg-amber-100 group-hover:text-amber-700 transition-colors">
                        {item.icon}
                     </div>
                     <h3 className="text-xl font-serif font-bold text-emerald-950 mb-3">{item.title}</h3>
                     <p className="text-stone-500 leading-relaxed px-4">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Heirloom Showcase */}
      <section id="showcase" className="container mx-auto px-6 text-center">
         <div className="mb-16">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">The Heirloom Edition</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-emerald-950 mt-4 mb-6">Quality You Can Feel</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
               More than just a book. A physical legacy wrapped in premium leather, stamped with gold, and printed on thick, archival paper.
            </p>
         </div>

         <div className="relative max-w-4xl mx-auto aspect-video bg-stone-200 rounded-2xl overflow-hidden shadow-2xl">
            {/* Simulation of a 3D book presentation */}
            <img src="https://picsum.photos/1200/800" alt="Heirloom Book Detail" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
               <div className="bg-white/90 backdrop-blur p-8 rounded-xl max-w-md text-left shadow-lg border border-white/50">
                  <div className="flex items-start gap-4 mb-6">
                     <Star className="text-amber-500 fill-amber-500 flex-shrink-0" />
                     <div>
                        <h4 className="font-serif font-bold text-lg">Gold Foil Stamping</h4>
                        <p className="text-sm text-stone-600">Each title is deeply debossed in real gold foil.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <Truck className="text-emerald-900 flex-shrink-0" />
                     <div>
                        <h4 className="font-serif font-bold text-lg">Global Delivery</h4>
                        <p className="text-sm text-stone-600">Printed locally, delivered lovingly to 30+ countries.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default LandingPage;