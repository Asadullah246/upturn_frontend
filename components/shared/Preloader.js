import { useEffect } from 'react';
import $ from 'jquery'; // Make sure jQuery is installed and properly configured

const Preloader = () => {
  useEffect(() => {
    if($('.preloader').length){
      $('.preloader').delay(200).fadeOut(500);
    }
  }, []); // Run the effect only once when the component mounts
};

export default Preloader; 
