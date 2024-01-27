import React from "react";
import Contact from "./Contact";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import design from "/styles/Home.module.css";
const ContactUs = () => {
  return (
    <section className={`primary_background`}>
      <div className="container">
        <div className={`row`}>
          <div className={`col `}>
            <div className={`${styles.textWrapper}`}>
              <h1 className={design.h5}>Get in Touch</h1>
              <p>
                For Enroll problem or buying a project just any query just give
                us message
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={`d-flex gap-3 `}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/icon/location.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p>Address</p>
                  </b>
                  <p>123 Demo Avenue, New York, NY 10160, United States</p>
                </div>
              </div>
              <div className={`d-flex gap-3 ${styles.textWrapper}`}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/icon/email.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p>Email</p>
                  </b>
                  <p>basiceducation360@gmail.com</p>
                </div>
              </div>
              <div className={`d-flex gap-3`}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/icon/phone.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p>Phone Number</p>
                  </b>
                  <div>
                    <p>+88015 6830 8586</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialSection}>
              <div>
                <b>
                  <p className="mt-2">SOCIAL MEDIA</p>
                </b>

                <div className={`d-flex gap-3 align-items-center`}>
                  <a href="https://www.facebook.com/basiceducation0to100">
                    <Image
                      className={styles.link}
                      src="/icon/facebook.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.facebook.com/basiceducation0to100">
                    <Image
                      src="/icon/linkedin.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.facebook.com/basiceducation0to100">
                    <Image
                      src="/icon/whatsapp.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col`}>
            <Contact />
          </div>
        </div>
        {/* <div className={`d-flex justify-content-spacebetween `}></div> */}
      </div>
    </section>
  );
};

export default ContactUs;
