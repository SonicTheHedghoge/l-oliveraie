import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Flame, Leaf } from 'lucide-react';
import './Story.css';

export const Story: React.FC = () => {
  return (
    <section id="story" className="story-section">
      <div className="story-container">
        {/* Visual (Left) */}
        <motion.div 
          className="story-visual"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="story-image-card">
            <img 
              src="/images/tapenade.png" 
              alt="Artisanal olive tapenade platter" 
              className="story-image"
            />
          </div>
          
          <div className="story-experience-badge">
            <span className="badge-number">Chemlali</span>
            <span className="badge-label">Local Cultivar</span>
          </div>
        </motion.div>

        {/* Content (Right) */}
        <motion.div 
          className="story-content"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h2 className="story-heading">Pure Oil, Authentic Mediterranean Craft</h2>
          <p className="story-paragraph">
            Named after the lush olive groves that cover the landscape of Midoun, L\'Oliveraie Restaurant is dedicated to celebrating the culinary gold of Djerba: cold-pressed extra virgin olive oil. We cook with hand-harvested olive oils and fresh herbs, honoring traditional cooking styles.
          </p>

          <div className="story-pillars">
            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Leaf size={18} fill="var(--color-accent)" color="var(--color-accent)" />
              </div>
              <div className="pillar-details">
                <h3 className="pillar-title">Djerba\'s Hand-Picked Oils</h3>
                <p className="pillar-desc">
                  We harvest olives from our family estate in Midoun. Chemlali and Chétoui olives are pressed cold within hours, locking in crisp, fruity flavors.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <Flame size={18} />
              </div>
              <div className="pillar-details">
                <h3 className="pillar-title">Charcoal & Woodfired Cooking</h3>
                <p className="pillar-desc">
                  Our fish and meats are seared over charcoal embers, adding a gentle smoke flavor that matches beautifully with raw olive oils.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon-box">
                <ShieldCheck size={18} />
              </div>
              <div className="pillar-details">
                <h3 className="pillar-title">Uncompromising Quality</h3>
                <p className="pillar-desc">
                  We source our seafood daily from Houmt Souk ports and vegetables from Midoun morning markets. Freshness, guaranteed.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
