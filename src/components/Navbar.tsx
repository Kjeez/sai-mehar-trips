import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { menuCategories } from '../data/packagesData';
import './Navbar.css';

const destinations = [
  { name: 'Bali', image: '/images/dest_bali_1774589152092.png' },
  { name: 'Singapore', image: '/images/dest_singapore_1774589168899.png' },
  { name: 'Japan', image: '/images/dest_japan_1774589186858.png' },
  { name: 'Sri Lanka', image: '/images/dest_srilanka_1774589206836.png' },
  { name: 'Thailand', image: '/images/dest_thailand_1774589225140.png' },
  { name: 'Dubai', image: '/images/dest_dubai_1774589249274.png' },
  { name: 'USA', image: '/images/dest_usa_1774589265816.png' },
  { name: 'Vietnam', image: '/images/dest_vietnam_1774589284358.png' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const location = useLocation();
  const isSolidPage = location.pathname.startsWith('/package/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled || isSolidPage ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--menu-open' : ''}`}>
        <div className="navbar__container">
          <div className="navbar__left">
            <Link to="/" className="navbar__logo">
              <img src="/images/logo.png" alt="Sai Mehar Trips" className="navbar__logo-img" />
              <span className="navbar__logo-text">Sai Mehar Trips Pvt Ltd</span>
            </Link>
            <div className="navbar__contact-info">
              <a href="tel:+919876543210" className="navbar__contact-item">
                <FiPhone size={14} />
                <span>(+91) 9876543210</span>
              </a>
              <a href="mailto:bookings@saimahartrips.in" className="navbar__contact-item">
                <FiMail size={14} />
                <span>bookings@saimahartrips.in</span>
              </a>
            </div>
          </div>

          <div className="navbar__right">
            <a href="tel:+919876543210" className="navbar__phone-topbar">
              <FiPhone size={16} />
              <span>(+91) 9876543210</span>
            </a>
            <span className="navbar__divider">|</span>
            <button className="navbar__icon-btn" aria-label="Search">
              <FiSearch size={20} />
            </button>
            <span className="navbar__divider">|</span>
            <a href="tel:+919876543210" className="navbar__icon-btn navbar__phone-btn-mobile">
              <FiPhone size={20} />
            </a>
            <button
              className="navbar__menu-toggle"
              onClick={() => { setIsMenuOpen(!isMenuOpen); setExpandedSection(null); }}
            >
              {isMenuOpen ? (
                <span className="navbar__close-text">Close</span>
              ) : (
                <>
                  <span className="navbar__hamburger-icon">☰</span>
                  <span className="navbar__menu-text">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Page Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fullmenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="fullmenu__content">
              {/* Destinations */}
              <div className="fullmenu__section">
                <button
                  className="fullmenu__section-toggle"
                  onClick={() => toggleSection('destinations')}
                >
                  <span>Destinations</span>
                  {expandedSection === 'destinations' ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {expandedSection === 'destinations' && (
                    <motion.div
                      className="fullmenu__dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="fullmenu__dest-grid">
                        {destinations.map((d) => (
                          <a key={d.name} href={`#${d.name.toLowerCase()}`} className="fullmenu__dest-item" onClick={() => setIsMenuOpen(false)}>
                            <div className="fullmenu__dest-img-wrap">
                              <img src={d.image} alt={d.name} className="fullmenu__dest-img" />
                            </div>
                            <span className="fullmenu__dest-name">{d.name}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Categories */}
              <div className="fullmenu__section">
                <button
                  className="fullmenu__section-toggle"
                  onClick={() => toggleSection('categories')}
                >
                  <span>Categories</span>
                  {expandedSection === 'categories' ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {expandedSection === 'categories' && (
                    <motion.div
                      className="fullmenu__dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="fullmenu__cat-grid">
                        {menuCategories.map((c) => (
                          <a key={c.title} href="#" className="fullmenu__cat-card" onClick={() => setIsMenuOpen(false)}>
                            <img src={c.image} alt={c.title} className="fullmenu__cat-img" />
                            <span className="fullmenu__cat-title">{c.title}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Links */}
              <Link to="/blogs" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link to="/visa" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Visa Services</Link>
              <Link to="/passport" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Passport Services</Link>
              <Link to="/about" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/contact" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
              <a href="#privacy" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Privacy Policy</a>
              <a href="#payment" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Payment Policy</a>
              <a href="#terms" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Terms & Conditions</a>
            </div>

            {/* Social bar */}
            <div className="fullmenu__social">
              <a href="#" className="fullmenu__social-link"><FiFacebook size={16} /> Facebook</a>
              <span className="fullmenu__social-divider">|</span>
              <a href="#" className="fullmenu__social-link"><FiInstagram size={16} /> Instagram</a>
              <span className="fullmenu__social-divider">|</span>
              <a href="#" className="fullmenu__social-link"><FiLinkedin size={16} /> LinkedIn</a>
              <span className="fullmenu__social-divider">|</span>
              <a href="#" className="fullmenu__social-link"><FiYoutube size={16} /> YouTube</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
