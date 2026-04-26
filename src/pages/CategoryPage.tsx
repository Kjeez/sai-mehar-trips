import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { getCategoryPackages, destinationsData } from '../data/packagesData';
import PackageCard from '../components/PackageCard';
import PageTransition from '../components/PageTransition';
import './CategoryPage.css';

const CategoryPage = () => {
  const { slug } = useParams();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formStatus, setFormStatus] = useState('');
  
  // Format slug back to display title
  const title = slug 
    ? slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Trips';
    
  const packages = getCategoryPackages(slug || '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/request-callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormStatus('submitted');
        setFormData({ name: '', email: '', phone: '' });
        setTimeout(() => setFormStatus(''), 3000);
      } else {
        setFormStatus('Error sending message.');
      }
    } catch (err) {
      setFormStatus('Server error.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Use an appropriate hero image based on slug
  let heroImg = '/images/hero_mountain.png'; // default
  if (slug === 'international-trips') heroImg = '/images/hero_dubai_1774589057519.png';
  if (slug === 'domestic-trips') heroImg = '/images/dest_srilanka_1774589206836.png'; // placeholder
  if (slug === 'cruises') heroImg = '/images/places/maldives.jpg';

  return (
    <PageTransition>
      <div className="categorypage">
        {/* Hero Section */}
        <section className="category__hero">
          <div className="category__hero-bg">
            <img src={heroImg} alt={title} className="category__hero-img" />
            <div className="category__hero-overlay" />
          </div>
          
          <div className="category__hero-content">
            <div className="category__hero-text">
              <h1 className="category__hero-title">{title}</h1>
              <p className="category__hero-desc">
                Journey across borders to exotic destinations and immerse yourself in diverse cultures. 
                Global adventures and memories await you with our curated {title.toLowerCase()} packages.
              </p>
            </div>
            
            <div className="category__form-card">
              <div className="category__form-header">
                <span className="category__form-badge">Need support?</span>
                <h3 className="category__form-title">Our team will call you.</h3>
              </div>
              
              <form className="category__form" onSubmit={handleSubmit}>
                <div className="category__form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter Your Name" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                  <FiUser />
                </div>
                <div className="category__form-group">
                  <label>Gmail id</label>
                  <input type="email" placeholder="Enter Your Email Id" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <FiMail />
                </div>
                <div className="category__form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter Your Phone Number" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                  <FiPhone />
                </div>
                <button type="submit" className="category__form-submit">
                  {formStatus === 'Sending...' ? 'Sending...' : 'Submit'}
                </button>
                {formStatus === 'submitted' && (
                  <p className="category__success-msg">Thank you! We will contact you soon.</p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Optional Destinations Row (Similar to TripHunter reference) */}
        {(slug === 'international-trips' || slug === 'domestic-trips' || slug === 'sai-mehar-specials') && (
          <section className="category__section" style={{ paddingTop: '80px', paddingBottom: '20px' }}>
            <h2 className="category__section-title">All {title} Destinations</h2>
            <div className="category__destinations" style={{ display: 'flex', overflowX: 'auto', gap: '20px', paddingBottom: '20px' }}>
              {destinationsData.map((dest) => (
                <Link to={`/destination/${dest.slug}`} key={dest.slug} style={{ display: "flex", flexDirection: "column", alignItems: "center", textDecoration: "none", minWidth: "120px" }}>
                  <img src={dest.heroImage} alt={dest.name} style={{ width: "120px", height: "120px", borderRadius: "50%", objectFit: "cover", marginBottom: "15px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }} />
                  <span style={{ fontWeight: "700", color: "var(--primary-dark)" }}>{dest.name}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Packages Grid */}
        <section className="category__section">
          <h2 className="category__section-title">Best {title} Packages</h2>
          {packages.length > 0 ? (
            <div className="category__pkg-grid">
              {packages.map((pkg) => (
                <Link to={`/package/${pkg.id}`} key={pkg.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <PackageCard 
                    image={pkg.image}
                    title={pkg.title}
                    duration={pkg.duration}
                    price={pkg.price}
                    priceNote={pkg.priceNote}
                    included={pkg.included}
                    imageFit={slug === 'cruises' ? 'contain' : 'cover'}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p>No packages found for this category currently.</p>
          )}
        </section>

      </div>
    </PageTransition>
  );
};

export default CategoryPage;
