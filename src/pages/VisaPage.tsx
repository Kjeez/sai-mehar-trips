import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMap, FiClock, FiUserCheck, FiArrowRight, FiCheckCircle, FiPhone } from 'react-icons/fi';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import EnquiryModal from '../components/EnquiryModal';
import { visaCountries } from '../data/packagesData';
import './VisaPage.css';

const visaCategories = [
  {
    icon: <FiBriefcase size={28} />,
    title: 'Business Visa',
    desc: 'For attending meetings, conferences, or exploring business opportunities across borders.',
    features: ['Corporate letters accepted', 'Fast-track processing', '6–12 month validity'],
  },
  {
    icon: <FiMap size={28} />,
    title: 'Tourist Visa',
    desc: 'Explore new destinations, cultures, and landscapes with our seamless tourist visa services.',
    features: ['Single & multiple entry', 'Group discounts', '30–180 day stay'],
  },
  {
    icon: <FiClock size={28} />,
    title: 'Transit Visa',
    desc: 'Short-term visas for stopovers and layovers en route to your final destination.',
    features: ['24–96 hour validity', 'Airport transit', 'Quick issuance'],
  },
  {
    icon: <FiUserCheck size={28} />,
    title: 'Visitor Visa',
    desc: 'Visit family, friends, or relatives abroad with hassle-free visitor visa processing.',
    features: ['Invitation letters', 'Family-friendly', 'Document guidance'],
  },
];

// Country flag emojis map
const countryFlags: Record<string, string> = {
  'Dubai': '🇦🇪',
  'Singapore': '🇸🇬',
  'Vietnam': '🇻🇳',
  'Australia': '🇦🇺',
  'New Zealand': '🇳🇿',
  'Canada': '🇨🇦',
  'USA': '🇺🇸',
  'Indonesia': '🇮🇩',
  'UK': '🇬🇧',
  'Europe (Schengen)': '🇪🇺',
  'South Korea': '🇰🇷',
  'Russia': '🇷🇺',
  'South Africa': '🇿🇦',
  'Azerbaijan': '🇦🇿',
  'Oman': '🇴🇲',
  'Saudi Arabia': '🇸🇦',
  'Georgia': '🇬🇪',
  'Turkey': '🇹🇷',
  'Egypt': '🇪🇬',
  'Japan': '🇯🇵',
  'Bangladesh': '🇧🇩',
  'China': '🇨🇳',
  'Hong Kong': '🇭🇰',
  'Ireland': '🇮🇪',
  'Jordan': '🇯🇴',
  'Qatar': '🇶🇦',
  'Taiwan': '🇹🇼',
};

const stats = [
  { value: '27+', label: 'Countries' },
  { value: '5000+', label: 'Visas Processed' },
  { value: '98%', label: 'Success Rate' },
  { value: '48hr', label: 'Avg. Processing' },
];

const VisaPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCountry, setModalCountry] = useState('');

  const openModal = (country = '') => {
    setModalCountry(country);
    setModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="visapage">
      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        prefilledCountry={modalCountry}
        prefilledService="Visa Services"
      />

      {/* Hero Section */}
      <section className="visapage__hero">
        <div className="visapage__hero-bg-wrap">
          <img
            src="/images/hero_dubai_1774589057519.png"
            alt="Visa Services"
            className="visapage__hero-img"
          />
          <div className="visapage__hero-overlay" />
        </div>
        <div className="visapage__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="visapage__hero-tag">✈ GLOBAL REACH</span>
            <h1 className="visapage__hero-title">
              Expert<br />Visa Services
            </h1>
            <p className="visapage__hero-desc">
              Your gateway to the world. End-to-end visa assistance for 27+ countries — smooth, reliable, and stress-free.
            </p>
            <button className="visapage__hero-cta" onClick={() => openModal()}>
              <FiPhone size={16} /> Talk to an Expert
            </button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="visapage__stats-bar">
          {stats.map((s, i) => (
            <motion.div
              className="visapage__stat"
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
            >
              <span className="visapage__stat-value">{s.value}</span>
              <span className="visapage__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="visapage__categories">
        <div className="visapage__container">
          <div className="visapage__section-header">
            <span className="visapage__section-badge">OUR SERVICES</span>
            <h2 className="visapage__section-title">Visa Categories</h2>
            <p className="visapage__section-subtitle">Comprehensive solutions tailored to your purpose of travel</p>
          </div>
          <div className="visapage__cat-grid">
            {visaCategories.map((cat, idx) => (
              <motion.div
                className="visapage__cat-card"
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="visapage__cat-icon">{cat.icon}</div>
                <h3 className="visapage__cat-title">{cat.title}</h3>
                <p className="visapage__cat-desc">{cat.desc}</p>
                <ul className="visapage__cat-features">
                  {cat.features.map((f) => (
                    <li key={f}>
                      <FiCheckCircle size={14} className="visapage__cat-check" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="visapage__countries">
        <div className="visapage__container">
          <div className="visapage__section-header">
            <span className="visapage__section-badge">DESTINATIONS</span>
            <h2 className="visapage__section-title">Countries We Serve</h2>
            <p className="visapage__section-subtitle">Expert processing for top global destinations</p>
          </div>

          <div className="visapage__country-grid">
            {visaCountries.map((country, idx) => (
              <motion.div
                className="visapage__country-card"
                key={country}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => openModal(country)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openModal(country)}
              >
                <span className="visapage__country-flag">
                  {countryFlags[country] ?? '🌍'}
                </span>
                <span className="visapage__country-name">{country}</span>
                <FiArrowRight className="visapage__country-arrow" />
              </motion.div>
            ))}
          </div>

          {/* Docs CTA */}
          <motion.div
            className="visapage__docs-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="visapage__docs-content">
              <h3 className="visapage__docs-title">Not sure what documents you need?</h3>
              <p className="visapage__docs-desc">
                Every country has specific requirements. Contact our Visa Specialists to get a detailed
                checklist and current processing times for your destination.
              </p>
            </div>
            <button className="visapage__docs-btn" onClick={() => openModal()}>
              <FiPhone size={16} /> Talk to an Expert <FiArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <WhyUs />
      <CTABanner />
    </div>
  );
};

export default VisaPage;
