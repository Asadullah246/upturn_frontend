
import React, { useEffect, useState } from "react";
import { CreateNew, updateData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import uploadImageToCloudinary, { uploadImageToCloudinaryWithExist } from "../shared/uploadImageToCloudinary";

const ModalService = ({data, handleClose, refresh , setRefresh}) => {
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [descriptions, setDescriptions] = useState([
    { title: "", details: "" },
  ]);

  useEffect(()=>{
    setDescriptions(data?.description)
  },[data])

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
    const blogImage = target?.serviceImage?.files[0];

    try {

      // Upload blog image
      const blogImageLink = await uploadImageToCloudinaryWithExist(blogImage, data?.image);

      const inputData = {
        name: target?.serviceName.value,
        shortDescription: target?.shortDescription.value,
        image: blogImageLink,
        description: descriptions,
      };
      console.log("data", inputData);
    //   return ;
      // Save data to database
    //   const res = await CreateNew(inputData, "services");
      const res = await updateData(inputData, `services/${data?._id}`);

      if (res?.status === "success") {
        setRefresh(!refresh) 
        ToastSuccess("Successfully updated");

        handleClose()
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

          <h2>Edit Service</h2>
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
                                      <div className="col-md-12">
                                        <div className="mb-3">
                                          <label
                                            for="schedule"
                                            className="form-label"
                                          >
                                            <h5 className="mt-2 mb-0">
                                              Service Name
                                            </h5>
                                          </label>
                                          <input
                                            type="text"
                                            name="serviceName"
                                            defaultValue={data?.name}
                                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                            id="schedule"
                                            placeholder="name"
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
                                <h5 className="mt-2 mb-0">
                                  Short Description
                                </h5>
                              </label>
                              <textarea
                                type="text"
                                name="shortDescription"
                                defaultValue={data?.shortDescription}
                                className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                                id="name"
                                placeholder="description"
                                required

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
                                                    title
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
                                                    Description
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

                      <div className="col-lg-12">
                        <h5 className="mt-2">Service Image</h5>
                        <input
                          className="d-flex justify-content-center w-100 p-5"
                          type="file"
                          name="serviceImage"
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

export default ModalService;

