import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useDragScroll } from '../hooks/useDragScroll';
import './PackageSection.css';

interface PackageSectionProps {
  title: string;
  children: React.ReactNode;
  accentColor?: string;
}

const PackageSection = ({ title, children, accentColor }: PackageSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useDragScroll(scrollRef);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let intervalId: ReturnType<typeof setInterval>;
    
    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        const _container = scrollRef.current;
        if (!_container) return;
        
        const scrollAmount = 320;
        const maxScroll = _container.scrollWidth - _container.clientWidth;
        
        if (_container.scrollLeft >= maxScroll - 10) {
          _container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          _container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
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
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="pkg-section">
      <div className="pkg-section__container">
        <motion.div
          className="pkg-section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="pkg-section__title">
            {title}
            <span
              className="pkg-section__title-bar"
              style={accentColor ? { background: accentColor } : {}}
            />
          </h2>
          <div className="pkg-section__nav-arrows">
            <button className="pkg-section__arrow" onClick={() => scroll('left')} aria-label="Scroll left">
              <FiChevronLeft size={20} />
            </button>
            <button className="pkg-section__arrow" onClick={() => scroll('right')} aria-label="Scroll right">
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="pkg-section__scroll" ref={scrollRef}>
          <div className="pkg-section__grid">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
