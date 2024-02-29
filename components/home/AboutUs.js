import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SupportIcon from "@mui/icons-material/Support";

const AboutUs = () => {
  const data = [
    {
      title: "INSTANT LIVE SUPPORT LIFETIME",
      desc: "This is our most important value for any new learners. 15+ marketplace experienced support members are providing valuable and quality support to the students roster wise in online and offline. Any student can get 24/7 instant live support. When the students have such support they become confident and flexible.",
      image: "/newIcons/home/support.png",
    },
    {
      title: "CodemanBD SUCCESS STORIES",
      desc: "We have a student’s success stories group in facebook where student can post their journey at marketplaces, their earnings, work history, their happiness & sorrows.",
      image: "/newIcons/home/star.png",
    },
    {
      title: "FIVERR & UPWORK CRASH",
      desc: "Fiverr Upwork, People Per Hour & Freelancer & Other marketplace crash programs of 60 days make them confident about marketplace!",
      image: "/newIcons/home/diamond.png",
    },
  ];
  return (
    <div style={{ marginTop: "120px", padding: "0 30px " }}>
      <SectionTitle text={"About Upturn Idea"}></SectionTitle>
      <div className="row" style={{ marginTop: "50px " }}>
        <div className="col-12 col-md-6 ">
          <img src="/home/new/abouUs.png" alt="About" className="h-75" />
        </div>
        <div className="col-12 col-md-6 pe-3 ">
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" />   */}
          {data?.map((d, index) => {
            return (
              <div key={index} className="d-flex align-items-baseline gap-3 mb-3">
                <div>
                  <img
                    src={d?.image}
                    height={50}
                    width={50}
                    alt=""
                    style={{ marginTop: "0px " }}
                  />
                </div>
                <div>
                  <h5 className="text-uppercase fw-bold" style={{}}>
                    {d?.title}
                  </h5>
                  <p className="mt-3">{d?.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
