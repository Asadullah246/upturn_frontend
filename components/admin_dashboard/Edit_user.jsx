import React from "react";

const Edit_user = () => {
  return (
    <div>
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
            <h2>Edit Users Info</h2>
          </div>
          <div style={{ backgroundColor: ["#DDDDDD"], borderRadius: "10px" }}>
            <div
              style={{
                paddingTop: "35px",
                paddingLeft: "22px",
                paddingRight: "22px",
                paddingBottom: "18px",
              }}
            >
              <div className="row">
                <div className="col-12">
                  <div>
                    <div className="container mt-2">
                      <div className="col-md-12">
                        <div className="row justify-content-center">
                          <div>
                            {/* form for label and value */}
                            <form>
                              <div className="col-12 mb-3 ">
                                <label for="name" className="form-label">
                                  <h5 className="mt-2 mb-0">Name</h5>
                                </label>
                                <input
                                  type="text"
                                  className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                  id="name"
                                  placeholder="Enter User Name"
                                  required
                                />
                              </div>

                              <div className="col-md-12">
                                <div className="row justify-content-center">
                                  <div>
                                    <form>
                                      <div className="row">
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              for="schedule"
                                              className="form-label"
                                            >
                                              <h5 className="mt-2 mb-0">
                                                Mobile Number
                                              </h5>
                                            </label>
                                            <input
                                              type="number"
                                              className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                              id="mobile_number"
                                              placeholder="Enter your mobile number "
                                              required
                                            />
                                          </div>
                                        </div>
                                        <div className="col-md-6">
                                          <div className="mb-3">
                                            <label
                                              for="class_time"
                                              className="form-label"
                                            >
                                              <h5 className="mt-2 mb-0">
                                                Email Address
                                              </h5>
                                            </label>
                                            <input
                                              type="email"
                                              className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                              id="class_time"
                                              placeholder="Enter your email address"
                                              required
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-3">
                                <label for="title" className="form-label">
                                  <h5 className="mt-2 mb-0">Address</h5>
                                </label>
                                <input
                                  type="text"
                                  className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                  id="title"
                                  placeholder="Enter Your Address "
                                  required
                                />
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="mb-3">
                                    <label
                                      for="schedule"
                                      className="form-label"
                                    >
                                      <h5 className="mt-2 mb-0">Password</h5>
                                    </label>
                                    <input
                                      type="password"
                                      className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                      id="mobile_number"
                                      placeholder="Enter your password  "
                                      required
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      {/*  add for picture */}
                      <div className="row">
                        <div className="col-lg-12">
                          <h5 className="mt-2">Profile Picture</h5>
                          <div>
                            <input
                              className="d-flex justify-content-center w-100 p-5"
                              type="file"
                              name="Drop your image here or Browser"
                              id="profile_picture"
                              style={{
                                height: "150px",
                                width: "300px",
                                backgroundColor: "#FFFFFF",
                                borderRadius: "15px",
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* button cancel and proceed */}
                      <div className="row mt-4">
                        <div className="col-md-6"></div>
                        <div className="col-md-6">
                          <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
                            <button
                              type="submit"
                              className="btn btn-warning me-4 bordered"
                            >
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-warning">
                              Proceed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_user;
