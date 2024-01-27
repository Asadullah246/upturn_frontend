import React from "react";
// import userImage from "./images/user.png"; // Adjust the path to your image file

const Dashboard = () => {
  return (
    <div>
      <div className="container">
        <div className="mb-4 d-flex align-items-center">
          <img
            className="me-3"
            src="https://i.ibb.co/VqL2CLG/Polygon-1.jpg"
            alt="Polygon-1"
            border="0"
            width="30"
            height="45"
          ></img>
          <h2>Dashboard</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Total Students</h5>
                  <h5>400</h5>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ height: "175px" }}
                >
                  <img
                    src="https://i.ibb.co/CsssWkh/noto-student-light-skin-tone-1.png"
                    alt="noto-student-light-skin-tone-1"
                    border="0"
                    width="90px"
                    height="90px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Mentors</h5>
                  <h5>4</h5>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ height: "175px" }}
                >
                  <img
                    src="https://i.ibb.co/jfQZJNs/raphael-parent.png"
                    alt="raphael-parent"
                    border="0"
                    width="90px"
                    height="90px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="shadow p-3 mb-5 bg-body rounded">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Total Price</h5>
                  <h5>1000$</h5>
                </div>
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ height: "175px" }}
                >
                  <img
                    src="https://i.ibb.co/z7805qg/Vector.png"
                    alt="Vector"
                    border="0"
                    width="70"
                    height="45"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
