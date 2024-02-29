import React from 'react';
import SectionTitle from '../shared/SectionTitle';
import GroupsIcon from '@mui/icons-material/Groups';
import  groupIcon2 from '@mui/icons-material/Group';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

const Success = () => {
     const successData=[
        {
            sub:"Student",
            number:"2000+",
            desc:"Already Trained By Us",
            logo:GroupsIcon
        },
        {
            sub:"Batch",
            number:"300+",
            desc:"Already Launched and Completed",
            logo:groupIcon2
        },
        {
            sub:"Success",
            number:"100+",
            desc:"Already Trained By Us",
            logo:ThumbUpOffAltIcon
        },
        {
            sub:"Revenue",
            number:"$20M",
            desc:"Earned By Student",
            logo:AttachMoneyIcon
        },
        {
            sub:"Jobs",
            number:"100K+",
            desc:"Confirmed By Students",
            logo:LibraryAddCheckIcon
        },
     ]
    return (
        <div className='' style={{marginTop:"120px"}}>
            <SectionTitle text="Our Success"/>
            <div style={{marginTop:"40px"}} className='container'>
                <div className="row ">
                   {
                    successData?.map(({logo: Logo, sub, number, desc}, index)=>{
                        return(
                            <div key={index} className="col shadow mx-3 my-3 pt-4 rounded-4 p-3 text-center">
                               <div className={`${(index % 2== 0 )? "bg-color-primary" : "bg-color-secondary "}  p-2 `} style={{ width:"fit-content", borderRadius:"50%", margin:"auto auto" }}>
                               <Logo style={{fontSize:"2.8rem" ,  color:"white "}}/>
                               </div>
                            <h4 className='mt-3 fw-semibold'> <span className='color-primary fw-bold '>{number} </span> <br />{sub}</h4>
                            <p className='mt-3' style={{fontSize:"1.1em"}}>{desc}</p>
                        </div>
                        )
                    })
                   }
                </div>


            </div>

        </div>
    );
};

export default Success;
