import React, { useState } from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import { base } from "../components/shared/Api";
import axios from "axios";
import { ToastError } from "../components/shared/ToastAlerts";
import { useRouter } from 'next/router';

function Login() {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      rememberMe: rememberMe,
    };
    console.log("data", data, rememberMe);

    try {
      const res = await axios.post(`${base}/api/v1/user/login`, data);
      localStorage.setItem('token', res.data.token);
      console.log("res", res);
      router.push('/admin');
    } catch (error) {
      console.log("err", error );
      ToastError(error?.message || "Something wrong")
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 mx-auto mt-5">
          {/* logo and welcome */}
          <div>
            <h2 className="text-center">WELCOME TO UPTURN IDEA</h2>
            {/* <p className="text-center">
              Create the ultimate learning experience
            </p> */}
          </div>
          <div>
            <div className="container mt-5">
              <form onSubmit={handleSubmit} className="row">
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div>
                      <div>
                        <div className="mb-3">
                          <label for="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label for="Password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                            id="Password"
                            name="password"
                            placeholder="Enter Your Password"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <input
                      className="mb-3"
                      type="checkbox"
                      name="vehicle1"
                      value="Bike"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <p className="ms-2">Remember me</p>
                  </div>
                  <div>
                    <p>Forgot password</p>
                  </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
                  <button type="submit" class="btn btn-warning">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
