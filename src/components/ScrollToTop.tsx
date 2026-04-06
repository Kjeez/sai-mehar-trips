import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset scroll explicitly to top without waiting for smooth scroll transitions
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    // Fallback for older browsers
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
