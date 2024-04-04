import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Whatsapp = () => {
    return (
        <div className='whatsappDiv'
        //  style={{
        //     position:"fixed",
        //     bottom:"30px",
        //     right:"30px",
        //     zIndex:99999999,
        //     backgroundColor:"#32D951",
        //     padding:"6px",
        //     borderRadius:"50%"
        // }}
        >
             <a href={`https://wa.me/+8801617222302`} target="_blank" style={{height:"fit-content !important", width:"fit-content !important" }}>
             <WhatsAppIcon className='whatsappIcon' style={{color:"white", backgroundColor:"#32D951"}}/>
             </a>


        </div>
    );
};

export default Whatsapp;
