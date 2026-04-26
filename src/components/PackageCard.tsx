import { motion } from 'framer-motion';
import { FiCalendar, FiGlobe } from 'react-icons/fi';
import { useCallbackModal } from '../contexts/CallbackModalContext';
import './PackageCard.css';

interface PackageCardProps {
  image: string;
  title: string;
  duration: string;
  price?: string;
  priceNote?: string;
  included?: string[];
  imageFit?: 'cover' | 'contain';
}

const PackageCard = ({ image, title, duration, price, priceNote, included, imageFit = 'cover' }: PackageCardProps) => {
  const { openModal } = useCallbackModal();

  return (
    <motion.div
      className="pkg-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
    >
      <div className="pkg-card__image-wrapper">
        <img src={image} alt={title} className="pkg-card__image" style={{ objectFit: imageFit }} loading="lazy" />
        <div className="pkg-card__duration">
          <FiGlobe size={14} />
          <span>{duration}</span>
        </div>
      </div>

      <div className="pkg-card__info">
        <h3 className="pkg-card__title">{title}</h3>

        <div className="pkg-card__meta-row">
          <FiCalendar size={13} />
          <span>{priceNote || 'On Request'}</span>
        </div>

        {included && included.length > 0 && (
          <div className="pkg-card__highlights">
            {included.slice(0, 3).map((item, i) => (
              <span key={i} className="pkg-card__highlight">
                <span className="pkg-card__highlight-dot" />
                {item}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pkg-card__footer">
        <span className="pkg-card__price-text">
          {price || 'Price on Demand'}
        </span>
        <button 
          className="pkg-card__btn" 
          onClick={(e) => { 
            e.preventDefault(); 
            e.stopPropagation(); 
            openModal(title); 
          }}
        >
          Request Callback
        </button>
      </div>
    </motion.div>
  );
};

export default PackageCard;
