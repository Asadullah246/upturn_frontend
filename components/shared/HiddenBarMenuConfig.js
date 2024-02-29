import { useEffect } from 'react';

function HiddenBarMenuConfig() {
  useEffect(() => {
    function handleExpanderClick(event) {
      const expander = event.currentTarget;
      const parentListItem = expander.parentElement.parentElement; // Get the parent li
      const childUl = parentListItem.querySelector('ul');

      // Toggle the visibility of the child ul
      childUl.classList.toggle('active');

      // Toggle the class of the expander container
      parentListItem.classList.toggle('current');

      // Toggle the arrow icon
      expander.querySelector('i').classList.toggle('fa-angle-right');
      expander.querySelector('i').classList.toggle('fa-angle-down');
    }

    const expanderButtons = document.querySelectorAll('.hidden-bar .side-menu .btn.expander');
    expanderButtons.forEach(button => {
      button.addEventListener('click', handleExpanderClick);
    });

    return () => {
      expanderButtons.forEach(button => {
        button.removeEventListener('click', handleExpanderClick);
      });
    };
  }, []);

  return null;
}

export default HiddenBarMenuConfig; 
