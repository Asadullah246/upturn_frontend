import React, { useEffect, useState } from "react";
import { getData, updateData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import { uploadImageToCloudinaryWithExist } from "../shared/uploadImageToCloudinary";

const Edit_user = () => {
  const [refresh, setRefresh] = useState(false);
  const [user, setUser] = useState();
  const [uploadingStatus, setUploadingStatus] = useState(false);

  useEffect(() => {
    const blogsData = async () => {
      const userId = localStorage.getItem("adminId");
      const res = await getData(`user/${userId}`);
      setUser(res?.data);
      return res?.data;
    };
    blogsData();
  }, [refresh]);

  const handleSubmit = async (e) => {
    setUploadingStatus(true);
    e.preventDefault();
    const target = e.target;
    const blogImage = target?.userImage?.files[0];

    try {

      // Upload blog image
      const blogImageLink = await uploadImageToCloudinaryWithExist(blogImage, (user?.image || ""));

      const inputData = {
        name: target?.userName?.value,
        email: target?.email?.value,
        password: target?.password?.value,
        image: blogImageLink
      };
      console.log("data", inputData);
      // Save data to database
      const res = await updateData(inputData, `user/${user?._id}`);
console.log("res", res );
      if (res?.status === "success") {
        setRefresh(!refresh)
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
            <h2>Edit User Info</h2>
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
                  <form onSubmit={handleSubmit}>
                    <div className="container mt-2">
                      <div className="col-md-12">
                        <div className="row justify-content-center">
                          <div>
                            {/* form for label and value */}
                            <div>
                              <div className="col-12 mb-3 ">
                                <label for="name" className="form-label">
                                  <h5 className="mt-2 mb-0">Name</h5>
                                </label>
                                <input
                                  type="text"
                                  className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                  id="name"
                                  name="userName"
                                  defaultValue={user?.name}
                                  placeholder="Enter Name"
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
                                              defaultValue={user?.email}
                                              placeholder="Enter your email address"
                                              required
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
                                                Password
                                              </h5>
                                            </label>
                                            <input
                                              type="password"
                                              className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                              id="mobile_number"
                                              defaultValue={user?.password}
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
                              name="userImage"
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


                        <button
                        type="submit"
                        disabled={uploadingStatus}
                        className="btn btn-info"
                      >
                        {uploadingStatus ? "Uploading" : "Submit"}
                      </button>
                      </div>
                    </div>
                  </form>
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
