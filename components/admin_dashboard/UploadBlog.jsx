import React, { useState } from "react";
import { CreateNew } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import uploadImageToCloudinary from "../shared/uploadImageToCloudinary";

const UploadBlog = () => {
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [descriptions, setDescriptions] = useState([
    { title: "", details: "" },
  ]);
  // const [authorImageLink, setAuthorImageLink]=useState(null)
  // const [blogImageLink, setBlogImageLink]=useState(null)

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const list = [...descriptions];
    list[index][name] = value;
    setDescriptions(list);
  };

  const handleAddDescription = () => {
    setDescriptions([...descriptions, { title: "", details: "" }]);
  };

  const handleRemoveDescription = (index) => {
    const list = [...descriptions];
    list.splice(index, 1);
    setDescriptions(list);
  };

  const handleSubmit = async (e) => {
    setUploadingStatus(true);
    e.preventDefault();
    const target = e.target;
    const authorImage = target?.authorImage?.files[0];
    const blogImage = target?.blogImage?.files[0];

    try {
      // Upload author image
      const authorImageLink = await uploadImageToCloudinary(authorImage);

      // Upload blog image
      const blogImageLink = await uploadImageToCloudinary(blogImage);

      const inputData = {
        title: target?.blogTitle.value,
        author: {
          name: target?.authorName.value,
          image: authorImageLink,
          designation: target?.authorDesignation.value,
          description: target?.authorDescription.value,
          links: {
            facebook: target?.authorFacebook.value,
            twitter: target?.authorTwitter.value,
            linkedIn: target?.authorLindedIn.value,
          },
        },
        image: blogImageLink,
        description: descriptions,
      };

      // Save data to database
      const res = await CreateNew(inputData, "blogs");

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
                                              Blog title
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="blogTitle"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="Title"
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
                                              Author Name
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="class_time"
                                            name="authorName"
                                            placeholder="Author Name"
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
                                              Author Designation
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="authorDesignation"
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="Designation"
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
                                              Author Facebook
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="authorFacebook"
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
                                              Author Twitter
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="authorTwitter"
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
                                              Author linkedIn
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="authorLindedIn"
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
                                <h5 className="mt-2 mb-0">
                                  Author Description
                                </h5>
                              </label>
                              <textarea
                                type="text"
                                name="authorDescription"
                                className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                id="name"
                                placeholder="description"
                                // cols={30}
                                // required
                              />
                            </div>

                            <div>
                              {descriptions.map((description, index) => (
                                <div key={index}>
                                  <div className="col-md-12">
                                    <div className="row justify-content-center">
                                      <div>
                                        <div>
                                          <div className="row">
                                            <div className="col-md-5">
                                              <div className="mb-3">
                                                <label
                                                  for="schedule"
                                                  className="form-label"
                                                >
                                                  <h5 className="mt-2 mb-0">
                                                    Blog section title
                                                  </h5>
                                                </label>
                                                <input
                                                  type="text"
                                                  className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                                  id="schedule"
                                                  placeholder="Title"
                                                  name="title"
                                                  value={description.title}
                                                  onChange={(e) =>
                                                    handleInputChange(index, e)
                                                  }
                                                  // required
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-5">
                                              <div className="mb-3">
                                                <label
                                                  for="class_time"
                                                  className="form-label"
                                                >
                                                  <h5 className="mt-2 mb-0">
                                                    Blog description
                                                  </h5>
                                                </label>

                                                <textarea
                                                  placeholder="Details"
                                                  name="details"
                                                  className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                                  value={description.details}
                                                  onChange={(e) =>
                                                    handleInputChange(index, e)
                                                  }
                                                />
                                              </div>
                                            </div>
                                            <div className="col-md-2">
                                              <div
                                                className=""
                                                style={{
                                                  height: "100%",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                }}
                                              >
                                                {index !== 0 && (
                                                  <button
                                                    className="btn btn-danger mt-3 "
                                                    onClick={() =>
                                                      handleRemoveDescription(
                                                        index
                                                      )
                                                    }
                                                  >
                                                    Remove
                                                  </button>
                                                )}
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              <p
                                className="btn btn-primary "
                                onClick={handleAddDescription}
                              >
                                Add
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  add for picture */}
                    <div className="row">
                      <div className="col-lg-6">
                        <h5 className="mt-2">Author Image</h5>
                        <div>
                          <input
                            className="d-flex justify-content-center w-100 p-5"
                            type="file"
                            name="authorImage"
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
                        <h5 className="mt-2">Blog Image</h5>
                        <input
                          className="d-flex justify-content-center w-100 p-5"
                          type="file"
                          name="blogImage"
                          id="profile_picture"
                          style={{
                            height: "150px",
                            backgroundColor: "#FFFFFF",
                            borderRadius: "15px",
                          }}
                        />
                      </div>
                    </div>
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
