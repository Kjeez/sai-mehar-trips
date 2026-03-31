import { motion } from 'framer-motion';
import { FiPhone, FiMapPin, FiSend, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import './ContactPage.css';

const faqs = [
  { q: 'What type of trips does Sai Mehar Trips Pvt Ltd offer?', a: 'We offer international holidays, domestic packages, pilgrimage tours, honeymoon packages, custom trips, and more across 50+ destinations worldwide.' },
  { q: 'Is Sai Mehar Trips Pvt Ltd a trusted travel company?', a: 'Yes! We are a trusted travel brand with hundreds of happy travelers. We prioritize transparency, safety, and unforgettable experiences.' },
  { q: 'Do you provide customized travel packages?', a: 'Absolutely! We specialize in customized itineraries tailored to your preferences, budget, and travel dates. Just tell us your dream destination.' },
  { q: 'Do you offer international holiday packages?', a: 'Yes, we offer packages to Singapore, Bali, Thailand, Maldives, Sri Lanka, Dubai, New Zealand, Europe, and many more destinations.' },
  { q: 'Can I book luxury holidays with Sai Mehar Trips Pvt Ltd?', a: 'Yes, we offer premium and luxury packages including 5-star stays, private tours, cruise holidays, and exclusive experiences.' },
  { q: 'How can I book a trip?', a: 'You can contact us via phone at +91 9876543210, email us at bookings@saimahartrips.in, or fill out the contact form on this page.' },
  { q: 'Do you provide support during the trip?', a: 'Yes, we offer 24/7 support during your trip. Our team is always available to assist you with any queries or changes needed.' },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="contact-page">
      {/* Hero Banner */}
      <div className="contact-page__hero">
        <div className="contact-page__hero-overlay" />
        <img src="/images/pkg_maldives.png" alt="Contact" className="contact-page__hero-img" />
        <div className="contact-page__hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            CONTACT US
          </motion.h1>
          <p>Home / Contact Us</p>
        </div>
      </div>

      {/* Contact Form + Info */}
      <section className="contact-page__main">
        <div className="contact-page__container">
          <div className="contact-page__grid">
            {/* Left - Info */}
            <motion.div
              className="contact-page__info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Contact Us :</h2>
              <p className="contact-page__info-desc">
                Get in touch with our travel experts and let us design a seamless, personalized experience just for you. Sai Mehar Trips Pvt Ltd helps you create memories for life.
              </p>
            </motion.div>

            {/* Right - Form */}
            <motion.form
              className="contact-page__form"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="contact-page__form-row">
                <div className="contact-page__field">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div className="contact-page__field">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter Your Last Name" />
                </div>
              </div>
              <div className="contact-page__field">
                <label>Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className="contact-page__field">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91" />
              </div>
              <div className="contact-page__field">
                <label>Leave Us a Message</label>
                <textarea rows={4} placeholder="Your message..." />
              </div>
              <button type="submit" className="contact-page__submit">Submit</button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-page__cards-section">
        <div className="contact-page__container">
          <div className="contact-page__cards">
            <motion.a
              href="mailto:bookings@saimahartrips.in"
              className="contact-page__card contact-page__card--email"
              whileHover={{ y: -4 }}
            >
              <div>
                <span className="contact-page__card-label">You can email us here</span>
                <span className="contact-page__card-value">bookings@saimahartrips.in</span>
              </div>
              <FiSend size={24} />
            </motion.a>
            <motion.a
              href="tel:+919876543210"
              className="contact-page__card contact-page__card--phone"
              whileHover={{ y: -4 }}
            >
              <span className="contact-page__card-label">Or give us a call</span>
              <span className="contact-page__card-value">+91 9876543210</span>
              <FiPhone size={24} />
            </motion.a>
          </div>
          <div className="contact-page__address">
            <FiMapPin size={16} />
            <span>India</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-page__faq">
        <div className="contact-page__container">
          <div className="contact-page__faq-grid">
            <motion.div
              className="contact-page__faq-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2>Frequently Asked Questions</h2>
              <p>Explore common questions about our travel services, destinations, booking process, and more. Still need help? Our team is just a call away.</p>
            </motion.div>
            <div className="contact-page__faq-list">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`contact-page__faq-item ${openFaq === i ? 'contact-page__faq-item--open' : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    className="contact-page__faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown
                      size={18}
                      className={`contact-page__faq-icon ${openFaq === i ? 'contact-page__faq-icon--open' : ''}`}
                    />
                  </button>
                  {openFaq === i && (
                    <motion.div
                      className="contact-page__faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
