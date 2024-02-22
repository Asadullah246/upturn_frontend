import React from "react";
import SectionTitle from "../shared/SectionTitle";
import SupportIcon from "@mui/icons-material/Support";

const StudentSuccess = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <SectionTitle text="How Our Students Get Success?" />

      <div className="row" style={{ marginTop: "60px " }}>
        <div className="col-12 col-md-6 ps-5 ">
          {/* <FontAwesomeIcon icon="fa-solid fa-envelope" />   */}
          {[...Array(3)].map((index, d) => {
            return (
              <div key={index} className="d-flex align-items-baseline gap-3 mb-3 ">
                <div>
                  <SupportIcon
                    className=" color-primary "
                    style={{ height: "35px", width: "35px" }}
                  />
                </div>
                <div>
                  <h5 className="text-uppercase fw-bold">
                  PREMIUM RESOURCES
                  </h5>
                  <p className="mt-3">
                  After completion of skill development students have to work with clients. In some cases they need premium resources to complete the projects. We provide premium tools, softwares and resources for free to our students.
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
