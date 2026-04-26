import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';
import PackageDetailPage from './pages/PackageDetailPage';
import DestinationPage from './pages/DestinationPage';
import VisaPage from './pages/VisaPage';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';

import CategoryPage from './pages/CategoryPage';

function LocationProvider() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/package/:id" element={<PackageDetailPage />} />
        <Route path="/destination/:slug" element={<DestinationPage />} />
        <Route path="/visa" element={<VisaPage />} />
      </Routes>
    </AnimatePresence>
  );
}

import { CallbackModalProvider } from './contexts/CallbackModalContext';
import CallbackModal from './components/CallbackModal';

function App() {
  return (
    <CallbackModalProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <LocationProvider />
        <Footer />
        <CallbackModal />
      </Router>
    </CallbackModalProvider>
  );
}

export default App;

