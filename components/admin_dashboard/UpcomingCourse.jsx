import React from "react";

const UpcomingCourse = () => {
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
          <h2>Upcoming Course</h2>
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
                                <h5 className="mt-2 mb-0">Mentor Name</h5>
                              </label>
                              <input
                                type="text"
                                className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                id="name"
                                placeholder="Enter User Name"
                                required
                              />
                            </div>
                            <div className="mb-3">
                              <label for="title" className="form-label">
                                <h5 className="mt-2 mb-0">Course Title</h5>
                              </label>
                              <input
                                type="text"
                                className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                id="title"
                                placeholder="Enter Course  Name"
                                required
                              />
                            </div>

                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <form>
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Start Time
                                            </h5>
                                          </label>
                                          <input
                                            type="date"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="DD/MM/YYYY"
                                            required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              End Time
                                            </h5>
                                          </label>
                                          <input
                                            type="date"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="DD/MM/YYYY"
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
                                              Price
                                            </h5>
                                          </label>
                                          <input
                                            type="number"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="price"
                                            placeholder="Enter Price$"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/*  add for picture */}
                    <div className="row">
                      <div className="col-lg-6">
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
                      <div className="col-lg-6">
                        <h5 className="mt-2">Course Picture</h5>
                        <input
                          className="d-flex justify-content-center w-100 p-5"
                          type="file"
                          name="Drop your image here or Browser"
                          id="profile_picture"
                          style={{
                            height: "150px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "15px",
                          }}
                        />
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
  );
};

export default UpcomingCourse;
