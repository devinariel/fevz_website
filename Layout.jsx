import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Instagram, Twitter, Mail, Menu, X } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const NavItem = ({ to, children, onClick, className }) => {
  const baseClasses = "transition-colors duration-200 heading-secondary font-medium nav-item";
  const activeClass = "active";

  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `${baseClasses} ${className} ${isActive ? activeClass : ''}`
        }
      >
        {children}
      </NavLink>
    );
  }
  return (
    <button onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
};

function Layout() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGenericClick = (item) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleSocialClick = (platform) => {
     if (platform === 'instagram') {
      window.open('https://www.instagram.com/fevzzz/?hl=en', '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: `🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀`
      });
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navContent = (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="flex flex-col space-y-6 lg:space-y-8 text-lg lg:text-xl"
    >
      <NavItem to="/" onClick={closeMenu} className="text-left">ABOUT</NavItem>
      
      <div className="relative">
        <button 
          onClick={() => toggleDropdown('shop')}
          className={`flex items-center space-x-2 transition-colors duration-200 heading-secondary font-medium nav-item ${activeDropdown === 'shop' ? 'active' : ''}`}
        >
          <span>SHOP</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'shop' ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <NavItem to="/paintings" onClick={closeMenu} className="text-left">PAINTINGS</NavItem>
      
      <NavItem onClick={() => handleGenericClick('MURALS')} className="text-left">MURALS</NavItem>

      <NavItem to="/projects" onClick={closeMenu} className="text-left">PROJECTS</NavItem>

      <NavItem to="/publications" onClick={closeMenu} className="text-left">PUBLICATIONS</NavItem>

      <NavItem onClick={() => handleGenericClick('CONTACT')} className="text-left">CONTACT</NavItem>
    </motion.nav>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-1/4 lg:min-w-[300px] lg:max-w-[350px] p-8 lg:p-12 lg:h-screen lg:sticky top-0 z-20">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <NavLink to="/" className="text-2xl lg:text-3xl font-bold artist-name tracking-wide">
                FEVEN ZEWDI
              </NavLink>
            </motion.div>
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="p-2 -mr-2">
                <Menu className="w-8 h-8" style={{ color: '#D6A046' }} />
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            {navContent}
          </div>

          {/* Social & Copyright - Pushed to bottom */}
          <div className="hidden lg:flex flex-col mt-auto pt-8">
            <div className="flex items-center space-x-4">
              <button onClick={() => handleSocialClick('instagram')} className="social-link transition-opacity duration-200 nav-item"><Instagram className="w-5 h-5" /></button>
              <button onClick={() => handleSocialClick('twitter')} className="social-link transition-opacity duration-200 nav-item"><Twitter className="w-5 h-5" /></button>
              <button onClick={() => handleSocialClick('email')} className="social-link transition-opacity duration-200 nav-item"><Mail className="w-5 h-5" /></button>
              <span className="text-sm text-gray-400 ml-2">Share</span>
            </div>
            <div className="pt-8 text-xs text-gray-400">
              <p>Copyright © All rights</p>
              <p>reserved.</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-white p-8 z-50 lg:hidden"
          >
            <div className="flex justify-end mb-8">
              <button onClick={toggleMenu} className="p-2 -mr-2">
                <X className="w-8 h-8" style={{ color: '#D6A046' }} />
              </button>
            </div>
            <div className="flex flex-col h-full">
              {navContent}
              <div className="mt-auto pt-8">
                <div className="flex items-center space-x-4">
                  <button onClick={() => handleSocialClick('instagram')} className="social-link transition-opacity duration-200 nav-item"><Instagram className="w-5 h-5" /></button>
                  <button onClick={() => handleSocialClick('twitter')} className="social-link transition-opacity duration-200 nav-item"><Twitter className="w-5 h-5" /></button>
                  <button onClick={() => handleSocialClick('email')} className="social-link transition-opacity duration-200 nav-item"><Mail className="w-5 h-5" /></button>
                  <span className="text-sm text-gray-400 ml-2">Share</span>
                </div>
                <div className="pt-8 text-xs text-gray-400">
                  <p>Copyright © All rights</p>
                  <p>reserved.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-8 lg:p-12">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;