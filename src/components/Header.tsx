import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Menu as MenuIcon, X, UtensilsCrossed, Sun, Moon } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  theme: string;
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'recommendation', label: 'Chef Recommendations' },
    { id: 'menu', label: 'Menu' },
    { id: 'story', label: 'Our Craft' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const handleNavClick = (id: string) => {
    setIsDrawerOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="header-container">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo-link">
            <span className="logo-leaf">
              <Leaf size={22} fill="var(--color-primary)" />
            </span>
            <span style={{ color: 'var(--color-text-primary)' }}>L'Oliveraie</span>
          </a>

          <nav className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-controls">
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button 
              onClick={() => handleNavClick('reservation')} 
              className="header-cta"
            >
              <UtensilsCrossed size={14} />
              <span>Book Table</span>
            </button>

            <button 
              className="mobile-menu-toggle" 
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Toggle menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Scrim Overlay */}
            <motion.div
              className="mobile-drawer-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo-link">
                  <span className="logo-leaf">
                    <Leaf size={20} fill="var(--color-primary)" />
                  </span>
                  <span>L'Oliveraie</span>
                </a>
                <button className="drawer-close" onClick={() => setIsDrawerOpen(false)} aria-label="Close menu">
                  <X size={26} />
                </button>
              </div>

              <div className="drawer-links">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                    className={`drawer-item ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => handleNavClick('reservation')}
                  className="header-cta drawer-cta"
                >
                  <UtensilsCrossed size={14} />
                  <span>Book Table</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
