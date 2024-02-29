import React from "react";
import SectionTitle from "../shared/SectionTitle";
import SupportIcon from "@mui/icons-material/Support";

const StudentSuccess = () => {
  const data = [
    {
      title: "PREMIUM RESOURCES",
      desc: "After completion of skill development students have to work with clients. In some cases they need premium resources to complete the projects. We provide premium tools, softwares and resources for free to our students.",
      image: "/newIcons/home/success (3).png",
    },
    {
      title: "MARKETPLACE ORIENTED CONTENTS",
      desc: "Our best feature is we always focus on marketplace success. That's why we change our contents 35% in each batch which are demanded at marketplaces.",
      image: "/newIcons/home/success (2).png", 
    },
    {
      title: "BEST E-LEARNING PLATFORM",
      desc: "CodemanBD got 'Rising Youth Award' as the best e-learning platform 2022 for their best teaching policy, support, expert mentors and student success.",
      image: "/newIcons/home/success (1).png",
    },
  ];
  return (
    <div style={{ marginTop: "120px" }}>
      <SectionTitle text="How Our Students Get Success?" />

      <div className="row" style={{ marginTop: "60px " }}>
        <div className="col-12 col-md-6 ps-5 ">
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" />   */}
          {data?.map((d,index) => {
            return (
              <div key={index} className="d-flex align-items-baseline gap-3 mb-3 ">
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
                  <h5 className="text-uppercase fw-bold">
               {d?.title}
                  </h5>
                  <p className="mt-3">
                  {d?.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-12 col-md-6 text-end ">
          <img src="/home/new/success.png" alt="About" className="h-100 " />
        </div>
      </div>
    </div>
  );
};

export default StudentSuccess;
