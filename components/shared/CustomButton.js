import React from 'react';

const customStyles = {
  btm: {
    background: '#d63384',
    fontFamily: 'Poppins',
    fontWeight: 600,
    borderRadius: '35px',
    color: 'white',
    border: 'none',
    padding: '8px 25px',
    transition: 'transform ease-in-out 0.3s',
  },
  btmHover: {
    opacity: 0.8,
  }
};

const CustomButton = ({ text, style, className}) => {
    console.log("sty", style );
  return (
    <button
      type="button"
      style={{...style, ...customStyles.btm }}
      className={`${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
