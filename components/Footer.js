import styles from "../styles/Home.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <section style={{ background: "#1D1D1D" }}>
        <footer className="container text-white text-center text-lg-start">
          <div className="row ">
            <div className="col-lg-5 col-md-12 mt-4 mb-md-0">
              <img src="/home/short_logo.png" width="134px" height="129px" />
              <h3 className={styles.footerH3}>Basic Education</h3>
              <h4 className={styles.footerH4}>Contact Us: </h4>
              <p className={styles.footerP}>basiceducation360@gmail.com</p>

              <div>
                <a href="https://w...content-available-to-author-only...k.com/basiceducation0to100">
                  <img
                    className={styles.footerIcon}
                    src="/home/Group 138.png"
                  />
                </a>

                <a href="">
                  <img
                    className={styles.footerIcon}
                    src="/home/Group 137.png"
                  />
                </a>

                <a href="">
                  <img
                    className={styles.footerIcon}
                    src="/home/Vector (7).png"
                  />
                </a>

                <a href="">
                  <img
                    className={styles.footerIcon}
                    src="/home/Group 139.png"
                  />
                </a>

                <a href="">
                  <img
                    className={styles.footerIcon}
                    src="/home/Group 173.png"
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-7 col-md-6 mt-5 mb-md-0">
              <h1 className={styles.footerH1}>
                Develop
                <span className="m-2" style={{ color: "#FFFFFF" }}>
                  Your Inner
                </span>
                Skill
              </h1>
              <p className={styles.footerP}>
                Every student has different needs and talents, and we are aware
                of this, which is why we develop a great and distinctive
                curriculum that is the perfect match for each and every student.
              </p>
              <p className={styles.footerP}>
                <a className={styles.footerlink} href="/services">
                  Our Services
                </a>
                |
                <a className={styles.footerlink} href="/courses">
                  Our Courses
                </a>
                |
                <a className={styles.footerlink} href="/virtual">
                  Virtual Classroom
                </a>
              </p>
              <p className={styles.footerP}>
                <a className={styles.footerlink} href="/terms-and-conditions">
                  Terms & Conditions
                </a>
                |
                <a className={styles.footerlink} href="/privacy-policy">
                  Privacy & Policy
                </a>
                |
                <a className={styles.footerlink} href="/contact">
                  Contact Us
                </a>
              </p>
            </div>
          </div>

          <div className="text-center p-3">
            Copyright © 2022 Basic Education Pvt. Ltd. All rights reserved.
            {/* <a className="text-white" href="https://m...content-available-to-author-only...p.com/">MDBootstrap.com</a> */}
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
