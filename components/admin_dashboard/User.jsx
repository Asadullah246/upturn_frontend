import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const User = () => {
  return (
    <div className="container">
      {/* image and title  */}
      <div className="mb-4 d-flex align-items-center">
        <img
          className="me-3"
          src="https://i.ibb.co/VqL2CLG/Polygon-1.jpg"
          alt="Polygon-1"
          border="0"
          width="30"
          height="45"
        ></img>
        <h2>Users</h2>
      </div>

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
          <button className="btn btn-warning shadow">Add New User</button>
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
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Latif Hassan</td>
              <td>latifhassan@gmail.com</td>
              <td>Kalighat,Mirpur, Dhaka</td>
              <td>0191xxxxxxx</td>
              <td className="d-flex justify-content-around">
                <div>
                  <button className="btn btn-success">
                    Edit
                    <img
                      className="ms-2"
                      src="https://i.ibb.co/q1v598Y/tabler-edit.png"
                      alt="tabler-edit"
                      border="0"
                    />
                  </button>
                </div>
                <div>
                  <button className="btn btn-info">
                    Delete
                    <img
                      className="ms-2"
                      src="https://i.ibb.co/KyMsfym/Vector-1.png"
                      alt="Vector-1"
                      border="0"
                    />
                  </button>
                </div>
              </td>
            </tr>
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

export default User;
