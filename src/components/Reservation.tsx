import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Calendar, Clock, Users, Phone, MapPin, Mail, User, Sparkles, CheckCircle, Home } from 'lucide-react';
import './Reservation.css';

export const Reservation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    guests: '2',
    seating: 'garden', // 'garden' or 'indoor'
    date: '',
    time: '20:00',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save locally
    const bookings = JSON.parse(localStorage.getItem('oliveraie_bookings') || '[]');
    bookings.push({ ...formData, id: Date.now() });
    localStorage.setItem('oliveraie_bookings', JSON.stringify(bookings));

    // Confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c5a059', '#3a4f3b', '#faf9f5']
    });

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      guests: '2',
      seating: 'garden',
      date: '',
      time: '20:00',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="reservation-section">
      <div className="reservation-container">
        {/* Form Card */}
        <motion.div 
          className="reservation-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="reservation-title">Book a Table</h3>
                <p className="reservation-subtitle">
                  Reserve your table under the olive trees or in our elegant indoor room. We look forward to hosting you.
                </p>

                <div className="form-grid">
                  {/* Name */}
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <div className="form-input-wrapper">
                      <User size={16} className="form-icon" />
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        placeholder="John Doe" 
                        className="form-input"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <div className="form-input-wrapper">
                      <Phone size={16} className="form-icon" />
                      <input 
                        type="tel" 
                        name="phone" 
                        required 
                        placeholder="+216 50 850 183" 
                        className="form-input"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="form-group">
                    <label className="form-label">Number of Guests</label>
                    <div className="form-input-wrapper">
                      <Users size={16} className="form-icon" />
                      <select 
                        name="guests" 
                        className="form-input form-select"
                        value={formData.guests}
                        onChange={handleChange}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                          <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                        <option value="9+">9+ Guests (Large Party)</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating preference */}
                  <div className="form-group">
                    <label className="form-label">Seating Location</label>
                    <div className="form-input-wrapper">
                      <Home size={16} className="form-icon" />
                      <select 
                        name="seating" 
                        className="form-input form-select"
                        value={formData.seating}
                        onChange={handleChange}
                      >
                        <option value="garden">Olive Garden (Recommended)</option>
                        <option value="indoor">Indoor Dining Room</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="form-group">
                    <label className="form-label">Date</label>
                    <div className="form-input-wrapper">
                      <Calendar size={16} className="form-icon" />
                      <input 
                        type="date" 
                        name="date" 
                        required 
                        className="form-input"
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="form-group">
                    <label className="form-label">Time</label>
                    <div className="form-input-wrapper">
                      <Clock size={16} className="form-icon" />
                      <select 
                        name="time" 
                        className="form-input form-select"
                        value={formData.time}
                        onChange={handleChange}
                      >
                        {['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="form-group-full">
                    <label className="form-label">Email Address (Optional)</label>
                    <div className="form-input-wrapper">
                      <Mail size={16} className="form-icon" />
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="john@example.com" 
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="form-group-full">
                    <label className="form-label">Special notes</label>
                    <textarea 
                      name="notes" 
                      rows={3} 
                      placeholder="Allergies, dietary requests, birthday celebration..." 
                      className="form-input form-textarea"
                      value={formData.notes}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary btn-submit">
                  <Sparkles size={14} />
                  <span>Reserve Table</span>
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                className="booking-success-box"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="success-icon-container">
                  <CheckCircle size={36} />
                </div>
                <h3 className="success-title">Table Requested!</h3>
                <p className="success-message">
                  Thank you, <strong>{formData.name}</strong>. We have received your booking request for <strong>{formData.guests} people</strong> in our <strong>{formData.seating === 'garden' ? 'Olive Garden' : 'Indoor Dining Room'}</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                </p>
                <button onClick={handleReset} className="btn-secondary">
                  <span>Book Another Table</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Info Column */}
        <div className="info-column">
          {/* Map */}
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              src="https://maps.google.com/maps?q=33.8081177,10.9903667&t=&z=18&ie=UTF8&iwloc=&output=embed" 
              className="map-iframe"
              allowFullScreen={false} 
              loading="lazy"
              title="L'Oliveraie Restaurant Location"
            />
          </motion.div>

          {/* Details */}
          <motion.div 
            className="details-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="details-heading">Details & Location</h4>
            <div className="details-list">
              <div className="details-item">
                <div className="details-icon-box">
                  <MapPin size={18} />
                </div>
                <div className="details-text">
                  <span className="details-title">Address</span>
                  <span className="details-val">Midoun, Djerba, Tunisia (L'Oliveraie Restaurant)</span>
                </div>
              </div>

              <div className="details-item">
                <div className="details-icon-box">
                  <Phone size={18} />
                </div>
                <div className="details-text">
                  <span className="details-title">Direct Call</span>
                  <span className="details-val">+216 50 850 183</span>
                </div>
              </div>

              <div className="details-item">
                <div className="details-icon-box">
                  <Mail size={18} />
                </div>
                <div className="details-text">
                  <span className="details-title">Email Inquiry</span>
                  <span className="details-val">oliveraie27@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
