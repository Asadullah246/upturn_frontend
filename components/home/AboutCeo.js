import React from "react";
import SectionTitle from "../shared/SectionTitle";
import styles from "../../styles/Home.module.css";
import CustomButton from "../shared/CustomButton";

const AboutCeo = () => {
  return (
    <div className="container mx-auto " style={{ marginTop: "120px" }}>
      <SectionTitle text={"About CEO"}></SectionTitle>
      <div className="row align-items-center " style={{ marginTop: "60px" }}>
        <div className="col-6 pe-5 " style={{ textAlign: "right" }}>
          <img
            src="/home/new/mr_rayhan.jpg"
            alt=""
            className={`mr-0   ${styles.heroImg}`}
          />
        </div>
        <div className="col-6 ps-5">
          <p>
            Mr. Rayhan is a proud Instructor, Entrepreneur, Web Developer,
            Impactpreneur, Cyber Security Expert, Founder & CEO of CodemanBD,
            One of the biggest online education platform in Bangladesh who
            teaches online skills and promotes students to marketplaces and also
            CO-Founder of WebBattalion web agency. He is a top-rated Upwork &
            Fiverr freelancer.
          </p>

          <h4 className="mt-5  fs-2 fw-bold color-secondary">Mr. Rayhan</h4>
          <p className="mt-3 mb-0 fw-semibold">Founder, CEO & Instructor</p>
          <p className=" fw-semibold">Upturn Idea</p>
        <CustomButton style={{marginTop:"20px"}} text={"Learn More"}></CustomButton>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default AboutCeo;
