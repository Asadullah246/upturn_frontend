import React from "react";
import SectionTitle from "../shared/SectionTitle";
import ReactPlayer from "react-player";

const Podcast = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <SectionTitle text="Podcasts of Upturn" />
      <div className="container " style={{marginTop:"40px"}}>
        <div className="row gy-4 gx-4 ">
         {[...Array(9)].map((s,index)=>{
            return(
                <div key={index} className="col-12 col-md-6 col-lg-4">
                <ReactPlayer
                  url="https://youtu.be/8RJHcPEjq9c?si=JZ5N5DQPN2U3Gd5-" 
                  controls={true}
                  width="100%"
                  height="350px"
                />
              </div>
            )
         })}
        </div>
      </div>
    </div>
  );
};

export default Podcast;
