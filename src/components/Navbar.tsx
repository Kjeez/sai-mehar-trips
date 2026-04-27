import { useState, useEffect } from 'react';
import { FiSearch, FiPhone, FiMail, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { menuCategories, internationalPackages, domesticPackages } from '../data/packagesData';
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
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

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const searchResults = searchQuery.trim() === '' ? [] : [
    ...destinations.filter(d => d.name.toLowerCase().includes(searchQuery.toLowerCase())).map(d => ({ type: 'Destination', name: d.name, link: `/destination/${d.name.toLowerCase().replace(/ /g, '-')}` })),
    ...internationalPackages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ type: 'Package', name: p.title, link: `/package/${p.id}` })),
    ...domesticPackages.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map(p => ({ type: 'Package', name: p.title, link: `/package/${p.id}` }))
  ].slice(0, 6);

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
              <a href="tel:+917531868691" className="navbar__contact-item">
                <FiPhone size={14} />
                <span>(+91) 7531868691</span>
              </a>
              <a href="mailto:travel@saimehartrips.com" className="navbar__contact-item">
                <FiMail size={14} />
                <span>travel@saimehartrips.com</span>
              </a>
            </div>
          </div>

          <div className="navbar__right">
            
            <div className="navbar__search-wrapper">
              <button className="navbar__icon-btn" aria-label="Search" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                {isSearchOpen ? <FiSearch size={20} color="#e74c3c" /> : <FiSearch size={20} />}
              </button>
              
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div 
                    className="navbar__search-dropdown"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <input 
                      type="text" 
                      placeholder="Search destinations, packages..." 
                      value={searchQuery}
                      onChange={handleSearch}
                      autoFocus
                      className="navbar__search-input"
                    />
                    {searchQuery && searchResults.length > 0 && (
                      <div className="navbar__search-results">
                        {searchResults.map((result, idx) => (
                          <div 
                            key={idx} 
                            className="navbar__search-result-item"
                            onClick={() => {
                              navigate(result.link);
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                          >
                            <span className="search-type">{result.type}</span>
                            <span className="search-name">{result.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {searchQuery && searchResults.length === 0 && (
                      <div className="navbar__search-results no-results">
                        No results found
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <span className="navbar__divider">|</span>
            <a href="tel:+917531868691" className="navbar__icon-btn navbar__phone-btn-mobile">
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
                          <Link key={d.name} to={`/destination/${d.name.toLowerCase().replace(/ /g, '-')}`} className="fullmenu__dest-item" onClick={() => setIsMenuOpen(false)}>
                            <div className="fullmenu__dest-img-wrap">
                              <img src={d.image} alt={d.name} className="fullmenu__dest-img" />
                            </div>
                            <span className="fullmenu__dest-name">{d.name}</span>
                          </Link>
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
                          <Link key={c.title} to={`/category/${c.title.toLowerCase().replace(/ /g, '-')}`} className="fullmenu__cat-card" onClick={() => setIsMenuOpen(false)}>
                            <img src={c.image} alt={c.title} className="fullmenu__cat-img" />
                            <span className="fullmenu__cat-title">{c.title}</span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Links */}
              <Link to="/blogs" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link to="/visa" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Visa Services</Link>
              <Link to="/visa#passport" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Passport Services</Link>
              <Link to="/visa#airfare" className="fullmenu__link" onClick={() => setIsMenuOpen(false)}>Airfare Services</Link>
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
