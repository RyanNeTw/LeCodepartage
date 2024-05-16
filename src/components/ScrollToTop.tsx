import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    let scrollTimeout;
    if (!location.hash) {
      scrollTimeout = setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100);
    }

    return () => clearTimeout(scrollTimeout);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
