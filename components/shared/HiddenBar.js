import { useEffect } from 'react';

function HiddenBar() {
  useEffect(() => {
    function handleOpenSidebar() {
      document.body.classList.add('visible-menu-bar');
      hiddenBar.current.classList.add('visible-sidebar');
    }

    function handleCloseSidebar() {
      document.body.classList.remove('visible-menu-bar');
      hiddenBar.current.classList.remove('visible-sidebar');
    }

    const hiddenBar = document.querySelector('.hidden-bar');
    const hiddenBarOpener = document.querySelector('.nav-toggler');
    const hiddenBarCloser = document.querySelectorAll('.hidden-bar-closer, .close-menu');

    hiddenBarOpener?.addEventListener('click', handleOpenSidebar);
    hiddenBarCloser?.forEach((element) => {
      element.addEventListener('click', handleCloseSidebar);
    });

    return () => {
      hiddenBarOpener?.removeEventListener('click', handleOpenSidebar);
      hiddenBarCloser?.forEach((element) => {
        element.removeEventListener('click', handleCloseSidebar); 
      });
    };
  }, []);

  return null;
}

export default HiddenBar;
