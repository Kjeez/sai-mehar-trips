import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiPackage, FiCalendar, FiPhone, FiArrowRight } from 'react-icons/fi';
import { internationalPackages, destinationsData } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import './DestinationPage.css';

import PageTransition from '../components/PageTransition';
import { useCallbackModal } from '../contexts/CallbackModalContext';

const DestinationPage = () => {
  const { openModal } = useCallbackModal();
  const { slug } = useParams<{ slug: string }>();
  const [showFullDesc, setShowFullDesc] = useState(false);

  const destination = destinationsData.find((d) => d.slug === slug);
  const packages = internationalPackages.filter((p) => p.destination === slug);

  if (!destination) {
    return (
      <div className="destpage__notfound">
        <h2>Destination not found</h2>
        <p>We couldn't find packages for this destination.</p>
        <Link to="/" className="destpage__back-link">← Back to Home</Link>
      </div>
    );
  }

  // Compute stats
  const totalPackages = packages.length;
  const prices = packages.map((p) => {
    const num = parseInt(p.price.replace(/[^\d]/g, ''));
    return isNaN(num) ? 0 : num;
  }).filter((n) => n > 0);
  const startingPrice = prices.length > 0 ? `₹${Math.min(...prices).toLocaleString('en-IN')}` : 'On Request';
  const durations = packages.map((p) => p.duration).filter((d) => d.includes('N/'));

  return (
    <PageTransition>
      <div className="destpage">
        {/* ── Hero Banner ── */}
        <section className="destpage__hero">
          <div
            className="destpage__hero-bg"
            style={{ backgroundImage: `url(${destination.heroImage})` }}
          />
          <div className="destpage__hero-overlay" />

          <div className="destpage__hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="destpage__hero-tagline">{destination.tagline}</span>
              <h1 className="destpage__hero-title">
                {destination.name} Holiday Packages
              </h1>

              <motion.a
                href="#packages"
                className="destpage__hero-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sai Mehar Specials <FiArrowRight style={{ marginLeft: 8 }} />
              </motion.a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              className="destpage__stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="destpage__stat">
                <FiPackage size={20} />
                <div>
                  <span className="destpage__stat-value">{totalPackages}</span>
                  <span className="destpage__stat-label">Packages</span>
                </div>
              </div>
              <div className="destpage__stat-divider" />
              <div className="destpage__stat">
                <FiPackage size={20} />
                <div>
                  <span className="destpage__stat-value">{startingPrice}</span>
                  <span className="destpage__stat-label">Starting Price</span>
                </div>
              </div>
              <div className="destpage__stat-divider" />
              <div className="destpage__stat">
                <FiCalendar size={20} />
                <div>
                  <span className="destpage__stat-value">{durations[0] || 'Flexible'}</span>
                  <span className="destpage__stat-label">Duration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── About Section ── */}
        <section className="destpage__about">
          <div className="destpage__about-container">
            <motion.h2
              className="destpage__section-title"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About {destination.name} Holiday Packages
            </motion.h2>
            <motion.p
              className={`destpage__about-text ${showFullDesc ? 'destpage__about-text--expanded' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore the best {destination.name} tour packages with Sai Mehar Trips Pvt Ltd.
              We offer carefully curated {destination.name.toLowerCase()} holiday packages
              that include comfortable stays, delicious meals, city tours, and much more.
              {' '}{destination.description}
            </motion.p>
            {destination.description.length > 100 && (
              <button
                className="destpage__readmore"
                onClick={() => setShowFullDesc(!showFullDesc)}
              >
                {showFullDesc ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        </section>

        {/* ── Packages Grid ── */}
        <section className="destpage__packages" id="packages">
          <div className="destpage__packages-container">
            <motion.h2
              className="destpage__section-title"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {destination.name} Holiday Packages
            </motion.h2>

            {packages.length > 0 ? (
              <div className="destpage__packages-grid">
                {packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link to={`/package/${pkg.id}`} style={{ textDecoration: 'none' }}>
                      <PackageCard
                        image={pkg.image}
                        title={pkg.title}
                        duration={pkg.duration}
                        price={pkg.price}
                        priceNote={pkg.priceNote}
                        included={pkg.included}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="destpage__no-packages">
                <FiMapPin size={48} />
                <h3>Coming Soon!</h3>
                <p>We're preparing amazing packages for {destination.name}. Contact us for custom quotes.</p>
                <button onClick={() => openModal(destination.name)} className="destpage__contact-btn" style={{cursor: 'pointer', border: 'none'}}>
                  <FiPhone size={16} /> Request Callback
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── Why Us ── */}
        <WhyUs />

        {/* ── CTA Banner ── */}
        <CTABanner />
      </div>
    </PageTransition>
  );
};

export default DestinationPage;
