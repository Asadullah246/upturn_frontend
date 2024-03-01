import { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is installed and properly configured

const SubmenuDropdownToggle = () => {
  useEffect(() => {
    if($('.main-header li.dropdown ul').length){
      $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

      //Dropdown Button
      $('.main-header li.dropdown .dropdown-btn').on('click', function() {
        $(this).prev('ul').slideToggle(500);
      });

      //Dropdown Menu / Fullscreen Nav
      $('.fullscreen-menu .navigation li.dropdown > a').on('click', function() {
        $(this).next('ul').slideToggle(500);
      });

      //Disable dropdown parent link
      $('.navigation li.dropdown > a').on('click', function(e) {
        e.preventDefault();
      });

      //Disable dropdown parent link
      $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
        e.preventDefault();
      });
    }
  }, []); // Run the effect only once when the component mounts

  return null;
};

export default SubmenuDropdownToggle;
