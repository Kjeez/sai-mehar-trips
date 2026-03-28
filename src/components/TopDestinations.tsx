import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TopDestinations.css';

interface Destination {
  name: string;
  image: string;
}

const destinations: Destination[] = [
  { name: 'Bali', image: '/images/dest_bali_1774589152092.png' },
  { name: 'Singapore', image: '/images/dest_singapore_1774589168899.png' },
  { name: 'Japan', image: '/images/dest_japan_1774589186858.png' },
  { name: 'Sri Lanka', image: '/images/dest_srilanka_1774589206836.png' },
  { name: 'Thailand', image: '/images/dest_thailand_1774589225140.png' },
  { name: 'Dubai', image: '/images/dest_dubai_1774589249274.png' },
  { name: 'USA', image: '/images/dest_usa_1774589265816.png' },
  { name: 'Vietnam', image: '/images/dest_vietnam_1774589284358.png' },
];

const TopDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 5;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const dotIndex = Math.round((scrollLeft / maxScroll) * (totalDots - 1));
      setActiveDot(Math.min(dotIndex, totalDots - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDot = (dotIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = (dotIndex / (totalDots - 1)) * maxScroll;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveDot(dotIndex);
  };

  return (
    <section className="destinations" id="destinations">
      <div className="destinations__container">
        <motion.h2
          className="destinations__title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Top Destinations
        </motion.h2>

        <div className="destinations__scroll-wrapper" ref={scrollRef}>
          <div className="destinations__grid">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                className="destinations__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="destinations__image-wrapper">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="destinations__image"
                    loading="lazy"
                  />
                </div>
                <span className="destinations__name">{dest.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="destinations__dots">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              className={`destinations__dot ${activeDot === i ? 'destinations__dot--active' : ''}`}
              onClick={() => scrollToDot(i)}
              aria-label={`Scroll to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
