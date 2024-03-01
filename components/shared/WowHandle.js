import React, { useEffect } from 'react';

const WowHandle = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.wow'); 
      elements?.forEach((element) => {
        const elementTop = element?.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight) {
          element.classList.add('animated', 'fadeInLeft');
        } else {
          element.classList.remove('animated', 'fadeInLeft');
        }
      });
    };

    // Initial check on mount
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null ;
};

export default WowHandle;

