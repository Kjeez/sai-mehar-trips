import { motion } from 'framer-motion';
import { FiMapPin, FiUsers, FiGlobe, FiAward } from 'react-icons/fi';
import './AboutPage.css';

const stats = [
  { icon: <FiUsers size={24} />, value: '5,000+', label: 'Happy Travelers' },
  { icon: <FiGlobe size={24} />, value: '50+', label: 'Destinations' },
  { icon: <FiMapPin size={24} />, value: '200+', label: 'Tours Completed' },
  { icon: <FiAward size={24} />, value: '100%', label: 'Satisfaction' },
];

import PageTransition from '../components/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition>
      <div className="about-page">
        {/* Hero */}
        <div className="about-page__hero">
          <div className="about-page__hero-overlay" />
          <img src="/images/hero_singapore_1774589129848.png" alt="About" className="about-page__hero-img" />
          <div className="about-page__hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              ABOUT US
            </motion.h1>
            <p>Home / About Us</p>
          </div>
        </div>

        {/* Intro */}
        <section className="about-page__intro">
          <div className="about-page__container">
            <motion.div
              className="about-page__intro-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>We Are <span className="about-page__brand">Sai Mehar Trips Pvt Ltd</span></h2>
              <p>
                We're a passionate team of travel enthusiasts dedicated to crafting
                unforgettable journeys. From international festivals to luxury escapes,
                domestic pilgrimages to adventure holidays — we make every trip a
                memory for life.
              </p>
              <p>
                As many itineraries and options as you like and as many destinations as you like.
                Whether it's your honeymoon, a family vacation, or a solo adventure,
                we handle everything — visas, flights, hotels, transfers, and tours —
                so you can focus on the experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-page__stats">
          <div className="about-page__container">
            <div className="about-page__stats-grid">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="about-page__stat"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="about-page__stat-icon">{s.icon}</div>
                  <span className="about-page__stat-value">{s.value}</span>
                  <span className="about-page__stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="about-page__mission">
          <div className="about-page__container">
            <div className="about-page__mission-grid">
              <motion.div
                className="about-page__mission-img-wrap"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img src="/images/hero_dubai_1774589057519.png" alt="Our Mission" className="about-page__mission-img" />
              </motion.div>
              <motion.div
                className="about-page__mission-text"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3>Our Mission</h3>
                <p>
                  To make world-class travel accessible, enjoyable, and stress-free
                  for every Indian traveler. We believe that travel transforms lives,
                  broadens perspectives, and creates bonds that last a lifetime.
                </p>
                <p>
                  We work tirelessly to curate the best deals, partnerships,
                  and experiences so that every journey with Sai Mehar Trips Pvt Ltd
                  exceeds expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="about-page__why">
          <div className="about-page__container">
            <motion.h3
              className="about-page__section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Sai Mehar Trips Pvt Ltd?
            </motion.h3>
            <div className="about-page__why-grid">
              {[
                { title: 'Expert Planning', desc: 'Our team designs trips that balance adventure, comfort, and local experiences. Every journey is planned with care.' },
                { title: 'Best Prices', desc: 'We negotiate the best rates with hotels, airlines, and tour operators to bring you unbeatable value.' },
                { title: 'Hassle-Free', desc: 'We handle visas, flights, hotels, transfers, and tours. You just pack your bags and enjoy.' },
                { title: '24/7 Support', desc: 'Our dedicated support team is always available during your trip to help with anything you need.' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="about-page__why-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default AboutPage;
