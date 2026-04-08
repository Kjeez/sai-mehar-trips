import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();
  const navType = useNavigationType();
  const scrollPositions = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      scrollPositions.current[location.key] = window.scrollY;
    };
    
    // Throttle or passively listen to scroll to save position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.key]);

  useEffect(() => {
    // Override CSS smooth scrolling for instant position changes
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;

    if (navType === 'POP') {
      // Trying to restore scroll position for the page we just went back to
      const savedPosition = scrollPositions.current[location.key] || 0;
      // We must wait for framer-motion's mode="wait" to finish the exit animation (approx 500ms+ depending on your config)
      // and for the new layout to mount, so we set a timeout corresponding to your exit duration.
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top: savedPosition, left: 0, behavior: 'instant' });
        document.documentElement.style.scrollBehavior = originalStyle;
      }, 550); 
    } else {
      // For PUSH or REPLACE, we want to scroll to top. 
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.style.scrollBehavior = originalStyle;
      }, 550);
    }
  }, [location.pathname, navType, location.key]);

  return null;
};

export default ScrollToTop;
