import React, { useEffect } from 'react';
import CountUp from 'react-countup';

const CountManage = () => {
  useEffect(() => {
    const countBoxes = document.querySelectorAll('.count-box');
    countBoxes?.forEach(box => {
      const stopValue = parseInt(box.querySelector('.count-text')?.getAttribute('data-stop'));
      const duration = parseInt(box.querySelector('.count-text')?.getAttribute('data-speed'));
      const countText = box?.querySelector('.count-text');
      const countOptions = {
        start: 0,
        end: stopValue,
        duration: duration / 1000, // Convert milliseconds to seconds
        useEasing: true,
        useGrouping: true,
        separator: ',',
      };
      if (countText) {
        new CountUp(countText, countOptions).start();  
      }
    });
  }, []);

  return null;
};

export default CountManage;

