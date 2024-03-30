import axios from "axios";
export const base ='http://localhost:5000'


// creating method

export const CreateNew = async (data, endpoint) => {
    try {
      const res = await axios.post(`${base}/api/v1/${endpoint}`, data);
      if (res) return res.data;
    } catch (error) {
      console.log("err is", error);
    }
  };
