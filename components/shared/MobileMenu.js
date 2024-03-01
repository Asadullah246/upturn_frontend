import { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is properly configured

const MobileMenu = () => {
  useEffect(() => {
    if($('.mobile-menu').length){
      // Check if mCustomScrollbar function exists before calling it
      if ($.fn.mCustomScrollbar) {
        $('.mobile-menu .menu-box').mCustomScrollbar();
      }

      var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
      $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

      $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
        $(this).toggleClass('open');
        $(this).prev('ul').slideToggle(500);
      });

      // Additional mobile menu functionality...

    }
  }, []);

  return null;
};

export default MobileMenu;
 