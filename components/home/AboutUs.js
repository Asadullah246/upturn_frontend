import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SupportIcon from "@mui/icons-material/Support";

const AboutUs = () => {
  return (
    <div>
      <SectionTitle text={"About Upturn Idea"}></SectionTitle>
      <div className="row">
        <div className="col-12 col-md-6 ">
          <img src="/home/new/abouUs.png" alt="About" className="h-75" />
        </div>
        <div className="col-12 col-md-6 pe-3 "> 
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" />   */}
        {[...Array(3)].map((index, d)=>{
            return (
                <div key={index} className="d-flex align-items-baseline gap-3 ">
                <div>
                  <SupportIcon
                    className=" color-primary "
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>
                <div>
                  <h5 className="text-uppercase fw-bold">
                    INSTANT LIVE SUPPORT LIFETIME
                  </h5>
                  <p className="mt-3">This is our most important value for any new learners. 15+ marketplace experienced support members are providing valuable and quality support to the students roster wise in online and offline. Any student .</p>
                </div>
              </div>
            )
        })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
