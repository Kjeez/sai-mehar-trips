import { useState } from 'react';
import type { FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiChevronDown, FiChevronLeft, FiChevronRight, FiCalendar,
  FiMapPin, FiGlobe, FiCheck, FiX, FiPhone,
} from 'react-icons/fi';
import { internationalPackages, pilgrimagePackages, domesticPackages } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import WhyUs from '../components/WhyUs';
import './PackageDetailPage.css';

import PageTransition from '../components/PageTransition';
import { useCallbackModal } from '../contexts/CallbackModalContext';

const PackageDetailPage = () => {
  const { openModal } = useCallbackModal();
  const { id } = useParams<{ id: string }>();
  const pkg = internationalPackages.find((p) => p.id === id) || pilgrimagePackages.find((p) => p.id === id) || domesticPackages.find((p) => p.id === id);
  const isPilgrimage = pilgrimagePackages.some((p) => p.id === id);
  const isDomestic = domesticPackages.some((p) => p.id === id);
  const [currentImg, setCurrentImg] = useState(0);
  const [openDay, setOpenDay] = useState<number | null>(0);

  // Quote Form State
  const [quoteData, setQuoteData] = useState({ name: '', phone: '', email: '', package: '' });
  const [quoteStatus, setQuoteStatus] = useState('');

  const handleQuoteSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setQuoteStatus('Sending...');
    try {
      const res = await fetch('/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...quoteData, package: pkg?.title || '' }),
      });
      if (res.ok) {
        setQuoteStatus('Quote requested!');
        setQuoteData({ name: '', phone: '', email: '', package: '' });
      } else {
        setQuoteStatus('Error sending request.');
      }
    } catch (err) {
      setQuoteStatus('Server error.');
    }
  };

  if (!pkg) {
    return (
      <div className="pkgdetail__notfound">
        <h2>Package not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  // Build a gallery from available images
  const getRelevantImages = () => {
    // A mapping of keywords to available images
    const imageBank = [
      { keywords: ['phuket', 'krabi', 'thailand', 'bangkok', 'pattaya'], img: '/images/dest_thailand_1774589225140.png' },
      { keywords: ['phuket', 'krabi', 'thailand'], img: '/images/pkg_phuket_1774590895663.png' },
      { keywords: ['bangkok', 'pattaya', 'thailand'], img: '/images/pkg_bangkok_1774590915952.png' },
      { keywords: ['thailand'], img: '/images/places/thailand.jpg' },
      { keywords: ['bangkok'], img: '/images/places/bangkok.jpg' },
      { keywords: ['bangkok'], img: '/images/places/bangkok (2).jpg' },
      { keywords: ['maldives'], img: '/images/places/maldives.jpg' },
      { keywords: ['maldives'], img: '/images/pkg_maldives_1774590938672.png' },
      { keywords: ['bali', 'indonesia'], img: '/images/dest_bali_1774589152092.png' },
      { keywords: ['bali', 'indonesia'], img: '/images/places/bali.jpg' },
      { keywords: ['srilanka', 'colombo'], img: '/images/dest_srilanka_1774589206836.png' },
      { keywords: ['singapore'], img: '/images/dest_singapore_1774589168899.png' },
      { keywords: ['singapore'], img: '/images/places/singapore.jpg' },
      { keywords: ['singapore'], img: '/images/hero_singapore_1774589129848.png' },
      { keywords: ['newzealand', 'auckland'], img: '/images/pkg_newzealand_1774590964653.png' },
      { keywords: ['newzealand'], img: '/images/pkg_newzealand.png' },
      
      { keywords: ['kashmir', 'srinagar', 'gulmarg'], img: '/images/places/kashmir.jpg' },
      { keywords: ['kashmir'], img: '/images/pkg_kashmir.png' },
      { keywords: ['sikkim', 'darjeeling', 'gangtok'], img: '/images/pkg_sikkim.png' },
      { keywords: ['kerala', 'munnar', 'cochin'], img: '/images/pkg_kerala.png' },
      { keywords: ['goa'], img: '/images/places/goa.jpg' },
      { keywords: ['goa'], img: '/images/pkg_goa.png' },
      { keywords: ['ooty', 'kodaikanal'], img: '/images/places/kodaikanal.jpg' },
      { keywords: ['ooty'], img: '/images/pkg_ooty.png' },
      { keywords: ['ladakh', 'leh'], img: '/images/places/ladakh.jpg' },
      { keywords: ['ladakh'], img: '/images/pkg_ladakh.png' },
      { keywords: ['andaman', 'port blair'], img: '/images/places/andaman.jpg' },
      { keywords: ['andaman'], img: '/images/pkg_andaman.png' },
      { keywords: ['udaipur', 'mount abu'], img: '/images/pkg_udaipur.png' },
      { keywords: ['jodhpur', 'jaisalmer'], img: '/images/places/jaislmer.jpg' },
      { keywords: ['jaisalmer'], img: '/images/pkg_jaisalmer.png' },
      { keywords: ['manali'], img: '/images/places/manali.jpg' },
      { keywords: ['manali'], img: '/images/pkg_manali.png' },

      { keywords: ['baidyanath', 'deoghar'], img: '/images/places/pkg_baidyanath.png' },
      { keywords: ['somnath', 'dwarka'], img: '/images/places/pkg_somnath.png' },
      { keywords: ['ayodhya', 'kashi', 'varanasi'], img: '/images/places/pkg_ayodhya.png' },
      { keywords: ['rameshwaram', 'kanyakumari', 'madurai'], img: '/images/places/pkg_rameshwaram.png' },
      { keywords: ['shirdi'], img: '/images/places/pkg_shirdi.png' },
      { keywords: ['mallikarjuna'], img: '/images/places/pkg_mallikarjuna.png' },
      { keywords: ['mahakaleshwar'], img: '/images/places/pkg_mahakaleshwar.png' },
      { keywords: ['pilgrimage', 'temple'], img: '/images/pkg_temple.png' },
    ];

    const searchStr = `${pkg.title} ${pkg.id} ${'destination' in pkg ? pkg.destination : ''}`.toLowerCase();
    
    const matchedImages = imageBank
      .filter(item => item.keywords.some(kw => searchStr.includes(kw)))
      .map(item => item.img);

    // If no specific matches, add some generic beautiful ones based on category
    if (matchedImages.length === 0) {
      if (isPilgrimage) {
        matchedImages.push('/images/pkg_temple.png');
      } else if (isDomestic) {
        matchedImages.push('/images/places/kashmir.jpg', '/images/places/andaman.jpg');
      } else {
        matchedImages.push('/images/hero_dubai_1774589057519.png', '/images/places/maldives.jpg');
      }
    }

    return Array.from(new Set([pkg.image, ...matchedImages])).slice(0, 5);
  };

  const gallery = getRelevantImages();

  const allSimilar = isPilgrimage ? pilgrimagePackages : isDomestic ? domesticPackages : internationalPackages;
  const similarPkgs = allSimilar.filter((p) => p.id !== pkg.id).slice(0, 4);

  return (
    <PageTransition>
      <div className="pkgdetail">
        {/* ── Image Gallery ── */}
        <section className="pkgdetail__gallery">
          <div className="pkgdetail__gallery-main">
            <img src={gallery[currentImg]} alt={pkg.title} />
            <button className="pkgdetail__gallery-nav pkgdetail__gallery-nav--left" onClick={() => setCurrentImg((p) => (p - 1 + gallery.length) % gallery.length)}>
              <FiChevronLeft size={22} />
            </button>
            <button className="pkgdetail__gallery-nav pkgdetail__gallery-nav--right" onClick={() => setCurrentImg((p) => (p + 1) % gallery.length)}>
              <FiChevronRight size={22} />
            </button>
          </div>
          <div className="pkgdetail__gallery-thumbs">
            {gallery.map((img, i) => (
              <button
                key={i}
                className={`pkgdetail__thumb ${i === currentImg ? 'pkgdetail__thumb--active' : ''}`}
                onClick={() => setCurrentImg(i)}
              >
                <img src={img} alt={`Thumb ${i + 1}`} />
              </button>
            ))}
          </div>
        </section>

        {/* ── Content ── */}
        <div className="pkgdetail__layout">
          {/* Left Content */}
          <div className="pkgdetail__content">
            <motion.h1
              className="pkgdetail__title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {pkg.title}
            </motion.h1>

            <div className="pkgdetail__meta">
              <span className="pkgdetail__meta-item"><FiCalendar size={15} /> {pkg.duration}</span>
              <span className="pkgdetail__meta-item"><FiMapPin size={15} /> {isDomestic ? 'India' : pkg.id.includes('singapore') ? 'Singapore' : pkg.id.includes('phuket') ? 'Thailand' : pkg.id.includes('bangkok') ? 'Thailand' : pkg.id.includes('bali') ? 'Indonesia' : pkg.id.includes('maldives') ? 'Maldives' : pkg.id.includes('srilanka') ? 'Sri Lanka' : pkg.id.includes('newzealand') ? 'New Zealand' : 'International'}</span>
              <span className="pkgdetail__meta-item"><FiGlobe size={15} /> {isPilgrimage ? 'Pilgrimage Tour' : isDomestic ? 'Domestic Trip' : 'International Tour'}</span>
            </div>

            {/* Overview */}
            <div className="pkgdetail__section">
              <h2>Overview</h2>
              {pkg.note && (
                <p className="pkgdetail__overview-text">{pkg.note}</p>
              )}
              <div className="pkgdetail__taglines">
                <p><strong>We lovingly create itineraries based on customer preferences.</strong></p>
                <p>As many itineraries and options as you like and as many destinations as you like</p>
              </div>
            </div>

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <div className="pkgdetail__section">
                <h2>Itinerary</h2>
                <div className="pkgdetail__itinerary">
                  {pkg.itinerary.map((item, i) => (
                    <div key={i} className={`pkgdetail__day ${openDay === i ? 'pkgdetail__day--open' : ''}`}>
                      <button className="pkgdetail__day-toggle" onClick={() => setOpenDay(openDay === i ? null : i)}>
                        <span className="pkgdetail__day-label">{item.day}</span>
                        <FiChevronDown
                          size={18}
                          className={`pkgdetail__day-chevron ${openDay === i ? 'pkgdetail__day-chevron--open' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openDay === i && (
                          <motion.div
                            className="pkgdetail__day-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p>{item.description}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Inclusions & Exclusions */}
            <div className="pkgdetail__section">
              <h2>Inclusions & Exclusions</h2>
              <div className="pkgdetail__incl-grid">
                <div className="pkgdetail__incl-col">
                  <h3 className="pkgdetail__incl-heading pkgdetail__incl-heading--green">Inclusions</h3>
                  <ul className="pkgdetail__incl-list">
                    {pkg.included?.map((item, i) => (
                      <li key={i}>
                        <FiCheck size={14} className="pkgdetail__incl-icon pkgdetail__incl-icon--green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pkgdetail__incl-col">
                  <h3 className="pkgdetail__incl-heading pkgdetail__incl-heading--red">Exclusions</h3>
                  <ul className="pkgdetail__incl-list">
                    <li><FiX size={14} className="pkgdetail__incl-icon pkgdetail__incl-icon--red" /> Anything not mentioned in inclusions</li>
                    <li><FiX size={14} className="pkgdetail__incl-icon pkgdetail__incl-icon--red" /> Personal expenses / shopping</li>
                    <li><FiX size={14} className="pkgdetail__incl-icon pkgdetail__incl-icon--red" /> Optional activities payable directly</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cancellation */}
            <div className="pkgdetail__section">
              <h2>Cancellation Policy</h2>
              <ul className="pkgdetail__policy-list">
                <li>Free cancellation up to 30 days before departure</li>
                <li>50% refund for cancellation 15–30 days before</li>
                <li>No refund for cancellation within 15 days of departure</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="pkgdetail__sidebar">
            <div className="pkgdetail__sidebar-card">
              {pkg.price ? (
                <>
                  <span className="pkgdetail__sidebar-label">Starting from</span>
                  <span className="pkgdetail__sidebar-price">{pkg.price}</span>
                  <span className="pkgdetail__sidebar-note">{pkg.priceNote}</span>
                </>
              ) : (
                <span className="pkgdetail__sidebar-price">Price on Demand</span>
              )}

              <div className="pkgdetail__sidebar-actions">
                <button onClick={() => openModal(pkg.title)} className="pkgdetail__sidebar-btn pkgdetail__sidebar-btn--primary" style={{cursor: 'pointer', border: 'none', width: '100%'}}>
                  <FiPhone size={16} /> Request Callback
                </button>
                <a href="https://wa.me/919876543210" className="pkgdetail__sidebar-btn pkgdetail__sidebar-btn--secondary">
                  WhatsApp Us
                </a>
              </div>

              <div className="pkgdetail__sidebar-info">
                <div className="pkgdetail__sidebar-info-item">
                  <FiCalendar size={14} />
                  <span>{pkg.duration}</span>
                </div>
                <div className="pkgdetail__sidebar-info-item">
                  <FiGlobe size={14} />
                  <span>{isPilgrimage ? 'Pilgrimage Tour' : isDomestic ? 'Domestic Trip' : 'International Trip'}</span>
                </div>
              </div>
            </div>

            <div className="pkgdetail__sidebar-card pkgdetail__sidebar-card--quote">
              <h4>Get Your Dream Trip Quote</h4>
              <form className="pkgdetail__quote-form" onSubmit={handleQuoteSubmit}>
                <input type="text" placeholder="Your Name" required value={quoteData.name} onChange={(e) => setQuoteData({...quoteData, name: e.target.value})} />
                <input type="tel" placeholder="Phone Number" required value={quoteData.phone} onChange={(e) => setQuoteData({...quoteData, phone: e.target.value})} />
                <input type="email" placeholder="Email" required value={quoteData.email} onChange={(e) => setQuoteData({...quoteData, email: e.target.value})} />
                <button type="submit" className="pkgdetail__sidebar-btn pkgdetail__sidebar-btn--primary">
                  {quoteStatus ? quoteStatus : 'Get Quote'}
                </button>
              </form>
            </div>
          </aside>
        </div>

        {/* ── Similar Trips ── */}
        <section className="pkgdetail__similar">
          <div className="pkgdetail__similar-container">
            <h2>Similar Trips</h2>
            <div className="pkgdetail__similar-grid">
              {similarPkgs.map((p) => (
                <Link key={p.id} to={`/package/${p.id}`} style={{ textDecoration: 'none' }}>
                  <PackageCard
                    image={p.image}
                    title={p.title}
                    duration={p.duration}
                    price={p.price}
                    priceNote={p.priceNote}
                    included={p.included}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <WhyUs />
      </div>
    </PageTransition>
  );
};

export default PackageDetailPage;
