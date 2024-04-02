import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import axios from "axios";
import { deleteData, getData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalService from "./ModalService";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:"80vw",
  height:"85vh",
  overflow:"scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Services = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState();

  const handleOpen = (data) => {
    setModalData(data);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("services");
      setBlogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, [refresh]);

  const handleDelete = async (id) => {
    const res = await deleteData(id, "blogs");

    if (res?.status === "success") {
      ToastSuccess("Successfully Deleted");
      setRefresh(!refresh);
    } else {
      ToastError(res?.message || "Something error");
    }
  };
  return (
    <div>
      {/* modal  */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <ModalService data={modalData} handleClose={handleClose} refresh={refresh} setRefresh={setRefresh} />
          </Box>
        </Modal>
      </div>

      {/* modal end */}

      <div className="container">
        {/* image and title  */}
        <HeaderText text="Services"/>

        {/* search and add add user button */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary ms-2"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end mt-sm-3 mt-ex-sm-3">
            {/* <button className="btn btn-warning shadow">Add New User</button> */}
          </div>
        </div>

        {/* table for user information  */}
        <div
          style={{ backgroundColor: "#E9C46A", borderRadius: "10px" }}
          className="p-3 mt-3"
        >
          <table className="table">
            <thead className="p-2" style={{ backgroundColor: "white" }}>
              <tr>
                <th>Image</th>
                <th>Name</th>
                {/* <th>Author</th> */}
                {/* <th>Phone Number</th> */}
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {blogs?.map((blog) => {
                return (
                  <tr key={blog?._id}>
                    <td>
                      <img src={blog?.image} height={50} width={60} alt="" />
                    </td>
                    <td>{blog?.name?.slice(0, 50)}</td>
                    {/* <td >{blog?.author?.name}</td> */}
                    {/* <td>0191xxxxxxx</td> */}
                    <td className="text-end d-flex justify-content-end gap-4 align-items-center">
                      <div>
                        <button
                          className="btn btn-primary px-4"
                          onClick={() => handleOpen(blog)}
                        >
                          Edit{" "}
                        </button>
                      </div>
                      <div>
                        <button
                          className="btn btn-info"
                          onClick={() => handleDelete(blog?._id)}
                        >
                          Delete{" "}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* next and previous arrow */}
          <div className="d-flex justify-content-end align-items-center">
            <div className="d-flex">
              <div className="d-flex me-1">
                <div className="mt-1">
                  <KeyboardArrowLeftIcon />
                  <KeyboardArrowLeftIcon />
                </div>
                <h5 className="btn">Pre</h5>
              </div>
              <div className="d-flex ms-1">
                <h5 className="btn">Next</h5>
                <div className="mt-1">
                  <KeyboardArrowRightIcon />
                  <KeyboardArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
