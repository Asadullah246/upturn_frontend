import Head from "next/head";
import React, { useEffect, useState } from "react";
import SidebarServiceLinks from "../../../components/service/SidebarServiceLinks";
import SearchPopUp from "../../../components/shared/SearchPopUp";
import TopScrolling from "../../../components/shared/ScrollToTop";
import PageHeader from "../../../components/shared/pageHeader";
import { useRouter } from "next/router";
import { getData } from "../../../components/shared/Api";
import courses from "../../../public/data/courses.json";
import { Rating } from "@mui/material";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CourseAccordion from "../../../components/shared/CourseAccordion";

const ServiceDetails = () => {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const { slug } = router.query;
  const [service, setService] = useState();
  const [info, setInfo] = useState();
  const dataId = "660895de0608b63dc8814028";
  const [course, setCourse] = useState([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // useEffect(() => {
  //   const blogsData = async () => {
  //     const res = await getData(`websiteInfo/${dataId}`);
  //     setInfo(res?.data);
  //     return res?.data;
  //   };
  //   blogsData();
  // }, []);

  useEffect(() => {
    console.log("courses", courses);
    console.log("slug", slug);
    const singleCourse = courses.find((c) => c._id == slug);
    setCourse(singleCourse);
  }, [slug, courses]);

  if (!mounted) return null;

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}

          <PageHeader pagename={`Course`} />
          {/* End Page Title Section */}

          <div className="courseDetailsSection">
            <div className="courseHeader">
              <div className="headerDiv">
                <div className="textDiv">
                  <ul className="page-breadcrumb courseDetails">
                    <li>
                      <a href="/courses">Courses</a>
                    </li>
                    <li className="details">{"Details"}</li>
                  </ul>
                  <h1 className="cTitle">{course?.title}</h1>
                  <p className="shortDescCourse">{course?.short_description}</p>
                  <div className="ratingDiv">
                    <p>{course?.rating}</p>
                    <Rating
                      name="half-rating-read"
                      defaultValue={course?.rating || 4.5}
                      precision={0.5}
                      readOnly
                      id="rating"
                    />

                    <p className="ratingNumbers">
                      ({course?.total_rating} Ratings)
                    </p>
                    <p style={{ fontWeight: 600 }} className="studentsAmount">
                      {course?.students} Students
                    </p>
                  </div>
                </div>
                <div className="imageDiv">
                  <img src={course?.image} alt="" />
                </div>
              </div>
            </div>

            <div className="courseContentDiv">
              <div className="contentsSection">
                <div className="whatLearnDiv">
                  <h3 className="learnHeading">What you will learn </h3>
                  <p className="grayishColor">{course?.full_description}</p>
                  <div className="whatLearn">
                    {course?.learn?.map((l, index) => {
                      return (
                        <div className="singleLearn" key={index}>
                          <TaskAltOutlinedIcon
                            style={{ fontSize: "1.1em", color: "#1976D2" }}
                          />
                          <p
                            className="grayishColor"
                            style={{ marginBottom: 0, marginTop: "-4px" }}
                          >
                            {l}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <h3 className="courseContentSection">Course Content</h3>
                  <CourseAccordion course={course} />
                </div>
              </div>
              <div className="courseCardDSection">
                <div
                  style={{ display: "flex", justifyContent: "space-between", paddingBottom:"4px" }}
                >
                  <div style={{ display: "flex", gap:"5px" }}>
                    <p className="nmb">{course?.current_price}</p>
                    <del style={{marginBottom:"-6px"}}>{course?.actual_price}</del>
                  </div>
                  <p className="nmb courseTimeLeft"> 3 days left</p>

                </div>

                <a href="#"  className="theme-btn btn-style-five ms-1  mt-3 mb-5 text-center d-block">
          <span className="txt ">Buy Now</span>
        </a>

                <div
                  style={{ display: "flex", justifyContent: "space-between", paddingBottom:"4px", borderBottom:"2px solid #F1F1F1", marginTop:"20px" }}
                >
                   <p className="nmb courseTxt">Course length</p>
                  <p className="nmb courseTimeLeft2"> 20 hours</p>

                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", paddingBottom:"4px", borderBottom:"2px solid #F1F1F1", marginTop:"20px" }}
                >
                   <p className="nmb courseTxt">Enrolled</p>
                  <p className="nmb courseTimeLeft2"> 300</p>

                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between", paddingBottom:"4px", marginTop:"20px" }}
                >
                   <p className="nmb courseTxt">Skill level</p>
                  <p className="nmb courseTimeLeft2"> Basic</p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </body>
      {/* body end  */}
    </div>
  );
};

export default ServiceDetails;
