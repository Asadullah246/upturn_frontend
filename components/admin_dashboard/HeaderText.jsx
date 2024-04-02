import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const HeaderText = ({text}) => {
    return (
        <div className="mb-4 d-flex align-items-center">
        <KeyboardDoubleArrowRightIcon style={{ fontSize:"2.8rem", color:"rgb(0, 50, 150)"  }}/>
        <h2 className="mb-0" style={{color:"rgb(0, 50, 150)"}}>{text}</h2>
      </div>
    );
};

export default HeaderText; 
