import { useEffect, useState } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

function useScrollPositionRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    const saveScrollPosition = () => {
      if (!isNavigating) {
        const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
        scrollPositions[location.pathname] = window.scrollY;
        sessionStorage.setItem('scrollPositions', JSON.stringify(scrollPositions));
      }
    };

    window.addEventListener('scroll', saveScrollPosition);
    window.addEventListener('beforeunload', saveScrollPosition);

    // **Corrected cleanup function:** 
    return () => {
      window.removeEventListener('scroll', saveScrollPosition); // Remove the scroll listener
      window.removeEventListener('beforeunload', saveScrollPosition);
    };
  }, [location.pathname, isNavigating]);

  useEffect(() => {
    if (navigationType === 'POP') {
      const scrollPositions = JSON.parse(sessionStorage.getItem('scrollPositions') || '{}');
      const savedPosition = scrollPositions[location.pathname];

      if (savedPosition !== undefined) {
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
        }, 200); // Adjust delay if needed
      }
    }
  }, [location.pathname, navigationType]);
}

export default useScrollPositionRestoration;
