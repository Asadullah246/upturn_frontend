import React from "react";
import design from "../styles/Services.module.css";
import styles from "../styles/about.module.css";
import Link from "next/link";
const aboutUs = () => {
  return (
    <div>
      <section className={`primary_background`}>
        <div className="container ">
          <div className={`card border-0 shadow  ${design.topCard}`}>
            <div className="text-center">
              <h1 className={design.topCardText}>About us</h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Service Start  */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className={styles.svccard2}>
                  <div className={`${styles.serviceItem} text-center pt-3`}>
                    <div className="p-4">
                      <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                      <h5 className="mb-3">Skilled Instructors</h5>
                      <p>
                        Our skilled instructors are passionate about sharing
                        their industry expertise with students worldwide. Join
                        us and learn from the best!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className={styles.svccard2}>
                  <div className={`${styles.serviceItem} text-center pt-3`}>
                    <div className="p-4">
                      <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                      <h5 className="mb-3">Digital Agency Service</h5>
                      <p>
                        We are a full-service digital agency offering web and
                        app development, AI solutions, and digital marketing
                        services to grow your business.
                        <br />
                        Contact us today.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className={styles.svccard2}>
                  <div className={`${styles.serviceItem} text-center pt-3`}>
                    <div className="p-4">
                      <i className="fa fa-3x fa-home text-primary mb-4"></i>
                      <h5 className="mb-3">Home Projects</h5>
                      <p>
                        Our Home Projects program empowers students to develop
                        critical skills aligned with their career aspirations.
                        Join us and achieve your professional goals!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className={styles.svccard2}>
                  <div className={`${styles.serviceItem} text-center pt-3`}>
                    <div className="p-4">
                      <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                      <h5 className="mb-3">Turn Into Real Projects</h5>
                      <p>
                        We will give the oportunity for some of our students on
                        real-life projects offer hands-on experience and the
                        chance to showcase your skills.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Service End  */}
      </section>
      <div>
        {/* About Start  */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src="/home/about.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  About Us
                </h6>
                <h1 className="mb-4">Welcome to Basic Education</h1>
                <p className="mb-4">
                  Basic Education is an online learning platform that provides
                  high-quality educational courses to students all around the
                  world. Our online courses cover a wide range of topics, from
                  academic subjects like math and science to professional
                  development courses in fields like business and technology.
                </p>
                <p className="mb-4">
                  Our courses are designed and created by expert instructors who
                  are passionate about sharing their knowledge and expertise. We
                  offer a diverse selection of courses to cater to different
                  learning needs, whether you're looking to enhance your skills,
                  pursue a new career, or simply learn for personal growth.
                </p>
                <div className="row gy-2 gx-4 mb-4">
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Wide range of courses
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Expert instructors
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Multimedia content
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Skilled Instructors
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Flexible learning
                    </p>
                  </div>
                  <div className="col-sm-6">
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      Affordable pricing
                    </p>
                  </div>
                </div>
                <Link href="" className={styles.buttonSize}>
                  <div className={styles.button}>Read More</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* About End  */}
      </div>
    </div>
  );
};

export default aboutUs;
