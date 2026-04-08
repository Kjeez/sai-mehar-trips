import FadeIn from './FadeIn';
import { FiMap, FiCheckCircle, FiCompass, FiShield } from 'react-icons/fi';
import './WhyUs.css';

const features = [
  {
    icon: <FiMap size={28} />,
    title: 'Expertly Crafted Itineraries',
    desc: 'Our team designs trips that balance adventure, comfort, and local experiences. Every journey is planned with care so you can travel worry-free.',
  },
  {
    icon: <FiCheckCircle size={28} />,
    title: 'Hassle-Free Planning',
    desc: 'We handle visas, flights, hotels, transfers, and tours so you can skip the stress and focus only on enjoying your trip.',
  },
  {
    icon: <FiCompass size={28} />,
    title: 'Local Expertise & Hidden Gems',
    desc: 'Our insider knowledge unlocks authentic experiences, hidden spots, and local secrets that most travelers miss.',
  },
  {
    icon: <FiShield size={28} />,
    title: 'Transparent & Trusted Service',
    desc: 'With clear pricing, no hidden fees, and thousands of happy travelers, we make sure your travel experience is seamless and trustworthy.',
  },
];

const WhyUs = () => {
  return (
    <section className="why-us" id="why-us">
      <div className="why-us__container">
        <FadeIn
          className="why-us__header"
          direction="up"
        >
          <h2 className="why-us__title">Why Sai Mehar Trips Pvt Ltd?</h2>
          <p className="why-us__subtitle">
            Because travel shouldn't be complicated. It should be exciting, immersive, and totally stress-free.
          </p>
        </FadeIn>

        <div className="why-us__grid">
          {features.map((f, i) => (
            <FadeIn
              key={f.title}
              className="why-us__card"
              direction="up"
              delay={i * 0.1}
            >
              <div className="why-us__icon">{f.icon}</div>
              <h3 className="why-us__card-title">{f.title}</h3>
              <p className="why-us__card-desc">{f.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
