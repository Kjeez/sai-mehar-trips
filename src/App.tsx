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
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/package/:id" element={<PackageDetailPage />} />
        <Route path="/destination/:slug" element={<DestinationPage />} />
        <Route path="/visa" element={<VisaPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

