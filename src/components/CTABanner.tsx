import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import './CTABanner.css';

const CTABanner = () => {
  return (
    <section className="cta-banner">
      <div className="cta-banner__container">
        <FadeIn
          className="cta-banner__content"
          direction="up"
          duration={0.6}
        >
          <h2 className="cta-banner__title">Got travel plans in your mind?</h2>
          <p className="cta-banner__subtitle">We're just a call away!</p>
          <div className="cta-banner__buttons">
            <motion.a
              href="tel:+919876543210"
              className="cta-banner__btn cta-banner__btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us <FiArrowRight />
            </motion.a>
            <motion.a
              href="https://wa.me/919876543210"
              className="cta-banner__btn cta-banner__btn--secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTABanner;
