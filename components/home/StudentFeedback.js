import React from "react";
import SectionTitle from "../shared/SectionTitle";
import { Rating } from "@mui/material";


const StudentFeedback = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <SectionTitle text={"What Our Students Say?"}></SectionTitle>
      <div className="container" style={{ marginTop: "40px" }}>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 gx-4 gy-4 ">
          {[...Array(8)].map((s, index) => {
            return (
              <div key={index} className="p-3 ">
              <div className="shadow p-3">
              <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex gap-3  align-items-center ">
                    <img
                      src="/home/new/mr_rayhan.jpg"
                      alt="Student"
                      width={50}
                      height={50}
                      style={{ borderRadius: "50%" }}
                    />
                    <div>
                      <h5 className="mb-0 fw-bold">Anik</h5>
                      <p className="mb-0 fs-6">March 10, 2022.</p>
                    </div>
                  </div>
                  <div>
                    <a href="http://gmail.com" target="_blank" > 
                    <img src="/home/new/google.png" alt="" width={26} height={26} />
                    </a>
                  </div>
                </div>
            <div className="mt-3">
            <Rating name="read-only" value={4} readOnly />
            </div>

                <p className="mt-2 " style={{fontSize:"1em"}}>probably better than other Bangladeshi institutes as all the mentors are helpful and keep their best to fix any types of problem.</p>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StudentFeedback;
