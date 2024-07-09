import React, { useState } from "react";
import { CreateNew, updateData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import uploadImageToCloudinary from "../shared/uploadImageToCloudinary";
import HeaderText from "./HeaderText";

const EditTeam = ({team, handleClose, setRefresh}) => {
  const [uploadingStatus, setUploadingStatus] = useState(false);
  console.log("team data", team);

  const handleSubmit = async (e) => {
    setUploadingStatus(true);
    e.preventDefault();
    const target = e.target;
    const personImage = target?.personImage?.files[0];

    try {
      // Upload author image
      const personImageLink = await uploadImageToCloudinary(personImage);
      const checkingImgLink=()=>{
        if(personImageLink=="" || personImageLink== " " || personImageLink==undefined || personImageLink == null) {
          return team?.image;
        }
        else {
          return personImageLink ;
        }
      }

      const inputData = {
        name: target?.personName.value,
        image: checkingImgLink(),
        designation: target?.designation.value,
        description: target?.description.value,
        facebook: target?.facebook.value,
        twitter: target?.twitter.value,
        linkedIn: target?.linkedIn.value,
        phone: target?.phone.value,
        email: target?.email.value,
        showInHomePage:target?.showInHomePage.value,
        role:target?.role.value,
        youtube:target?.youtube.value
      };
      console.log("in", inputData );
      // Save data to database
      const res = await updateData(inputData, `team/${team?._id}`);

      if (res?.status === "success") {
        ToastSuccess("Successfully updated");
        handleClose()
        setRefresh() 
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
        <HeaderText text="Edit Team Member" />
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
                                            defaultValue={team?.name}
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
                                            defaultValue={team?.designation}
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
                                            defaultValue={team?.phone}
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
                                            defaultValue={team?.facebook}
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
                                            defaultValue={team?.twitter}
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
                                            defaultValue={team?.linkedIn}
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
                                            defaultValue={team?.email}
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
                                            defaultValue={team?.showInHomePage}
                                          >
                                            <option value={true} selected={team?.showInHomePage==true} >Yes </option>
                                            <option value={false} selected={team?.showInHomePage==false} >No </option>
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
                                            defaultValue={team?.youtube}
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
                                            defaultValue={team?.role}
                                          >
                                            <option value={"management"} selected={team?.role=="management"} >Management </option>
                                            <option value={"teamMember"} selected={team?.role=="teamMember"} >Team Member </option>
                                          </select>
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

export default EditTeam;
