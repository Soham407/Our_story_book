import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Clock, Package, Edit2, StickyNote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes, Book } from '../../types';
import Button from '../../components/Button';
import { fetchUserBooks } from '../../services/supabase';
import MemoryJarModal from '../../components/MemoryJarModal';

const Bookshelf: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [isMemoryJarOpen, setIsMemoryJarOpen] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchUserBooks('current-user');
      setBooks(data);
      setLoading(false);
    };
    loadBooks();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 block">The Collection</span>
          <h1 className="text-4xl md:text-5xl font-serif text-emerald-950">The Thompson Library</h1>
        </div>
        <div className="flex gap-4">
             <Button 
                variant="outline" 
                onClick={() => setIsMemoryJarOpen(true)}
                icon={<StickyNote size={18} />}
             >
                Add Memory
             </Button>
            <Link to={AppRoutes.HOME}>
                <Button icon={<Plus size={18} />}>New Story</Button>
            </Link>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-950"></div>
        </div>
      ) : books.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] mb-6 perspective-1000">
                <div className="w-full h-full relative rounded-r-lg shadow-2xl transition-transform duration-500 group-hover:rotate-y-[-10deg] group-hover:-translate-y-2 origin-left">
                  {/* Book Spine Simulation */}
                  <div className="absolute left-0 top-0 bottom-0 w-3 bg-stone-800 z-10 rounded-l-sm" />
                  <img 
                    src={book.coverImage} 
                    alt={book.title} 
                    className="w-full h-full object-cover rounded-r-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none rounded-r-lg" />
                  
                  {/* Status Tag */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-emerald-950 shadow-sm flex items-center gap-1">
                    {book.status === 'draft' ? <Edit2 size={12} /> : <Package size={12} />}
                    {book.status.charAt(0).toUpperCase() + book.status.slice(1)}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-1 group-hover:text-amber-600 transition-colors">
                  {book.title}
                </h3>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <Clock size={14} />
                  <span>Edited {new Date(book.lastEdited).toLocaleDateString()}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-stone-200">
          <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-400">
            <Plus size={32} />
          </div>
          <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">Start Your First Tradition</h3>
          <p className="text-stone-500 mb-6 max-w-sm mx-auto">Your library is waiting for its first adventure. Create a book today.</p>
          <Link to={AppRoutes.HOME}>
            <Button>Create Story</Button>
          </Link>
        </div>
      )}

      <MemoryJarModal 
        isOpen={isMemoryJarOpen} 
        onClose={() => setIsMemoryJarOpen(false)} 
      />
    </div>
  );
};

export default Bookshelf;