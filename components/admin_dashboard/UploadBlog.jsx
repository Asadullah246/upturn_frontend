import React, { useState } from "react";
import { CreateNew } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";

const UploadBlog = () => {
  const [uploadingStatus, setUploadingStatus] = useState(false);

  const handleSubmit = async (e) => {
    setUploadingStatus(true)
    e.preventDefault();
    const target = e.target;
    const logo = target?.logo?.files[0];
    const inputData = {
      websiteName: target?.websiteName.value,
      metaText: target?.metaText.value,
      phone: target?.phone.value,
      email: target?.email.value,
      address: target?.address.value,
      facebook: target?.facebook.value,
      twitter: target?.twitter.value,
      instagram: target?.instagram.value,
      description: target?.description.value,
    };




    if(logo) {

      const data = new FormData();
      data.append("file", logo);
      data.append("upload_preset", "ml_defaultru");
      data.append("cloud_name", "dc7xchqbj");

      fetch("http://api.cloudinary.com/v1_1/dc7xchqbj/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          const newInputData = {...inputData, logo: data?.url}
          const res = CreateNew(newInputData, "websiteInfo")

          if (res?.status === "success") {
            ToastSuccess("Successfully updated");
          } else {
            ToastError(res?.message || "Something error");
          }


        })
        .catch(err=>{
          ToastError(err?.message || "Something error");
        })


    }
    else {
      const res =await CreateNew(inputData, "websiteInfo")

      if (res?.status === "success") {
        ToastSuccess("Successfully updated");
      } else {
        ToastError(res?.message || "Something error");
      }


    }
    setUploadingStatus(false)

  };
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
          <h2>Blogs</h2>
        </div>
        <div style={{ backgroundColor: ["#DDDDDD"], borderRadius: "10px" }}>
          <form
            onSubmit={handleSubmit}
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
                          <div>
                            {/* <div className="col-12 mb-3 ">
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
                            </div> */}

                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Website Name
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="websiteName"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="Website Name"
                                            // required
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
                                              Meta Text
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            name="metaText"
                                            placeholder="Meta Text"
                                            // required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">Phone</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="phone"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="phone"
                                            // required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="class_time"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">Email</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="email"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            placeholder="email"
                                            // required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Address
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="address"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="address"
                                            // required
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
                                              Facebook
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="facebook"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            placeholder="facebook"
                                            // required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Twitter
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="twitter"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="twitter"
                                            // required
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
                                              Instagram
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="instagram"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            placeholder="instagram"
                                            // required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 mb-3 ">
                              <label for="name" className="form-label">
                                <h5 className="mt-2 mb-0">Description</h5>
                              </label>
                              <textarea
                                type="text"
                                name="description"
                                className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                id="name"
                                placeholder="description"
                                // cols={30}
                                // required
                              />
                            </div>

                            {/* <div className="col-md-12">
                              <div className="row justify-content-center">
                                <div>
                                  <div>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Class schedule
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
                                              Class Time
                                            </h5>
                                          </label>
                                          <input
                                            type="time"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            placeholder="Class Time"
                                            required
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div> */}
                          </div>
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
                            name="logo"
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
                      {/* <div className="col-lg-6">
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
                      </div> */}
                    </div>

                    {/* button cancel and proceed */}
                    {/* <div className="row mt-4">
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
                    </div> */}
                    <div className="me-auto text-end mt-4">
                      <button
                        type="submit"
                        disabled={uploadingStatus}
                        className="btn btn-warning"
                      >
                        {uploadingStatus ? "Uploading" : "Submit"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadBlog;
