import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Star, Leaf, Plus, Check, ShoppingBag } from 'lucide-react';
import './Menu.css';

interface MenuItem {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviewsCount: number;
  tag?: 'signature' | 'seafood' | 'olive';
  ingredients: string[];
}

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  
  // Customization state for modal
  const [selectedOilId, setSelectedOilId] = useState<string>('chemlali');
  const [isGlutenFree, setIsGlutenFree] = useState<boolean>(false);
  const [isNutFree, setIsNutFree] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'Full Menu' },
    { id: 'starters', label: 'Starters' },
    { id: 'seafood', label: 'Seafood' },
    { id: 'grill', label: 'Charcoal Grill' },
    { id: 'salads', label: 'Garden Salads' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 'tapenade-platter',
      title: 'Traditional Tapenade Platter',
      category: 'starters',
      price: 8.500,
      description: 'Gourmet paste of blended black olives, capers, garlic, and fresh herbs. Served with warm rustic olive bread and extra virgin olive oil.',
      image: '/images/tapenade.png',
      rating: 4.8,
      reviewsCount: 42,
      tag: 'olive',
      ingredients: ['Chemlali Olives', 'Capers', 'Garlic', 'Warm Focaccia', 'Rosemary Oil'],
    },
    {
      id: 'seafood-brik',
      title: 'Tunisian Seafood Brik',
      category: 'starters',
      price: 6.500,
      description: 'Crispy fried pastry envelope filled with chopped tuna, shrimp, capers, fresh parsley, and a soft-cooked egg yolk inside.',
      image: '/images/tapenade.png',
      rating: 4.9,
      reviewsCount: 78,
      ingredients: ['Pastry Sheet', 'Canned Tuna', 'Royal Shrimp', 'Runny Egg Yolk', 'Capers', 'Parsley'],
    },
    {
      id: 'salade-mechouia',
      title: 'Salade Mechouia Royale',
      category: 'starters',
      price: 7.500,
      description: 'Traditional Tunisian starter made of charcoal-grilled peppers, tomatoes, and garlic mashed together, garnished with tuna, egg, and olives.',
      image: '/images/tapenade.png',
      rating: 4.7,
      reviewsCount: 55,
      ingredients: ['Grilled Peppers', 'Tomatoes', 'Garlic', 'Boiled Egg', 'Tunisian Tuna', 'Chemlali Olive Oil'],
    },
    {
      id: 'octopus-carpaccio',
      title: 'Fennel Octopus Carpaccio',
      category: 'starters',
      price: 12.500,
      description: 'Paper-thin slices of cooked octopus, seasoned with sea salt, lemon juice, fennel shavings, fresh mint, and drizzled with raw peppery olive oil.',
      image: '/images/tapenade.png',
      rating: 4.9,
      reviewsCount: 38,
      tag: 'signature',
      ingredients: ['Local Octopus', 'Fennel Shavings', 'Fresh Mint', 'Lemon Emulsion', 'Chétoui Olive Oil'],
    },
    {
      id: 'grilled-seabream',
      title: 'Grilled Sea Bream (Daurade)',
      category: 'seafood',
      price: 26.000,
      description: 'Fresh Djerbian sea bream grilled whole over charcoal, infused with rosemary and lemon slices, drizzled with warm olive oil-garlic emulsion.',
      image: '/images/seabream.png',
      rating: 4.9,
      reviewsCount: 120,
      tag: 'signature',
      ingredients: ['Whole Sea Bream', 'Wild Rosemary', 'Fresh Garlic', 'Lemons', 'Rosemary Olive Oil'],
    },
    {
      id: 'riz-djerbien',
      title: 'Steamed Riz Djerbien',
      category: 'seafood',
      price: 18.500,
      description: 'Steamed rice cooked with spinach, parsley, local Djerbian spices, tossed with octopus chunks, shrimp, and calamari rings.',
      image: '/images/rice.png',
      rating: 4.8,
      reviewsCount: 94,
      tag: 'seafood',
      ingredients: ['Basmati Rice', 'Steamed Spinach', 'Spiced Octopus', 'Royal Shrimp', 'Calamari', 'Tunisian Spices'],
    },
    {
      id: 'royal-prawns',
      title: 'Embers Royal Prawns',
      category: 'seafood',
      price: 32.000,
      description: 'Jumbo prawns marinated in garlic, lemon juice, and olive oil, skewered and grilled over charcoal embers. Served with herb rice.',
      image: '/images/seabream.png',
      rating: 4.9,
      reviewsCount: 88,
      ingredients: ['Jumbo Prawns', 'Lemon Herb Marinade', 'Garlic Paste', 'Olive Oil', 'Spiced Rice'],
    },
    {
      id: 'lamb-chops',
      title: 'Charcoal Lamb Chops',
      category: 'grill',
      price: 29.500,
      description: 'Succulent grass-fed lamb chops marinated in wild rosemary, garlic, and coarse salt, grilled over charcoal. Served with roasted Mediterranean vegetables.',
      image: '/images/garden.png',
      rating: 4.9,
      reviewsCount: 104,
      tag: 'signature',
      ingredients: ['Local Lamb Chops', 'Wild Rosemary', 'Garlic Slices', 'Grilled Peppers & Tomatoes', 'Sea Salt'],
    },
    {
      id: 'beef-brochette',
      title: 'Charcoal Beef Brochettes',
      category: 'grill',
      price: 24.000,
      description: 'Tender beef tenderloin cuts marinated in olive oil and aromatic spices, skewered with onions and bell peppers, grilled over charcoal.',
      image: '/images/garden.png',
      rating: 4.7,
      reviewsCount: 46,
      ingredients: ['Beef Tenderloin', 'Onion Wedges', 'Bell Peppers', 'Charcoal Smoke', 'Spiced Marinade'],
    },
    {
      id: 'fennel-orange-salad',
      title: 'Djerbian Fennel & Orange Salad',
      category: 'salads',
      price: 9.000,
      description: 'Crisp fennel bulb shavings tossed with sweet orange segments, black olives, red onions, mint, and a light orange-olive oil vinaigrette.',
      image: '/images/garden.png',
      rating: 4.6,
      reviewsCount: 29,
      ingredients: ['Fennel Shavings', 'Orange Segments', 'Black Olives', 'Red Onions', 'Mint Leaves', 'Olive Oil Vinaigrette'],
    },
    {
      id: 'oliveraie-salad',
      title: 'L\'Oliveraie Fig & Goat Cheese',
      category: 'salads',
      price: 11.500,
      description: 'A bed of fresh garden greens topped with sweet dried figs, walnuts, toasted goat cheese rounds on crostini, and olive oil-honey dressing.',
      image: '/images/garden.png',
      rating: 4.8,
      reviewsCount: 62,
      tag: 'olive',
      ingredients: ['Garden Greens', 'Dried Figs', 'Toasted Walnuts', 'Goat Cheese Rounds', 'Olive Oil-Honey dressing'],
    },
    {
      id: 'citrus-cake',
      title: 'Citrus Olive Oil Cake',
      category: 'desserts',
      price: 12.000,
      description: 'Exquisite dessert cake baked with premium extra virgin olive oil and fresh orange zest, glazed with wild honey, served with vanilla cream.',
      image: '/images/rice.png', // Fallback
      rating: 4.9,
      reviewsCount: 84,
      tag: 'signature',
      ingredients: ['Flour', 'Chemlali Olive Oil', 'Orange Zest', 'Wild Honey', 'Vanilla Bean Cream'],
    }
  ];

  const oliveOils = [
    { id: 'chemlali', name: 'Chemlali Oil', type: 'Intense Fruity, Almond Finish', price: 0.000 },
    { id: 'chetoui', name: 'Chétoui Oil', type: 'Robust Herbs, Peppery Finish', price: 0.000 },
    { id: 'oueslati', name: 'Oueslati Oil (Premium)', type: 'Mild Fruity, Honey Notes', price: 0.500 },
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setSelectedOilId('chemlali');
    setIsGlutenFree(false);
    setIsNutFree(false);
  };

  const calculateTotalPrice = () => {
    if (!selectedItem) return 0;
    let total = selectedItem.price;
    const oil = oliveOils.find(o => o.id === selectedOilId);
    if (oil) total += oil.price;
    return total;
  };

  const handleOrderRedirect = () => {
    if (!selectedItem) return;
    const oilName = oliveOils.find(x => x.id === selectedOilId)?.name;
    const notes = [
      oilName ? `Olive Oil: ${oilName}` : '',
      isGlutenFree ? 'Gluten-Free' : '',
      isNutFree ? 'Nut-Free' : ''
    ].filter(Boolean).join(', ');
    
    const text = `Hello L'Oliveraie Restaurant! I want to order: ${selectedItem.title} (${notes}). Total: ${calculateTotalPrice().toFixed(3)} DT. Please prepare it!`;
    const whatsappUrl = `https://wa.me/21650850183?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="menu-section">
      <div className="menu-header">
        <h2 className="menu-section-title">The Culinary Catalog</h2>
        <p className="menu-subtitle">
          Savor the Mediterranean. Fresh, high-quality, oil-infused starters, seafood straight from Djerba\'s ports, and traditional Djerbian specialties.
        </p>
      </div>

      <div className="menu-controls">
        {/* Search */}
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search our dishes (e.g. Sea Bream, Rice)..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="categories-container">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div className="menu-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              className="menu-card"
              onClick={() => handleItemClick(item)}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <div className="menu-image-container">
                <img src={item.image} alt={item.title} className="menu-card-image" />
                {item.tag && (
                  <span className={`menu-card-tag tag-${item.tag}`}>
                    {item.tag === 'signature' ? '⭐ Chef Choice' : item.tag === 'seafood' ? '🐟 Seafood' : '🌿 Olive Infused'}
                  </span>
                )}
              </div>
              <div className="menu-card-details">
                <div className="menu-card-header">
                  <h3 className="menu-card-title">{item.title}</h3>
                  <span className="menu-card-price">{item.price.toFixed(3)} DT</span>
                </div>
                <p className="menu-card-desc">{item.description}</p>
                <div className="menu-card-footer">
                  <div className="rating-row">
                    <Star size={13} fill="var(--color-accent)" className="star-icon" />
                    <span>{item.rating} ({item.reviewsCount})</span>
                  </div>
                  <button className="menu-card-btn" aria-label="Order dish">
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Detail & Customizer */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="menu-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="menu-modal"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close-btn" onClick={() => setSelectedItem(null)} aria-label="Close modal">
                <Plus size={22} style={{ transform: 'rotate(45deg)' }} />
              </button>

              <div className="modal-hero">
                <img src={selectedItem.image} alt={selectedItem.title} className="modal-image" />
              </div>

              <div className="modal-body">
                <div className="modal-title-row">
                  <h3 className="modal-title">{selectedItem.title}</h3>
                  <span className="modal-price">{selectedItem.price.toFixed(3)} DT</span>
                </div>
                <p className="modal-desc">{selectedItem.description}</p>

                {/* Ingredients */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {selectedItem.ingredients.map((ing, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        fontSize: '12px', 
                        padding: '4px 10px', 
                        background: 'var(--color-bg-alt)', 
                        border: '1px solid var(--color-border)', 
                        borderRadius: '4px',
                        color: 'var(--color-text-secondary)',
                        fontWeight: '500'
                      }}
                    >
                      {ing}
                    </span>
                  ))}
                </div>

                <div className="modal-divider" />

                {/* Olive Oil Selection */}
                <h4 className="modal-section-title">
                  <Leaf size={14} fill="var(--color-accent)" color="var(--color-accent)" />
                  <span>Select Olive Oil Drizzle</span>
                </h4>
                <div className="oil-selector">
                  {oliveOils.map(oil => (
                    <button
                      key={oil.id}
                      className={`oil-option ${selectedOilId === oil.id ? 'active' : ''}`}
                      onClick={() => setSelectedOilId(oil.id)}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span className="oil-name">
                          {selectedOilId === oil.id && <Check size={14} color="var(--color-accent)" strokeWidth={3} />}
                          {oil.name}
                        </span>
                        <span className="oil-type">{oil.type}</span>
                      </div>
                      <span className="oil-price">{oil.price > 0 ? `+${oil.price.toFixed(3)} DT` : 'Free'}</span>
                    </button>
                  ))}
                </div>

                <div className="modal-divider" />

                {/* Dietary Adjustments */}
                <h4 className="modal-section-title">
                  <span>Dietary Requirements</span>
                </h4>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <label 
                    style={{ 
                      flex: 1, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '14px', 
                      borderRadius: '10px', 
                      border: `1px solid ${isGlutenFree ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      background: isGlutenFree ? 'rgba(58, 79, 59, 0.04)' : 'var(--color-bg-alt)',
                      fontSize: '13px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsGlutenFree(!isGlutenFree)}
                  >
                    <input type="checkbox" checked={isGlutenFree} readOnly style={{ display: 'none' }} />
                    <div style={{ width: '18px', height: '18px', border: '2px solid var(--color-text-muted)', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {isGlutenFree && <Check size={12} color="var(--color-primary)" strokeWidth={3} />}
                    </div>
                    <span>Gluten-Free</span>
                  </label>

                  <label 
                    style={{ 
                      flex: 1, 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      padding: '14px', 
                      borderRadius: '10px', 
                      border: `1px solid ${isNutFree ? 'var(--color-primary)' : 'var(--color-border)'}`,
                      background: isNutFree ? 'rgba(58, 79, 59, 0.04)' : 'var(--color-bg-alt)',
                      fontSize: '13px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                    onClick={() => setIsNutFree(!isNutFree)}
                  >
                    <input type="checkbox" checked={isNutFree} readOnly style={{ display: 'none' }} />
                    <div style={{ width: '18px', height: '18px', border: '2px solid var(--color-text-muted)', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {isNutFree && <Check size={12} color="var(--color-primary)" strokeWidth={3} />}
                    </div>
                    <span>Nut-Free</span>
                  </label>
                </div>
              </div>

              <div className="modal-footer">
                <div className="modal-footer-info">
                  <span className="modal-footer-label">Total Price</span>
                  <span className="modal-footer-price">{calculateTotalPrice().toFixed(3)} DT</span>
                </div>
                <button 
                  onClick={handleOrderRedirect}
                  className="btn-primary modal-action-btn"
                >
                  <ShoppingBag size={16} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
