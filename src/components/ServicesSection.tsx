import FadeIn from './FadeIn';
import { motion } from 'framer-motion';
import { FiGlobe, FiFileText, FiSend, FiMapPin } from 'react-icons/fi';
import { visaCountries, visaCategories, passportServices, airfareServices } from '../data/packagesData';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <motion.h2
          className="services__main-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
          <span className="services__title-bar" />
        </motion.h2>

        <div className="services__grid">
          {/* VISA */}
          <FadeIn
            className="services__card"
            direction="up"
          >
            <div className="services__card-icon services__card-icon--visa">
              <FiGlobe size={28} />
            </div>
            <h3 className="services__card-title">Visa Services</h3>
            <p className="services__card-subtitle">
              Categories: {visaCategories.join(' • ')}
            </p>
            <div className="services__tags">
              {visaCountries.slice(0, 12).map((c) => (
                <span key={c} className="services__tag">{c}</span>
              ))}
              <span className="services__tag services__tag--more">+{visaCountries.length - 12} more</span>
            </div>
            <button className="services__card-btn">Enquire Now →</button>
          </FadeIn>

          {/* PASSPORT */}
          <FadeIn
            className="services__card"
            direction="up"
            delay={0.1}
          >
            <div className="services__card-icon services__card-icon--passport">
              <FiFileText size={28} />
            </div>
            <h3 className="services__card-title">Passport Services</h3>
            <p className="services__card-subtitle">New / Renew</p>
            <div className="services__pricing">
              {passportServices.pricing.map((p) => (
                <div key={p.type} className="services__price-item">
                  <span className="services__price-label">{p.type}</span>
                  <span className="services__price-value">{p.price}</span>
                </div>
              ))}
            </div>
            <p className="services__note">{passportServices.note}</p>
            <button className="services__card-btn">Get Started →</button>
          </FadeIn>

          {/* AIRFARE */}
          <FadeIn
            className="services__card"
            direction="up"
            delay={0.2}
          >
            <div className="services__card-icon services__card-icon--airfare">
              <FiSend size={28} />
            </div>
            <h3 className="services__card-title">Airfare</h3>
            <p className="services__card-subtitle">
              {airfareServices.types.join(' & ')}
            </p>
            <ul className="services__features">
              {airfareServices.features.map((f) => (
                <li key={f} className="services__feature">
                  <FiMapPin size={14} /> {f}
                </li>
              ))}
            </ul>
            <button className="services__card-btn">Book Now →</button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
