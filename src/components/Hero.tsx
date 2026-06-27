import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Leaf } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">
            <span className="badge-dot" />
            <Sparkles size={12} style={{ marginRight: '6px' }} />
            <span>Mediterranean Olive Grove Dining</span>
          </div>
          
          <h1 className="hero-title">
            Gastronomy Under <br />
            <span className="text-gold">The Olive Trees</span>
          </h1>
          
          <p className="hero-description">
            Step into L\'Oliveraie Restaurant, a peaceful oasis in Midoun, Djerba. Savor freshly-sourced Mediterranean seafood, woodfired delicacies, and authentic Tunisian recipes cooked with premium olive oils in an elegant garden environment.
          </p>
          
          <div className="hero-actions">
            <button 
              onClick={() => scrollToSection('menu')} 
              className="btn-primary"
            >
              <span>View Menu</span>
              <ArrowRight size={16} />
            </button>
            <button 
              onClick={() => scrollToSection('recommendation')} 
              className="btn-secondary"
            >
              <Leaf size={16} />
              <span>Sommelier Recommendations</span>
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="garden-card-wrapper">
            <img 
              src="/images/garden.png" 
              alt="L'Oliveraie Olive Garden Dining Area" 
              className="garden-card-image"
            />
            <div className="garden-card-overlay">
              <span className="garden-card-tag">Our Setting</span>
              <h2 className="garden-card-title">The Olive Garden</h2>
              <p className="garden-card-desc">
                Dine outside under traditional limestone arches and centuries-old olive trees casting romantic evening shadows.
              </p>
            </div>
          </div>
          
          {/* Circular Stamp */}
          <div className="badge-seal">
            <svg viewBox="0 0 100 100" width="96" height="96">
              <path 
                id="circlePath" 
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
                fill="none"
              />
              <text fill="var(--color-text-muted)" fontSize="9" fontWeight="700" letterSpacing="1.8">
                <textPath href="#circlePath">
                  • L'OLIVERAIE RESTAURANT • DJERBA
                </textPath>
              </text>
            </svg>
            <div style={{ position: 'absolute', color: 'var(--color-accent)' }}>
              <Leaf size={18} fill="var(--color-accent)" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
