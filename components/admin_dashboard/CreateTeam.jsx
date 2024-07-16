import React, { useState } from "react";
import { CreateNew } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import uploadImageToCloudinary from "../shared/uploadImageToCloudinary";
import HeaderText from "./HeaderText";

const CreateTeam = () => {
  const [uploadingStatus, setUploadingStatus] = useState(false);
  // const [descriptions, setDescriptions] = useState([
  //   { title: "", details: "" },
  // ]);

  // const handleInputChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const list = [...descriptions];
  //   list[index][name] = value;
  //   setDescriptions(list);
  // };

  // const handleAddDescription = () => {
  //   setDescriptions([...descriptions, { title: "", details: "" }]);
  // };

  // const handleRemoveDescription = (index) => {
  //   const list = [...descriptions];
  //   list.splice(index, 1);
  //   setDescriptions(list);
  // };

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
        designation: target?.designation.value,
        description: target?.description.value,
        facebook: target?.facebook.value,
        twitter: target?.twitter.value,
        linkedIn: target?.linkedIn.value,
        instagram: target?.instagram.value,
        phone: target?.phone.value,
        email: target?.email.value,
        showInHomePage:target?.showInHomePage.value,
        role:target?.role.value,
        youtube:target?.youtube.value
      };
      console.log("in", inputData );
      // Save data to database
      const res = await CreateNew(inputData, "team");

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
        <HeaderText text="Create Team Member" />
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
                                            <h5 className="mt-2 mb-0">Phone</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="phone"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="Phone"
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
                                              LinkedIn
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="linkedIn"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            placeholder="linkedIn"
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
                                              Email
                                            </h5>
                                          </label>
                                          <input
                                            type="email"
                                            name="email"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="email"
                                            // required
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Show In Home page
                                            </h5>
                                          </label>
                                          <select
                                            // type="email"
                                            name="showInHomePage"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            required
                                            defaultValue={true}
                                          >
                                            <option value={true} selected >Yes </option>
                                            <option value={false}>No </option>
                                          </select>
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
                                            <h5 className="mt-2 mb-0">Youtube</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="youtube"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="Youtube"
                                            // required
                                          />
                                        </div>
                                      </div>

                                      <div className="col-md-6">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Role
                                            </h5>
                                          </label>
                                          <select
                                            // type="email"
                                            name="role"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            required
                                            defaultValue={"management"}
                                          >
                                            <option value={"management"} selected >Management </option>
                                            <option value={"teamMember"}>Team Member </option>
                                          </select>
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
                                            <h5 className="mt-2 mb-0">Instagram</h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="instagram"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
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

export default CreateTeam;
