import React, { useState } from "react";
import { CreateNew } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import uploadImageToCloudinary from "../shared/uploadImageToCloudinary";
import HeaderText from "./HeaderText";

const CreateTestimonial = () => {
  const [uploadingStatus, setUploadingStatus] = useState(false);

  const handleSubmit = async (e) => {
    setUploadingStatus(true);
    e.preventDefault();
    const target = e.target;
    const personImage = target?.personImage?.files[0];

    try {
      // Upload author image
      const personImageLink = await uploadImageToCloudinary(personImage);

      const inputData = {
        name: target?.personName.value,
        image: personImageLink,
        rating:target?.rating.value,
        designation: target?.designation.value,
        description: target?.description.value,
        status:true
      };
      console.log("in", inputData );
      // Save data to database
      const res = await CreateNew(inputData, "testimonial");

      if (res?.status === "success") {
        ToastSuccess("Successfully updated");
      } else {
        ToastError(res?.message || "Something error");
      }
    } catch (error) {
      ToastError(error?.message || "Something error");
    }

    setUploadingStatus(false);
  };

  return (
    <div>
      <div className="container">
        <HeaderText text="Create Testimonial" />
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
                                            <h5 className="mt-2 mb-0">Name</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="personName"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="name"
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
                                              Designation
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            name="designation"
                                            placeholder="Designation"
                                            required
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
                                            <h5 className="mt-2 mb-0">Rating</h5>
                                          </label>
                                          <input
                                            type="number"
                                            name="rating"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="rating"
                                            required
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
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  add for picture */}
                    <div className="row">
                      <div className="col-lg-12">
                        <h5 className="mt-2">Image</h5>
                        <div>
                          <input
                            className="d-flex justify-content-center w-100 p-5"
                            type="file"
                            name="personImage"
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
                    <div className="row mt-4">
                      <button
                        type="submit"
                        disabled={uploadingStatus}
                        className="btn btn-info"
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

export default CreateTestimonial;
