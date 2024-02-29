import { useEffect } from 'react';

function HiddenBar2() {
  useEffect(() => {
    function handleOpenSidebar() {
      hiddenBar.current.classList.add('visible-sidebar');
    }

    function handleCloseSidebar() {
      hiddenBar.current.classList.remove('visible-sidebar');
    }

    const hiddenBar = document.querySelector('.hidden-bar');
    const hiddenBarOpener = document.querySelector('.nav-toggler');
    const hiddenBarCloser = document.querySelector('.hidden-bar-closer');

    hiddenBarOpener.addEventListener('click', handleOpenSidebar);
    hiddenBarCloser.addEventListener('click', handleCloseSidebar);

    return () => {
      hiddenBarOpener.removeEventListener('click', handleOpenSidebar);
      hiddenBarCloser.removeEventListener('click', handleCloseSidebar);
    };
  }, []);

  return null;
}

export default HiddenBar2;
