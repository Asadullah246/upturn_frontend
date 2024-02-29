import { useEffect } from 'react';

function HeaderStyle() {
  useEffect(() => {
    function handleScroll() {
      const windowpos = window.scrollY;
      const siteHeader = document.querySelector('.main-header');
      const scrollLink = document.querySelector('.scroll-to-top');

      if (siteHeader) {
        const headerHeight = siteHeader.offsetHeight;

        if (windowpos >= headerHeight) {
          siteHeader.classList.add('fixed-header');
          if (scrollLink) {
            scrollLink.style.display = 'block';
          }
        } else {
          siteHeader.classList.remove('fixed-header');
          if (scrollLink) {
            scrollLink.style.display = 'none';
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the component mounts

  return null; // This component doesn't render anything, so return null
}

export default HeaderStyle;
