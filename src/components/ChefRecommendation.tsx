import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Fish, Salad, Coffee, HelpCircle, Utensils } from 'lucide-react';
import './ChefRecommendation.css';

interface Course {
  courseName: string; // "Appetizer" | "Main" | "Dessert"
  title: string;
  description: string;
  image: string;
  pairingNote: string;
}

interface MenuProfile {
  id: string;
  displayName: string;
  subtitle: string;
  icon: React.ReactNode;
  courses: Course[];
  totalPrice: number;
}

export const ChefRecommendation: React.FC = () => {
  const [activeProfileId, setActiveProfileId] = useState<string>('light');

  const menuProfiles: MenuProfile[] = [
    {
      id: 'light',
      displayName: 'Olive & Sea Breeze',
      subtitle: 'Fresh, light & seafood centric',
      icon: <Fish size={16} />,
      totalPrice: 39.000,
      courses: [
        {
          courseName: 'Appetizer',
          title: 'Traditional Tapenade Platter',
          description: 'Gourmet paste of blended black olives, capers, garlic, and fresh herbs. Served with warm rustic olive bread and extra virgin olive oil.',
          image: '/images/tapenade.png',
          pairingNote: 'Premium cold-pressed Chemlali olive oil with hints of almond.'
        },
        {
          courseName: 'Main Course',
          title: 'Grilled Sea Bream (Daurade)',
          description: 'Freshly caught sea bream grilled whole with rosemary sprigs, lemon slices, and drizzled with a warm olive oil-garlic emulsion.',
          image: '/images/seabream.png',
          pairingNote: 'Rosemary-infused oil enhances the delicate white fish flavor.'
        },
        {
          courseName: 'Drink Pairing',
          title: 'Orange Blossom Citronnade',
          description: 'Freshly squeezed lemonade sweetened with organic sugar cane and infused with organic orange blossom water.',
          image: '/images/garden.png',
          pairingNote: 'Citrus acidity cuts cleanly through the richness of the olive oil.'
        }
      ]
    },
    {
      id: 'traditional',
      displayName: 'Djerbian Heritage',
      subtitle: 'Spiced, hearty & local',
      icon: <Utensils size={16} />,
      totalPrice: 28.500,
      courses: [
        {
          courseName: 'Appetizer',
          title: 'Tunisian Seafood Brik',
          description: 'Deep-fried thin pastry envelope stuffed with canned tuna, capers, parsley, cheese, and a whole runny egg yolk inside.',
          image: '/images/tapenade.png',
          pairingNote: 'Zesty lemon squeeze balances the crispy fried wrapper.'
        },
        {
          courseName: 'Main Course',
          title: 'Riz Djerbien (Steamed Rice)',
          description: 'Traditional Djerbian steamed rice infused with spinach, parsley, local spices, mixed with calamari, shrimp, and octopus.',
          image: '/images/rice.png',
          pairingNote: 'Spiced olive oil drizzle brings out the steam-infused seafood aromatics.'
        },
        {
          courseName: 'Drink Pairing',
          title: 'Charcoal Green Mint Tea',
          description: 'Strong hot green tea brewed over hot charcoal, heavily sweetened, packed with fresh mint, and topped with toasted pine nuts.',
          image: '/images/garden.png',
          pairingNote: 'Green mint tea helps digestion after a spiced meal.'
        }
      ]
    },
    {
      id: 'hearty',
      displayName: 'Charcoal Garden Feast',
      subtitle: 'Smokey, robust & grilled',
      icon: <Salad size={16} />,
      totalPrice: 40.500,
      courses: [
        {
          courseName: 'Appetizer',
          title: 'Salade Mechouia & Tuna',
          description: 'Charcoal-grilled green peppers, tomatoes, and garlic crushed together, seasoned with caraway, and topped with tuna and hard-boiled eggs.',
          image: '/images/tapenade.png',
          pairingNote: 'Finished with raw olive oil to soften the smoky pepper heat.'
        },
        {
          courseName: 'Main Course',
          title: 'Grilled Lamb Chops',
          description: 'Thick, grass-fed local lamb chops marinated in wild rosemary, garlic, and sea salt, grilled over charcoal. Served with roasted vegetables.',
          image: '/images/seabream.png',
          pairingNote: 'Spicy terracotta harissa dip provided on the side.'
        },
        {
          courseName: 'Drink Pairing',
          title: 'Pine Nut Mint Tea',
          description: 'Authentic Djerbian mint tea, brewed strong, finished with floating hot roasted pine nuts that add a buttery finish.',
          image: '/images/garden.png',
          pairingNote: 'Pine nut oils add a rich texture that pairs with grilled lamb.'
        }
      ]
    },
    {
      id: 'sweet',
      displayName: 'Olive Orchard Sweet',
      subtitle: 'Delicate, sweet & soft',
      icon: <Coffee size={16} />,
      totalPrice: 22.000,
      courses: [
        {
          courseName: 'Appetizer',
          title: 'Olive Oil Focaccia & Honey',
          description: 'Fluffy homemade olive oil focaccia baked with rosemary, served warm with local wild honey and fresh ricotta cheese.',
          image: '/images/tapenade.png',
          pairingNote: 'Sweet honey contrasts beautifully with savory olive oil notes.'
        },
        {
          courseName: 'Main Course',
          title: 'Citrus Olive Oil Cake',
          description: 'Moist, dense dessert cake made with premium olive oil, fresh lemon zest, and honey glaze. Served with vanilla bean whipped cream.',
          image: '/images/rice.png', // Fallback or placeholder
          pairingNote: 'Olive oil keeps the cake exceptionally moist and fruit-forward.'
        },
        {
          courseName: 'Drink Pairing',
          title: 'Traditional Citronnade Mint',
          description: 'Traditional lemon drink crushed whole with mint leaves, served ice cold. A sweet, crisp finish.',
          image: '/images/garden.png',
          pairingNote: 'Lemon acidity rounds out the sweet whipped cream.'
        }
      ]
    }
  ];

  const handleProfileSelect = (id: string) => {
    setActiveProfileId(id);
    confetti({
      particleCount: 30,
      angle: 120,
      spread: 60,
      origin: { x: 0.8, y: 0.75 },
      colors: ['#c5a059', '#3a4f3b', '#faf9f5']
    });
  };

  const activeProfile = menuProfiles.find(x => x.id === activeProfileId) || menuProfiles[0];

  const handleOrderMenu = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    const courseDetails = activeProfile.courses.map(x => x.title).join(' ➡️ ');
    const text = `Hello L'Oliveraie Restaurant! I would like to reserve a table to dine on the recommended "${activeProfile.displayName}" 3-course menu: [${courseDetails}]. Estimated price: ${activeProfile.totalPrice.toFixed(3)} DT. Please get in touch!`;
    const whatsappUrl = `https://wa.me/21650850183?text=${encodeURIComponent(text)}`; // same contact number used
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="recommendation" className="recommendation-section">
      <div className="rec-header">
        <h2 className="rec-title">Virtual Sommelier</h2>
        <p className="rec-subtitle">
          Let our Chef suggest the perfect pairing. Select your dining preference below to design a curated, harmonious 3-course Mediterranean meal.
        </p>
      </div>

      <div className="rec-container">
        {/* Left questionnaire */}
        <div className="rec-questionnaire">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HelpCircle size={20} color="var(--color-accent)" />
            <h3 className="rec-question-title">Select Your Vibe</h3>
          </div>
          <p className="rec-question-desc">Choose a taste profile to load the chef\'s pairings.</p>

          <div className="filter-group">
            {menuProfiles.map(profile => (
              <button
                key={profile.id}
                className={`filter-option ${activeProfileId === profile.id ? 'active' : ''}`}
                onClick={() => handleProfileSelect(profile.id)}
              >
                <div className="filter-icon-box">
                  {profile.icon}
                </div>
                <div className="filter-text">
                  <span className="filter-label">{profile.displayName}</span>
                  <span className="filter-sub">{profile.subtitle}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Cards Deck */}
        <div className="rec-deck">
          <div className="deck-cards-row">
            <AnimatePresence mode="wait">
              {activeProfile.courses.map((course, index) => (
                <motion.div
                  key={`${activeProfile.id}-${index}`}
                  className="course-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="course-image-box">
                    <span className="course-badge">{course.courseName}</span>
                    <img src={course.image} alt={course.title} className="course-image" />
                  </div>
                  <div className="course-body">
                    <h4 className="course-title">{course.title}</h4>
                    <p className="course-desc">{course.description}</p>
                    <div className="pairing-box">
                      <div className="pairing-label">Pairing:</div>
                      <div className="pairing-note">{course.pairingNote}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Stacking footer / total cost */}
          <div className="deck-summary">
            <div className="deck-summary-info">
              <span className="summary-heading">Curated 3-Course Pairing Total</span>
              <span className="summary-details">
                {activeProfile.displayName} — {activeProfile.totalPrice.toFixed(3)} DT
              </span>
            </div>
            <button 
              onClick={handleOrderMenu}
              className="btn-rec-cta"
            >
              <Sparkles size={14} style={{ marginRight: '6px', display: 'inline' }} />
              <span>Book This Experience</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
