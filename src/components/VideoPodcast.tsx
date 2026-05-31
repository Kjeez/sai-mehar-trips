import React from 'react';
import { motion } from 'framer-motion';
import './VideoPodcast.css';

const VideoPodcast: React.FC = () => {
  return (
    <section className="video-podcast">
      <div className="video-podcast__container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="video-podcast__header"
        >
          <span className="video-podcast__badge">PODCAST</span>
          <h2 className="video-podcast__title">Explore With Us</h2>
          <p className="video-podcast__subtitle">
            Watch our latest podcast episode and discover insights into incredible destinations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="video-podcast__video-wrapper"
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ByjuYX0Sjeo?si=hC-4z8zWJzF1Lq89"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPodcast;
