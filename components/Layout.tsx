import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { AppRoutes } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // Hide footer on editor/director pages for immersive feel
  const hideFooter = [AppRoutes.EDITOR, AppRoutes.DIRECTOR].includes(location.pathname as AppRoutes);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <main className="flex-grow pt-24">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;