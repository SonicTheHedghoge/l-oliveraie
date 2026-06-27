import React from 'react';
import { Leaf, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing to L\'Oliveraie Restaurant newsletter!');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Leaf size={20} fill="var(--color-primary)" color="var(--color-primary)" />
            <span>L'Oliveraie</span>
          </div>
          <p className="footer-desc">
            Savor the authentic Mediterranean fine dining experience in Midoun, Djerba. Fresh locally-caught seafood and traditional specialties drizzled with estate-grown olive oils.
          </p>
          <div className="footer-socials">
            <a 
              href="https://www.facebook.com/profile.php?id=61589271742034" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn"
              aria-label="Facebook Profile"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="footer-links-col">
          <h4 className="footer-heading">Shortcuts</h4>
          <div className="footer-links">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="footer-link">Home</a>
            <a href="#recommendation" onClick={(e) => { e.preventDefault(); scrollToSection('recommendation'); }} className="footer-link">Chef Recommendation</a>
            <a href="#menu" onClick={(e) => { e.preventDefault(); scrollToSection('menu'); }} className="footer-link">Menu</a>
            <a href="#story" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }} className="footer-link">Our Craft</a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews'); }} className="footer-link">Reviews</a>
            <a href="#reservation" onClick={(e) => { e.preventDefault(); scrollToSection('reservation'); }} className="footer-link">Book a Table</a>
          </div>
        </div>

        {/* Contact info & News */}
        <div className="footer-info">
          <h4 className="footer-heading">Contact & Hours</h4>
          <div className="info-row">
            <Clock size={16} className="info-icon" />
            <span>Open Daily: 12:00 PM – 12:00 AM (Midnight)</span>
          </div>
          <div className="info-row">
            <MapPin size={16} className="info-icon" />
            <span>Midoun, Djerba, Tunisia</span>
          </div>
          <div className="info-row">
            <Phone size={16} className="info-icon" />
            <a href="tel:+21650850183" className="footer-link">+216 50 850 183</a>
          </div>
          <div className="info-row">
            <Mail size={16} className="info-icon" />
            <a href="mailto:oliveraie27@gmail.com" className="footer-link">oliveraie27@gmail.com</a>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              required 
              placeholder="Enter your email" 
              className="newsletter-input"
            />
            <button type="submit" className="btn-subscribe">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {currentYear} L'Oliveraie Restaurant Midoun. All rights reserved.</span>
        <span>Designed with passion for Mediterranean Gastronomy.</span>
      </div>
    </footer>
  );
};
