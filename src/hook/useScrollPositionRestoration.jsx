import { useEffect, useState } from 'react';
import { useLocation, useNavigationType, useNavigate } from 'react-router-dom';

function useScrollPositionRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const navigate = useNavigate(); // Add this line
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

    return () => {
      window.removeEventListener('scroll', saveScrollPosition);
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

  // Update the isNavigating flag BEFORE navigating 
  const handleNavigate = (to, options) => {
    setIsNavigating(true);
    navigate(to, options);
  }

  // Reset the flag after navigation is complete
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsNavigating(false);
    }, 200); // Adjust delay if needed

    return () => clearTimeout(timeoutId);
  }, [location.pathname]); 

  return { handleNavigate }; // Return the modified navigate function
}

export default useScrollPositionRestoration;

