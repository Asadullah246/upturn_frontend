import styles from "../styles/Home.module.css";
import Image from "next/image";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Rating } from "@mui/material";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
const Footer = () => {
  return (
    <>
      <section style={{ background: "#1D1D1D", marginTop: "120px" }}>
        <footer className="container py-5 text-white text-center text-lg-start">
          <div className="row ">
            <div className="col-lg-3 col-md-6  ">
              <div className="d-flex align-items-center  gap-2">
                <img src="/mainLogo.png" width="44px" height="49px" />
                <h3 className="mb-0 color-secondary fw-bold">Upturn Idea</h3>
              </div>
              <h4 className={"mt-3"}>Contact Us: </h4>
              <p className="grayis fs-6" style={{}}>
                Sikder Real Estate, Tali Office Road, Rayer Bazar, Dhaka 1209,
                Bangladesh.
              </p>
              <div className="mt-4 ">
                <div className="hoverEffect cursor-pointer d-flex align-items-center gap-3 my-2">
                  <LocalPhoneIcon />
                  <span className=" fs-6 mb-0 ">0192945898548</span>
                </div>
                <div className="hoverEffect cursor-pointer d-flex align-items-center gap-3 my-2">
                  <EmailIcon />
                  <span className=" fs-6 mb-0 ">sample@email.com</span>
                </div>
              </div>

              {/* <div>
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
              </div> */}
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h2 style={{fontWeight:700}}>Our Courses</h2>
              <div className="mt-3">
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis  hoverEffect">
                  <KeyboardArrowRightIcon className="" style={{fontWeight:"900", fontSize:"1.8rem", }} />
                  <span>Web Development</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>Digital Marketing</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>Wordpress Development</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>Web Design</span>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h2 style={{fontWeight:700}}>Important Links</h2>
              <div className="mt-3">
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis  hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>Home</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>About Us</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>Our Services</span>
                </a>
                <a href="#" className="d-flex align-items-center gap-1 aTag grayis hoverEffect">
                  <KeyboardArrowRightIcon style={{fontWeight:"900", fontSize:"1.8rem"}} />
                  <span>News</span>
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ">
             <div className="custom-border p-2">
             <h3 style={{fontWeight:700}}>Our Student Reviews</h3>
             <div className="d-flex align-items-center justify-content-between">
               <div className="d-flex  align-items-center gap-2">
                <p className="mb-0 grayis">4.9</p>
                <Rating name="read-only" value={5} readOnly />
               </div>
               <span className="mb-0 grayis">
               1009 reviews
               </span>
             </div>

             </div>
             <div className="mt-4">
             <h4 style={{fontWeight:700}}>Social Links</h4>
             <div className="d-flex align-items-center gap-2">

             </div>
             </div>

            </div>
          </div>

          <div className="text-center p-3">
            Copyright © 2024 Upturn idea. All rights reserved.
            {/* <a className="text-white" href="https://m...content-available-to-author-only...p.com/">MDBootstrap.com</a> */}
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
