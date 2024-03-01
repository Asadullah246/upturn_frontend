import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
function SingUp() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6">
          {/* div for image */}
          <div>
            <h2 className="text-center">Don’t have an Account?</h2>
          </div>

          <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
            <button type="submit" class="btn btn-warning">
              REGISTER
            </button>
          </div>
          <div>
            <img src="/pages/src/sign_up_image.png" alt=" image" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* logo and welcome */}
          <div>
            <h2 className="text-center">WELCOME TO BASIC EDUCATION</h2>
            <p className="text-center">
              Create the ultimate learning experience
            </p>
          </div>
          <div>
            <div className="container mt-2">
              <div className="row">
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div>
                      <form>
                        <div className="mb-3">
                          <label for="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control shadow-sm p-2 mb-1 bg-body rounded"
                            id="email"
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
                            placeholder="Enter Your Password"
                            required
                          />
                        </div>
                      </form>
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
                    />
                    <p className="ms-2">Remember me</p>
                  </div>
                  <div>
                    <p>Forgot password</p>
                  </div>
                </div>
                <div class="d-flex justify-content-center align-items-center mt-2 mb-5">
                  <button type="submit" class="btn btn-warning">
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchPopUp />
      <TopScrolling />
    </div>
  );
}

export default SingUp;
