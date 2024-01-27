import React from "react";
import styles from "/styles/contact.module.css";
import design from "/styles/Home.module.css";

const Contact = () => {
  return (
    <div className="container">
      {/* <div className="text-center">
        <h1>Contact Us</h1>
        <p>Contact us for any query</p>
      </div> */}
      <div className={styles.formBackground}>
        <div>
          <div className="mb-4">
            <h2>Send a Message</h2>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <form>
                    <div className={styles.formInfo}>
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
                      <br />
                      <label for="exampleInputEmail1">
                        Email <span className={styles.required_label}>*</span>
                      </label>
                      <br />
                      <input
                        className={styles.inputForm}
                        type="email"
                        placeholder="Email Address"
                        required
                      />
                      <br />
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
                      <br />
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
                      />
                      <div className="mt-5">
                        <button className={`${styles.button}`}>Submit</button>
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
