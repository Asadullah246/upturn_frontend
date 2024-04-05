import React from "react";

const TargetMarketPlace = () => {
  return (
    <div className="">
      {/* <SectionTitle text={"Target Marketplaces"}></SectionTitle> */}

 

      <section className="team-section-two" style={{padding:"60px 0", marginBottom:"80px" }}>
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Our Clients</div>
          <h2>Our Successful Clients</h2>
        </div>
        <div className="container mx-auto mt-5  d-flex align-items-center justify-content-between gap-5">
        <div className="shadow-lg px-4 py-3  bg-white rounded-4 ">
          <img
            className=""
            style={{ width: "100% ", height: "70px" }}
            src="/home/new/upwork.png"
            alt=""
          />
        </div>
        <div className="shadow-lg px-4 py-3  bg-white rounded-4 ">
          <img
            className=""
            style={{ width: "100% ", height: "70px" }}
            src="/home/new/fiverr.png"
            alt=""
          />
        </div>
        <div className="shadow-lg px-4 py-3  bg-white rounded-4 ">
          <img
            className=""
            style={{ width: "100% ", height: "70px" }}
            src="/home/new/peopleperhour.png"
            alt=""
          />
        </div>
        <div className="shadow-lg px-4 py-3  bg-white rounded-4 ">
          <img
            className=""
            style={{ width: "100% ", height: "70px" }}
            src="/home/new/freelancer.png"
            alt=""
          />
        </div>
        <div className="shadow-lg px-4 py-3  bg-white rounded-4 ">
          <img
            className=""
            style={{ width: "100% ", height: "70px" }}
            src="/home/new/indeed.png"
            alt=""
          />
        </div>
      </div>
      </div>
    </section>

    </div>



  );
};

export default TargetMarketPlace;
