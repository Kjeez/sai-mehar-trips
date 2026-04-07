import { useRef } from 'react';
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
