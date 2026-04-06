import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const heroImages = [
  '/images/hero_dubai_1774589057519.png',
  '/images/hero_aurora_1774589075396.png',
  '/images/hero_vegas_1774589093329.png',
  '/images/hero_festival_1774589112439.png',
  '/images/hero_singapore_1774589129848.png',
];

const headings = [
  'MEMORIES FOR LIFE',
  'UNIQUE EXPERIENCE',
  'GLOBAL TRAVEL',
  'EXPLORE THE WORLD',
  'DREAM DESTINATIONS',
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  const currentHeading = headings[currentHeadingIndex];

  const typeNextChar = useCallback(() => {
    if (isTyping) {
      setDisplayedText((prev) => {
        if (prev.length < currentHeading.length) {
          return currentHeading.slice(0, prev.length + 1);
        }
        // Finished typing, pause then start erasing
        setTimeout(() => setIsTyping(false), 2000);
        return prev;
      });
    } else {
      setDisplayedText((prev) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        // Finished erasing, move to next heading
        setCurrentHeadingIndex((prevIdx) => (prevIdx + 1) % headings.length);
        setIsTyping(true);
        return '';
      });
    }
  }, [isTyping, currentHeading]);

  useEffect(() => {
    const speed = isTyping ? 80 : 40;
    const timer = setTimeout(typeNextChar, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isTyping, typeNextChar]);

  return (
    <section className="hero" id="hero">
      {/* Background images */}
      <div className="hero__bg-container">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            className="hero__bg-image"
            style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="hero__overlay" />
      </div>

      {/* Content */}
      <div className="hero__content">
        <motion.div
          className="hero__text-container"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero__heading">
            <span className="hero__heading-text">{displayedText}</span>
            <span className="hero__cursor">|</span>
          </h1>

          <p className="hero__subtitle">
            India's #1 travel brand for global festivals, luxury escapes, and
            unforgettable experiences — all with Sai Mehar Trips Pvt Ltd.
          </p>

          <motion.button
            className="hero__cta"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(231, 76, 60, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            Sai Mehar Specials <FiArrowRight style={{ marginLeft: 8 }} />
          </motion.button>
        </motion.div>
      </div>


    </section>
  );
};

export default Hero;
