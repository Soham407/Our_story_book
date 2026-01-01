import React from 'react';
import { Heart, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-950 text-stone-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl text-white mb-6">Our Story Books</h3>
            <p className="text-stone-400 max-w-sm leading-relaxed mb-8">
              Transforming fleeting digital moments into permanent physical heirlooms. 
              Because your family's story deserves to be held, not just scrolled.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-emerald-900 rounded-full hover:bg-emerald-800 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Create a Book</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Photographers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-stone-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-emerald-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500">
          <p>© 2024 Our Story Books. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart size={14} className="text-amber-600 fill-amber-600" /> for families everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;