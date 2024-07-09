import axios from "axios";
export const base = "http://localhost:5000";
// export const base = "https://backend.upturnidea.com"; 


// admin routes -----------------------------------------------------------------------------------

// creating method

export const CreateNew = async (data, endpoint) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const res = await axios.post(`${base}/api/v1/${endpoint}`, data, {
      headers,
    });
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};
export const updateData = async (data, endpoint) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    const res = await axios.patch(`${base}/api/v1/${endpoint}`, data, {
      headers,
    });
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};
// data getting method
export const getData = async (endpoint) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const res = await axios.get(`${base}/api/v1/${endpoint}`, { headers });
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};

// deleting method
export const deleteData = async (id, endpoint) => {
  try {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
    const res = await axios.delete(`${base}/api/v1/${endpoint}/${id}`, {
      headers,
    });
    if (res) return res.data;
  } catch (error) {
    console.log("err is", error);
  }
};




// end of admin routes --------------------------------------------------------------------------------------
