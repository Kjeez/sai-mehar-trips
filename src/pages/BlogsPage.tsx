import { motion } from 'framer-motion';
import './BlogsPage.css';

const featuredPosts = [
  {
    id: 1,
    title: 'Complete Guide to Thailand: Everything You Need to Know Before Your Trip',
    excerpt: 'Planning a trip to Thailand? Here\'s your ultimate guide covering visas, best time to visit, must-see places, and insider tips from our travel experts.',
    image: '/images/dest_thailand_1774589225140.png',
    date: 'March 15, 2026',
    featured: true,
  },
  {
    id: 2,
    title: 'Maldives on a Budget: Is It Really Possible?',
    excerpt: 'Wondering if you can explore the Maldives without burning a hole in your pocket? We break down budget-friendly options for an unforgettable Maldives experience.',
    image: '/images/pkg_maldives.png',
    date: 'March 10, 2026',
  },
  {
    id: 3,
    title: 'Bali Beyond Beaches: Hidden Gems You Must Explore',
    excerpt: 'Looking for authentic experiences in Bali beyond the beaches? Explore hidden waterfalls, sacred temples, and local secrets that most travelers miss.',
    image: '/images/dest_bali_1774589152092.png',
    date: 'March 5, 2026',
  },
];

const allPosts = [
  {
    id: 4,
    title: 'Top 6 Pilgrimage Destinations in India for 2026',
    excerpt: 'From the sacred temples of Ayodhya to the divine shores of Rameshwaram — discover the most visited pilgrimage destinations.',
    image: '/images/pkg_temple.png',
    date: 'February 28, 2026',
  },
  {
    id: 5,
    title: 'Why Book Your Next Trip with Sai Mehar Trips Pvt Ltd?',
    excerpt: 'The secrets behind hassle-free travel. Learn what sets us apart from other travel agencies and why thousands choose us.',
    image: '/images/hero_dubai_1774589057519.png',
    date: 'February 20, 2026',
  },
  {
    id: 6,
    title: 'Top Festivals Around the World You Must Experience',
    excerpt: 'The most celebrated festivals from across the globe. From Tomorrowland to Songkran — plan your next festival trip.',
    image: '/images/hero_festival_1774589112439.png',
    date: 'February 14, 2026',
  },
  {
    id: 7,
    title: 'Kashmir in Winter: A Complete Travel Guide',
    excerpt: 'Dreaming of snow-capped mountains and frozen lakes? Here\'s everything you need to plan your perfect Kashmir winter escape.',
    image: '/images/pkg_kashmir.png',
    date: 'February 8, 2026',
  },
];

const BlogsPage = () => {
  return (
    <div className="blogs-page">
      {/* Hero */}
      <div className="blogs-page__hero">
        <div className="blogs-page__hero-overlay" />
        <img src="/images/hero_aurora_1774589075396.png" alt="Blogs" className="blogs-page__hero-img" />
        <div className="blogs-page__hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            OUR BLOGS
          </motion.h1>
          <p>Home / Blogs</p>
        </div>
      </div>

      {/* Featured Posts */}
      <section className="blogs-page__featured">
        <div className="blogs-page__container">
          <div className="blogs-page__featured-grid">
            {/* Main featured */}
            <motion.article
              className="blogs-page__featured-main"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src={featuredPosts[0].image} alt={featuredPosts[0].title} />
              <div className="blogs-page__featured-content">
                <span className="blogs-page__date">{featuredPosts[0].date}</span>
                <h2>{featuredPosts[0].title}</h2>
                <p>{featuredPosts[0].excerpt}</p>
              </div>
            </motion.article>

            {/* Side featured */}
            <div className="blogs-page__featured-side">
              {featuredPosts.slice(1).map((post, i) => (
                <motion.article
                  key={post.id}
                  className="blogs-page__featured-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <img src={post.image} alt={post.title} />
                  <div className="blogs-page__featured-card-text">
                    <span className="blogs-page__date">{post.date}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Blogs */}
      <section className="blogs-page__all">
        <div className="blogs-page__container">
          <h2 className="blogs-page__section-title">All Blogs</h2>
          <div className="blogs-page__all-grid">
            {allPosts.map((post, i) => (
              <motion.article
                key={post.id}
                className="blogs-page__card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="blogs-page__card-img-wrap">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blogs-page__card-body">
                  <span className="blogs-page__date">{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
