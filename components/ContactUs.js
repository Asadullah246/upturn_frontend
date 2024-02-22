import React from "react";
import Contact from "./Contact";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import design from "/styles/Home.module.css";
const ContactUs = () => {
  return (
    <section
      style={{ width: "85%", margin: "auto", marginTop: "0px" }}
      className={``}
    >
      <div className="">
        <div className={`row row-cols-1 row-cols-lg-2`}>
          <div className={`col mt-5`}>
            <Contact />
          </div>
          <div className={`col ps-md-4 mt-5  `}>
            <div className={`${styles.textWrapper}`}>
              <h4 className="color-primary  fw-bolder " style={{fontSize:"1.3rem"}}>CONTACT US</h4>
              <h2 className=" fw-bold">Questions or ideas?</h2>
              <p className="mt-3 ls-2 ">
                Unlock possibilities! Connect with us to explore solutions
                tailored to your needs. Let's collaborate and turn your vision
                into reality.
              </p>
            </div>
            <div className={styles.contentWrapper}>
              <div className={`d-flex gap-3 `}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/newIcons/gps.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p className="mb-0 pb-0 fw-bold  ">Address</p>
                  </b>
                  <p className=" ">
                    V-19 Noorjahan Road, Mohammadpur, Dhaka-1207
                  </p>
                </div>
              </div>
              <div className={`d-flex gap-3 ${styles.textWrapper}`}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/newIcons/email.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p className="mb-0 pb-0 fw-bold  ">Email</p>
                  </b>
                  <p>basiceducation360@gmail.com</p>
                </div>
              </div>
              <div className={`d-flex gap-3`}>
                <div className={styles.iconPadding}>
                  <span>
                    <Image
                      src="/newIcons/phone-call.png"
                      alt=""
                      height="50"
                      width="50"
                    />
                  </span>
                </div>
                <div>
                  <b>
                    <p className="mb-0 pb-0 fw-bold  ">Phone Number</p>
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
                  <p className="mt-2 fw-bold ">SOCIAL MEDIA</p>
                </b>

                <div className={`d-flex gap-3 align-items-center`}>
                  <a href="https://www.facebook.com/">
                    <Image
                      className={styles.link}
                      src="/newIcons/facebook.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.facebook.com/">
                    <Image
                      src="/newIcons/linkedin.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                  <a href="https://www.facebook.com">
                    <Image
                      src="/newIcons/twitter.png"
                      alt=""
                      width="50"
                      height="50"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`d-flex justify-content-spacebetween `}></div> */}
      </div>
    </section>
  );
};

export default ContactUs;
