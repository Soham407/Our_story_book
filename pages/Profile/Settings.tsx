import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CreditCard, MapPin, Crown, Save } from 'lucide-react';
import Button from '../../components/Button';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'General', icon: <User size={18} /> },
    { id: 'subscription', label: 'Membership', icon: <Crown size={18} /> },
    { id: 'addresses', label: 'Addresses', icon: <MapPin size={18} /> },
  ];

  return (
    <div className="container mx-auto px-6 py-12 min-h-[80vh]">
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-serif text-emerald-950 mb-2">Account Settings</h1>
        <p className="text-stone-500">Manage your profile and preferences.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="lg:w-64 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-6 py-4 rounded-xl flex items-center gap-3 transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-950 text-white shadow-lg'
                  : 'text-stone-500 hover:bg-stone-100'
              }`}
            >
              {tab.icon}
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-3xl shadow-lg shadow-stone-200/50 border border-stone-100"
          >
            {activeTab === 'general' && (
              <div className="space-y-8">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-24 h-24 rounded-full bg-stone-200 border-4 border-white shadow-md overflow-hidden">
                    <img src="https://picsum.photos/200/200?random=user" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <Button variant="outline" size="sm">Change Avatar</Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase">Full Name</label>
                    <input type="text" defaultValue="Jane Doe" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-stone-500 uppercase">Email Address</label>
                    <input type="email" defaultValue="jane.doe@example.com" className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg focus:ring-1 focus:ring-emerald-950 outline-none" />
                  </div>
                </div>
                
                <div className="pt-4 border-t border-stone-100 flex justify-end">
                   <Button icon={<Save size={18} />}>Save Changes</Button>
                </div>
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                   <div className="relative z-10 flex justify-between items-start">
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                            <Crown size={20} className="text-amber-100" />
                            <span className="font-bold tracking-widest uppercase text-xs text-amber-100">Current Plan</span>
                         </div>
                         <h3 className="font-serif text-3xl font-bold mb-4">Heirloom Club</h3>
                         <p className="text-amber-50 opacity-90 text-sm max-w-sm">You have access to exclusive themes, free shipping on all orders, and priority support.</p>
                      </div>
                      <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold">
                         Active
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="font-bold text-emerald-950">Payment Method</h4>
                   <div className="flex items-center justify-between p-4 border border-stone-200 rounded-xl">
                      <div className="flex items-center gap-4">
                         <div className="w-12 h-8 bg-emerald-950 rounded flex items-center justify-center text-white/50">
                            <CreditCard size={16} />
                         </div>
                         <div>
                            <p className="font-bold text-emerald-950 text-sm">Visa ending in 4242</p>
                            <p className="text-xs text-stone-500">Expires 12/25</p>
                         </div>
                      </div>
                      <button className="text-sm text-stone-400 hover:text-emerald-950">Edit</button>
                   </div>
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
               <div className="space-y-6">
                  <div className="p-6 border border-amber-500/30 bg-amber-50/50 rounded-xl relative group">
                     <div className="absolute top-4 right-4 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded">Default</div>
                     <h4 className="font-bold text-emerald-950 mb-1">Home</h4>
                     <p className="text-stone-600 text-sm leading-relaxed">
                        123 Storybook Lane<br />
                        New York, NY 10001<br />
                        United States
                     </p>
                     <div className="mt-4 flex gap-4 text-sm font-medium">
                        <button className="text-emerald-950 hover:underline">Edit</button>
                        <button className="text-red-500 hover:underline">Delete</button>
                     </div>
                  </div>
                  <Button variant="outline" className="w-full border-dashed border-stone-300 text-stone-400 hover:border-emerald-950 hover:text-emerald-950">
                     + Add New Address
                  </Button>
               </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Settings;