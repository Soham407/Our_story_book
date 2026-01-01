import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import Button from './Button';
import { AppRoutes } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Pricing', href: '#pricing' },
  ];

  // Hide nav links on flow pages to reduce distraction
  const isFlowPage = [AppRoutes.DIRECTOR, AppRoutes.EDITOR, AppRoutes.PREVIEW].includes(location.pathname as AppRoutes);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to={AppRoutes.HOME} className="flex items-center gap-2 z-50">
          <div className="bg-emerald-950 p-2 rounded-lg text-amber-500">
            <BookOpen size={24} strokeWidth={2.5} />
          </div>
          <span className={`text-xl font-serif font-bold tracking-tight ${
            isScrolled || isMobileMenuOpen ? 'text-emerald-950' : 'text-emerald-950'
          }`}>
            Our Story Books
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isFlowPage && navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-emerald-950/80 hover:text-emerald-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Link to={AppRoutes.HOME}>
            <Button size="sm" variant={isScrolled ? 'primary' : 'primary'} className={!isScrolled ? "shadow-xl shadow-emerald-900/10" : ""}>
              Create Story
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-emerald-950"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-stone-50 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in">
            {!isFlowPage && navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-serif text-emerald-950"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <Link to={AppRoutes.HOME} onClick={() => setIsMobileMenuOpen(false)}>
                <Button size="lg">Create Story</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;