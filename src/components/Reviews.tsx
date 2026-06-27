import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './Reviews.css';

interface Review {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const reviews: Review[] = [
    {
      id: 1,
      name: 'Amel Belhadj',
      role: 'Fine Dining Enthusiast',
      text: 'Dining under the olive trees at L\'Oliveraie is absolute magic! The Grilled Sea Bream drizzled with warm rosemary olive oil was cooked to perfection. The atmosphere is romantic, peaceful, and highly premium.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jean-Pierre Valery',
      role: 'Travel Blogger',
      text: 'Superb Mediterranean gastronomy. Their olive oil selection is highly sophisticated—tasting Chemlali oil alongside fresh sourdough focaccia was a revelation. It is by far the best culinary experience we had on Djerba.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Riadh Sellami',
      role: 'Local Guide',
      text: 'Extremely clean, serene, and elegant. The steamed seafood Riz Djerbien is packed with authentic flavors and fresh local herbs. L\'Oliveraie respects both traditional roots and upscale presentation.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Elena Rostova',
      role: 'Culinary Visitor',
      text: 'Beautiful rustic chic garden setting. Fresh fish cooked beautifully on charcoal embers and drizzled with raw estate oil. Outstanding service, warm hospitality, and pure flavors.',
      rating: 5,
    }
  ];

  const handleNext = () => {
    setDirection(1);
    setIndex(prev => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-header">
        <h2 className="reviews-title">Praise from Our Guests</h2>
        <p className="reviews-subtitle">
          Read reviews from food lovers and travelers who have dined in our olive orchard.
        </p>
      </div>

      <div className="reviews-carousel-wrapper">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="review-card"
          >
            <Quote size={36} className="quote-icon" />
            <p className="review-text">"{reviews[index].text}"</p>
            <div className="review-author-row">
              <div className="author-info">
                <span className="author-name">{reviews[index].name}</span>
                <span className="author-role">{reviews[index].role}</span>
              </div>
              <div className="author-rating">
                <Star size={13} fill="var(--color-accent)" stroke="var(--color-accent)" />
                <span>{reviews[index].rating.toFixed(1)} / 5.0</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="carousel-controls">
          <div className="carousel-dots">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`carousel-dot ${index === i ? 'active' : ''}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
              />
            ))}
          </div>

          <div className="carousel-arrows">
            <button className="carousel-arrow" onClick={handlePrev} aria-label="Previous review">
              <ChevronLeft size={18} />
            </button>
            <button className="carousel-arrow" onClick={handleNext} aria-label="Next review">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
