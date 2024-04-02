
import React from 'react';

const format = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const FormatDate = () => {
  const originalDateString = '2024-04-02T12:15:02.764Z';
  const formattedDate = format(originalDateString);

  return formattedDate ;
};

export default FormatDate;
