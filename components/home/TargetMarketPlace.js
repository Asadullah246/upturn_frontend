import React from "react";
import SectionTitle from "../shared/SectionTitle";

const TargetMarketPlace = () => {
  return (
    <div style={{ marginTop: "120px" }} className="">
      <SectionTitle text={"Target Marketplaces"}></SectionTitle>
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
  );
};

export default TargetMarketPlace;
