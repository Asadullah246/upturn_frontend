import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deleteData, getData, updateData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import HeaderText from "./HeaderText";
import EditModal from "./EditModal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditTeam from "./EditTeam";
import { getSorted } from "../shared/SortingData";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  overflow: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const TeamMembers = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("team");
      console.log("team", res?.data);
      const sortedData = getSorted(res?.data) 
      setBlogs(sortedData);
      return sortedData;
    };
    blogsData();
  }, [refresh]);

  const handleDelete = async (id) => {
    const res = await deleteData(id, "team");

    if (res?.status === "success") {
      ToastSuccess("Successfully Deleted");
      setRefresh(!refresh);
    } else {
      ToastError(res?.message || "Something error");
    }
  };

  const changeSerial = async (e,id) => {
    const data ={
      serial:e.target.value
    }
    const res = await updateData(data, `team/${id}`);
    if (res?.status === "success") {
      setRefresh(!refresh);
    } else {
      ToastError(res?.message || "Something error");
    }
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditTeam
            team={modalData}
            handleClose={handleClose}
            setRefresh={setRefresh}
          />
        </Box>
      </Modal>

      <div className="container">
        {/* image and title  */}
        <HeaderText text="Team Members" />

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
                <th>Designation</th>
                <th>Serial No</th>
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
                    <td>{blog?.name}</td>
                    <td>{blog?.designation}</td>
                    <td>
                      <input
                        defaultValue={blog?.serial}
                        type="number"
                        name="serial"
                        id=""
                        onChange={(e) => changeSerial(e,blog._id)}
                        style={{
                          backgroundColor: "gray",
                          color: "white",
                          width: "50px",
                          height: "30px",
                          borderRadius: "8px",
                          padding: "0 5px",
                        }}
                      />
                    </td>

                    <td className="text-end  ">
                      <div>
                        <button
                          onClick={() => {
                            setModalData(blog);
                            setOpen(true);
                          }}
                          className="btn btn-secondary px-3 me-2"
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-info"
                          onClick={() => handleDelete(blog?._id)}
                        >
                          Delete
                          {/* <img
                      className="ms-2"
                      src="https://i.ibb.co/KyMsfym/Vector-1.png"
                      alt="Vector-1"
                      border="0"
                    /> */}
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

export default TeamMembers;
