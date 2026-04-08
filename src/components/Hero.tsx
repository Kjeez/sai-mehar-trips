import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const heroData = [
  { image: '/images/places/greece.jpg', heading: 'MESMERIZING GREECE' },
  { image: '/images/places/maldives.jpg', heading: 'MAGICAL MALDIVES' },
  { image: '/images/places/bali.jpg', heading: 'BEAUTIFUL BALI' },
  { image: '/images/places/thailand.jpg', heading: 'AMAZING THAILAND' },
  { image: '/images/places/kashmir.jpg', heading: 'HEAVENLY KASHMIR' },
  { image: '/images/places/santorini.jpg', heading: 'STUNNING SANTORINI' },
  { image: '/images/places/manali.jpg', heading: 'MAJESTIC MANALI' },
  { image: '/images/places/andaman.jpg', heading: 'PRISTINE ANDAMAN' },
  { image: '/images/places/ladakh.jpg', heading: 'BREATHTAKING LADAKH' },
  { image: '/images/places/singapore.jpg', heading: 'SPECTACULAR SINGAPORE' },
  { image: '/images/places/bangkok.jpg', heading: 'BUSTLING BANGKOK' },
  { image: '/images/places/goa.jpg', heading: 'GLORIOUS GOA' },
  { image: '/images/places/jaislmer.jpg', heading: 'GOLDEN JAISALMER' },
  { image: '/images/places/kodaikanal.jpg', heading: 'CAPTIVATING KODAIKANAL' },
  { image: '/images/places/shillong.jpg', heading: 'SCENIC SHILLONG' },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typewriter effect driving the slide changes
  const currentHeading = heroData[currentIndex].heading;

  const typeNextChar = useCallback(() => {
    if (isTyping) {
      setDisplayedText((prev) => {
        if (prev.length < currentHeading.length) {
          return currentHeading.slice(0, prev.length + 1);
        }
        // Finished typing, pause then start erasing
        setTimeout(() => setIsTyping(false), 2500);
        return prev;
      });
    } else {
      setDisplayedText((prev) => {
        if (prev.length > 0) {
          return prev.slice(0, -1);
        }
        // Finished erasing, move to next slide
        setCurrentIndex((prevIdx) => (prevIdx + 1) % heroData.length);
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
          <motion.img
            key={currentIndex}
            className="hero__bg-image"
            src={heroData[currentIndex].image}
            alt={`${heroData[currentIndex].heading} background`}
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
