import React, { useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { deleteData, getData } from "../shared/Api";
import { ToastError, ToastSuccess } from "../shared/ToastAlerts";
import HeaderText from "./HeaderText";

const TeamMembers = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh]=useState(false)
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("team");
      setBlogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, [refresh]);

  const handleDelete=async(id)=>{
    const res = await deleteData(id, "team");

      if (res?.status === "success") {
        ToastSuccess("Successfully Deleted");
        setRefresh(!refresh)
      } else {
        ToastError(res?.message || "Something error");
      }

  }
  return (
    <div className="container">
      {/* image and title  */}
      <HeaderText text="Team Members"/>

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
              <button className="btn btn-outline-secondary ms-2" type="button">
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
              <th>Email</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
           {blogs?.map(blog=>{
            return (
              <tr key={blog?._id}>
              <td>
                <img src={blog?.image} height={50} width={60} alt="" />
              </td>
              <td>{blog?.name}</td>
              <td >{blog?.designation}</td>
              <td >{blog?.email}</td>
              {/* <td>0191xxxxxxx</td> */}
              <td className="text-end ">
                {/* <div>
                  <button className="btn btn-success">
                    Edit
                    <img
                      className="ms-2"
                      src="https://i.ibb.co/q1v598Y/tabler-edit.png"
                      alt="tabler-edit"
                      border="0"
                    />
                  </button>
                </div> */}
                <div>
                  <button className="btn btn-info" onClick={()=>handleDelete(blog?._id)}>
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
            )
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
  );
};

export default TeamMembers;
