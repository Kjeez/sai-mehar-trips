import { FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src="/images/logo.png" alt="Sai Mehar Trips" className="footer__logo-img" />
              <span className="footer__logo-text">Sai Mehar Trips Pvt Ltd</span>
            </div>
            <p className="footer__desc">
              Welcome to Sai Mehar Trips Pvt Ltd — your key to amazing international destinations and experiences.
              As many itineraries and options as you like and as many destinations as you like.
            </p>
            <div className="footer__contact-list">
              <a href="tel:+919876543210" className="footer__contact-link">
                <FiPhone size={14} /> +91 9876543210
              </a>
              <a href="mailto:bookings@saimahartrips.in" className="footer__contact-link">
                <FiMail size={14} /> bookings@saimahartrips.in
              </a>
              <span className="footer__contact-link">
                <FiMapPin size={14} /> India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Quick Links</h4>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/contact" className="footer__link">Contact Us</Link>
            <Link to="/blogs" className="footer__link">Blogs</Link>
            <a href="#privacy" className="footer__link">Privacy Policy</a>
            <a href="#payment" className="footer__link">Payment Policy</a>
            <a href="#terms" className="footer__link">Terms & Conditions</a>
          </div>

          {/* Trip Category */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Trip Categories</h4>
            <a href="#specials" className="footer__link">Sai Mehar Specials</a>
            <a href="#international" className="footer__link">International Trips</a>
            <a href="#domestic" className="footer__link">Domestic Trips</a>
            <a href="#pilgrimage" className="footer__link">Pilgrimage Tours</a>
            <a href="#custom" className="footer__link">Custom Trips</a>
          </div>

          {/* Services */}
          <div className="footer__links-col">
            <h4 className="footer__col-title">Services</h4>
            <Link to="/visa" className="footer__link">Visa Services</Link>
            <a href="/#services" className="footer__link">Passport Services</a>
            <a href="#airfare" className="footer__link">Airfare</a>
            <a href="#honeymoon" className="footer__link">Honeymoon Packages</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__brand-text">SAI MEHAR TRIPS PVT LTD</span>
          <span className="footer__copyright">© 2026 Sai Mehar Trips Pvt Ltd. All rights reserved.</span>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook"><FiFacebook size={18} /></a>
            <span className="footer__social-divider">|</span>
            <a href="#" className="footer__social-link" aria-label="Instagram"><FiInstagram size={18} /></a>
            <span className="footer__social-divider">|</span>
            <a href="#" className="footer__social-link" aria-label="LinkedIn"><FiLinkedin size={18} /></a>
            <span className="footer__social-divider">|</span>
            <a href="#" className="footer__social-link" aria-label="YouTube"><FiYoutube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
