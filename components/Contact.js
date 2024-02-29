import React from "react";
import styles from "/styles/contact.module.css";
import design from "/styles/Home.module.css";
import CustomButton from "./shared/CustomButton";

const Contact = () => {
  return (
    <div className="">
      {/* <div className="text-center">
        <h1>Contact Us</h1>
        <p>Contact us for any query</p>
      </div> */}
      <div className={styles.formBackground}>
        <div>
          <div className="mb-4">
            <h4 className="color-primary fw-bolder " style={{fontSize:"1.3rem"}} >FILL UP THE FORM!</h4>
            <h2 className=" fw-bold">Get a call within 30 minutes</h2>
            <p className="mt-3 ls-2 ">
              Let us know the pain point of your business, our team will get
              back within 30 minutes in working days, holidays are exceptional.
            </p>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <form>
                    <div className={styles.formInfo}>
                      <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                          <label>
                            Name
                            <span className={styles.required_label}>*</span>
                          </label>
                          <br />
                          <input
                            className={styles.inputForm}
                            id="name"
                            required
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                          <label for="exampleInputEmail1">
                            Email{" "}
                            <span className={styles.required_label}>*</span>
                          </label>
                          <br />
                          <input
                            className={styles.inputForm}
                            type="email"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                        <label>
                        Subject <span className={styles.required_label}>*</span>
                      </label>
                      <br />
                      <input
                        className={styles.inputForm}
                        type="text"
                        placeholder="Subject"
                        required
                      />
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                        <label>
                        Phone <span className={styles.required_label}>*</span>
                      </label>
                      <br />
                      <input
                        className={styles.inputForm}
                        type="number"
                        placeholder="Your Phone Number"
                        required
                      />
                        </div>
                        <div className="col-12  mb-4">
                        <label>
                        Comment or Message
                        <span className={styles.required_label}>*</span>
                      </label>
                      <br />
                      <textarea
                        name="comment"
                        id="comment"
                        className={styles.inputForm}
                        placeholder="Details what you need to say"
                        required
                        rows={5}
                      />
                        </div>

                      </div>


                      <div className="mt-3">
                        {/* <button className={`${styles.button}`}>Submit</button> */}
                        <CustomButton
              style={{marginTop:"0px", borderRadius:"0px", padding:"8px 40px", fontSize:"1.1rem"}}
              className=""
              text={"Submit"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
