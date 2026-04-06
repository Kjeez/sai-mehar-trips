import Hero from '../components/Hero';
import TopDestinations from '../components/TopDestinations';
import PackageSection from '../components/PackageSection';
import PackageCard from '../components/PackageCard';
import ServicesSection from '../components/ServicesSection';
import WhyUs from '../components/WhyUs';
import CTABanner from '../components/CTABanner';
import { Link } from 'react-router-dom';
import {
  internationalPackages,
  domesticPackages,
  pilgrimagePackages,
  cruisePackages,
} from '../data/packagesData';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TopDestinations />

      <PackageSection title="International Holidays" accentColor="#e74c3c">
        {internationalPackages.map((pkg) => (
          <Link key={pkg.id} to={`/package/${pkg.id}`} style={{ textDecoration: 'none' }}>
            <PackageCard
              image={pkg.image}
              title={pkg.title}
              duration={pkg.duration}
              price={pkg.price}
              priceNote={pkg.priceNote}
              included={pkg.included}
            />
          </Link>
        ))}
      </PackageSection>

      <PackageSection title="Domestic Packages" accentColor="#27ae60">
        {domesticPackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            image={pkg.image}
            title={pkg.title}
            duration={pkg.duration}
          />
        ))}
      </PackageSection>

      <PackageSection title="Pilgrimage Tours" accentColor="#e67e22">
        {pilgrimagePackages.map((pkg) => (
          <Link key={pkg.id} to={`/package/${pkg.id}`} style={{ textDecoration: 'none' }}>
            <PackageCard
              image={pkg.image}
              title={pkg.title}
              duration={pkg.duration}
              price={pkg.price}
              priceNote={pkg.priceNote}
              included={pkg.included}
            />
          </Link>
        ))}
      </PackageSection>

      <PackageSection title="Cruises" accentColor="#3498db">
        {cruisePackages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            image={pkg.image}
            title={pkg.title}
            duration={pkg.duration}
          />
        ))}
      </PackageSection>

      <ServicesSection />
      <WhyUs />
      <CTABanner />
    </>
  );
};

export default HomePage;
