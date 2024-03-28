"user client";
import React from "react";
import design from "../styles/Services.module.css";
import styles from "../styles/about.module.css";
import Link from "next/link";
import TopHeader from "../../components/shared/TopHeader";
import SupportIcon from "@mui/icons-material/Support";
import SectionTitle from "../../components/shared/SectionTitle";
import TopScrolling from "../../components/shared/ScrollToTop";
import SearchPopUp from "../../components/shared/SearchPopUp";

const aboutUs = () => {
  const data = [
    {
      title: "Leading in marketing",
      desc: "Knowledge of technologies rules better than anyone which we apply in our daily work",
      icon: "/newIcons/expert.png",
    },
    {
      title: "Leading in marketing",
      desc: "Knowledge of technologies rules better than anyone which we apply in our daily work",
      icon: "/newIcons/expert (1).png",
    },
  ];

  const teamData = [
    {
      name: "Mostafa Rayhan",
      image: "/mentor/mr_rayhan.jpg",
      designation: "Marketing Expert",
      linkedIn: "www.linkedIn.com",
      email: "sample@gmail.com",
      desc: "Project Manager with expertise in project management for IT products and services. Prioritising customer satisfactionwith an analytical approach.",
    },
    {
      name: "Mansur Haque",
      image: "/mentor/mansur.png",
      designation: "Project Manager",
      linkedIn: "www.linkedIn.com",
      email: "sample@gmail.com",
      desc: "Project Manager with expertise in project management for IT products and services. Prioritising customer satisfactionwith an analytical approach.",
    },
    {
      name: "Ratul",
      image: "/mentor/Ratul.png",
      designation: "Full Stack Developer",
      linkedIn: "www.linkedIn.com",
      email: "sample@gmail.com",
      desc: "Project Manager with expertise in project management for IT products and services. Prioritising customer satisfactionwith an analytical approach.",
    },
    {
      name: "Shadman Khan",
      image: "/mentor/formal_shadman.png",
      designation: "Full Stack Developer",
      linkedIn: "www.linkedIn.com",
      email: "sample@gmail.com",
      desc: " Project Manager with expertise in project management for IT products and services. Prioritising customer satisfactionwith an analytical approach.",
    },
  ];
  return (
    <div>
      <TopHeader pageName={"About Us"} />

      {/* hero section  */}
      <section className="" style={{ marginTop: "120px" }}>
        <div className="row">
          <div className="col-12 col-md-6 " style={{ position: "relative" }}>
            {/* <div className="expDiv bg-color-primary   ">
              <h5 className="">
                500 Student
              </h5>
            </div> */}
            <img
              src="/images/about/bg6.jpg"
              alt=""
              className="px-4"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="col-12 col-md-6 px-4">
            <h4 className="color-primary fw-bolder ">GET TO KNOW US</h4>
            <h2 className="fs-1 fw-bold">
              The Ultimate Website Design and Marketing Solutions
            </h2>
            <p className="mt-3 ls-2 ">
              There are many variations of passages of available but the
              majority have suffered alteration in some form, by injected hum
              randomised words which don't slightly.
            </p>

            {/* about services div  */}
            <div className="mt-5">
              {data?.map((d, index) => {
                return (
                  <div
                    key={index}
                    className="d-flex align-items-baseline gap-3 mb-3 "
                  >
                    <div>
                      {/* <SupportIcon
                    className=" color-primary "
                    style={{ height: "35px", width: "35px" }}
                  /> */}
                      <img src={d?.icon} alt="" width={50} height={50} />
                    </div>
                    <div>
                      <h5 className="text-uppercase fw-bold">{d?.title}</h5>
                      <p className="mt-3">{d?.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* about services div end */}
          </div>
        </div>
      </section>

      {/* end of hero section  */}

      <section className="" style={{ marginTop: "120px" }}>
        <SectionTitle text={"Our Services"}></SectionTitle>

        <div className=" py-4 ">
          <div className="custom-container">
            <div className="row g-4">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className={styles.svccard2}>
                  <div className={`${styles.serviceItem} text-center pt-3`}>
                    <div className="p-4 pb-3 pt-2  text-center ">
                      {/* <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i> */}
                      <img
                        src="/newIcons/leader.png"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="mb-3 mt-2 fw-bold ">
                        Skilled Instructors
                      </h5>
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
                    <div className="p-4 pb-3 pt-2  text-center ">
                      <img
                        src="/newIcons/travel-agency.png"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="mb-3 mt-2 fw-bold ">
                        Digital Agency Service
                      </h5>
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
                    <div className="p-4 pb-3 pt-2  text-center ">
                      <img
                        src="/newIcons/blueprint.png"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="mb-3 mt-2 fw-bold ">Home Projects</h5>
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
                    <div className="p-4 pb-3 pt-2  text-center ">
                      <img
                        src="/newIcons/folder-management.png"
                        alt=""
                        height={50}
                        width={50}
                      />
                      <h5 className="mb-3 mt-2 fw-bold ">
                        Turn Into Real Projects
                      </h5>
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
      </section>

      <section style={{ marginTop: "120px" }}>
        <SectionTitle text={"Our Dedicated Team"}></SectionTitle>
        <div className="custom-container">
          <div className="row">
            {teamData?.map((single, index) => {
              return (
                <div className="col-12 col-md-6 col-lg-3 p-4">
                  <div className="teamCard" key={index}>
                    <div className="teamDescDiv">
                      <h5 className=" mb-0  fw-bolder text-uppercase ">
                        {single?.name}
                      </h5>
                      <p className="mb-0 mt-3 text-white ">{single?.desc}</p>

                      <div className="mt-3 d-flex gap-3">
                        <a href={single.linkedIn}>
                          <img
                            src="/newIcons/linkedin.png"
                            alt=""
                            className="smallIcon"
                          />
                        </a>
                        <a href={`mailto:${single?.email}`}>
                          <img
                            src={"/newIcons/email.png"}
                            alt=""
                            className="smallIcon"
                          />
                        </a>
                      </div>
                    </div>
                    <img src={single?.image} alt="" className="teamCardImg" />
                    <div className="teamCardTextDiv">
                      <div className="TeamCardIconsDiv">
                        <div className="TeamCardIconsDivInside d-flex gap-2">
                          <a href={single.linkedIn}>
                            <img
                              src="/newIcons/linkedin.png"
                              alt=""
                              className="smallIcon"
                            />
                          </a>
                          <a href={`mailto:${single?.email}`}>
                            <img
                              src="/newIcons/email.png"
                              alt=""
                              className="smallIcon"
                            />
                          </a>
                        </div>
                      </div>

                      <div className="px-3 py-4 ">
                        <h5 className=" mb-0 color-primary fw-bolder text-uppercase ">
                          {single?.name}
                        </h5>
                        <p className="mb-0 ">{single?.designation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* <div>

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

      </div> */}
      <SearchPopUp />
      <TopScrolling />
    </div>
  );
};

export default aboutUs;
