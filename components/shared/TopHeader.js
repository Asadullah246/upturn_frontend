import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const TopHeader = ({pageName}) => {
    return (
        <div style={{height:"30vw",
        // backgroundImage: "url(/images/header.jpg)",backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat"
        }} className='dark-overlay d-flex align-items-center justify-content-center text-white '>
            <div className='text-center '>
                <h1 className='headingText'>{pageName}</h1>
                <div className='d-flex align-items-center justify-content-center gap-2  '>
                    <a href="/" className='headingLink fw-bolder  '>Home</a>
                    <div> <KeyboardArrowRightIcon/></div>
                    <a className='text-white fw-bolder' href="#">{pageName}</a>
                </div>
            </div>

        </div>
    );
};

export default TopHeader;
