import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDragScroll } from '../hooks/useDragScroll';
import './TopDestinations.css';

interface Destination {
  name: string;
  slug: string;
  image: string;
  price?: string;
}

const destinations: Destination[] = [
  { name: 'Bali', slug: 'bali', image: '/images/places/bali.jpg' },
  { name: 'Singapore', slug: 'singapore', image: '/images/places/singapore.jpg' },
  { name: 'Japan', slug: 'japan', image: '/images/dest_japan_1774589186858.png' },
  { name: 'Sri Lanka', slug: 'srilanka', image: '/images/dest_srilanka_1774589206836.png' },
  { name: 'Thailand', slug: 'thailand', image: '/images/places/thailand.jpg', price: '₹2,10,000/-' },
  { name: 'Dubai', slug: 'dubai', image: '/images/dest_dubai_1774589249274.png' },
  { name: 'USA', slug: 'usa', image: '/images/dest_usa_1774589265816.png' },
  { name: 'Vietnam', slug: 'vietnam', image: '/images/dest_vietnam_1774589284358.png' },
];

const TopDestinations = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useDragScroll(scrollRef);
  const [activeDot, setActiveDot] = useState(0);
  const totalDots = 5;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (maxScroll <= 0) return;
      const dotIndex = Math.round((scrollLeft / maxScroll) * (totalDots - 1));
      setActiveDot(Math.min(dotIndex, totalDots - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: ReturnType<typeof setInterval>;
    
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const _container = scrollRef.current;
        if (!_container) return;

        const maxScroll = _container.scrollWidth - _container.clientWidth;
        if (maxScroll <= 0) return;

        const currentDotExact = (_container.scrollLeft / maxScroll) * (totalDots - 1);
        let nextDot = Math.floor(currentDotExact) + 1;

        if (nextDot >= totalDots || _container.scrollLeft >= maxScroll - 5) {
          nextDot = 0;
        }

        const targetScroll = (nextDot / (totalDots - 1)) * maxScroll;
        _container.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }, 3500);
    };

    startAutoScroll();

    const pause = () => clearInterval(intervalId);
    const resume = () => { clearInterval(intervalId); startAutoScroll(); };
    
    const isHoverSupported = window.matchMedia('(hover: hover)').matches;

    if (isHoverSupported) {
      container.addEventListener('mouseenter', pause);
      container.addEventListener('mouseleave', resume);
    } else {
      container.addEventListener('touchstart', pause, { passive: true });
      container.addEventListener('touchend', resume, { passive: true });
      container.addEventListener('touchcancel', resume, { passive: true });
    }

    return () => {
      clearInterval(intervalId);
      if (isHoverSupported) {
        container.removeEventListener('mouseenter', pause);
        container.removeEventListener('mouseleave', resume);
      } else {
        container.removeEventListener('touchstart', pause);
        container.removeEventListener('touchend', resume);
        container.removeEventListener('touchcancel', resume);
      }
    };
  }, [totalDots]);

  const scrollToDot = (dotIndex: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetScroll = (dotIndex / (totalDots - 1)) * maxScroll;
    container.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveDot(dotIndex);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="destinations" id="destinations">
      <div className="destinations__container">
        <div className="destinations__header">
          <motion.h2
            className="destinations__title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Top Destinations
          </motion.h2>
          <div className="destinations__nav-arrows">
            <button className="destinations__arrow" onClick={() => scroll('left')} aria-label="Scroll left">
              <FiChevronLeft size={20} />
            </button>
            <button className="destinations__arrow" onClick={() => scroll('right')} aria-label="Scroll right">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

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
                <Link to={`/destination/${dest.slug}`} className="destinations__link">
                  <div className="destinations__image-wrapper">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="destinations__image"
                      loading="lazy"
                    />
                  </div>
                  <span className="destinations__name">{dest.name}</span>
                  {dest.price && (
                    <div className="destinations__price-wrap">
                      <span className="destinations__price-label">Price Starts</span>
                      <span className="destinations__price-value">{dest.price}</span>
                    </div>
                  )}
                </Link>
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
