import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChefRecommendation } from './components/ChefRecommendation';
import { Menu } from './components/Menu';
import { Story } from './components/Story';
import { Reviews } from './components/Reviews';
import { Reservation } from './components/Reservation';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';
import './App.css';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Theme Management
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('oliveraie_theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('oliveraie_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  // Section Tracking on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      const sections = ['home', 'recommendation', 'menu', 'story', 'reviews', 'reservation'];
      const scrollPosition = window.scrollY + 200; // offset for sticky header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 85; // header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="app-container">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <ChefRecommendation />
        <Menu />
        <Story />
        <Reviews />
        <Reservation />
      </main>

      <Footer scrollToSection={scrollToSection} />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="glass-panel"
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999,
            cursor: 'pointer',
            border: '1px solid var(--color-border)',
            color: 'var(--color-accent)',
            background: 'var(--color-surface)',
            boxShadow: 'var(--shadow-md)',
            transition: 'var(--transition-bounce)'
          }}
          aria-label="Scroll to top"
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.borderColor = 'var(--color-accent)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.borderColor = 'var(--color-border)';
          }}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
};

export default App;
