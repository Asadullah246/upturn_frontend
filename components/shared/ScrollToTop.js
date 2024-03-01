import React, { useEffect } from 'react';

const YourComponent = () => {
  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  useEffect(() => {
    const backToTopButton = document.querySelector('.back-to-top');
    if (backToTopButton) {
      backToTopButton.addEventListener('click', scrollToTop);
    }

    return () => {
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <div>
      {/* Your JSX content */}

      {/* Back to top button */}
      <div className="back-to-top scroll-to-target show-back-to-top">
        TOP
      </div>
    </div>
  );
};

export default YourComponent;
