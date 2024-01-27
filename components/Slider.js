import Image from "next/image";
import React, { CSSProperties } from "react";
import styles from "../styles/Home.module.css";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderHome = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 3,
  };
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(100% - 60px)",
    cursor: "pointer",
  };
  const indicatorStyles = {
    background: "#f7c465",
  };

  return (
    <div className={`container`}>
      <div className={`${styles.slider_container} `}>
        {/* <Slider {...settings}> */}
        <Carousel
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          showThumbs={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const defStyle = {
              margin: "0px 6px",
              border: "none",
              transition: "0.3s",
              backgroundColor: "#F8C365",
              borderRadius: "50%",
              height: "15px",
              width: "15px",
              cursor: "pointer",
            };
            const style = isSelected
              ? {
                  ...defStyle,
                  backgroundColor: "#F8C365",
                  borderRadius: "50%",
                  height: "20px",
                  width: "20px",
                }
              : { ...defStyle };
            return (
              <button
                style={style}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                {/* {index} */}
              </button>
            );
          }}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <div
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: "calc(50% - 150px)" }}
              >
                <Image
                  src="/home/slideLeft.svg"
                  alt=""
                  height="58"
                  width="51"
                />
              </div>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <div
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: "calc(50% - 150px)" }}
              >
                <Image
                  src="/home/slideRight.svg"
                  alt=""
                  height="58"
                  width="51"
                />
              </div>
            )
          }
        >
          <div
            className={`d-md-flex justify-content-center align-items-center`}
          >
            <div className={styles.headerSlider_Component}>
              <div className={styles.slider_left}>
                <Image
                  src="/home/slidercontent.png"
                  alt=""
                  height="326"
                  width="382"
                  contain
                />
              </div>
              <div className={styles.slider_right}>
                <h2 className={styles.span_heading_text}>
                  <span className={styles.span_text}>Live Classes</span> In Our
                  Own Virtual Classroom &
                  <span className={styles.span_text}> Doubt Resolution</span>{" "}
                  Support.
                </h2>
                <p className={styles.slider_paragraph}>
                  Virtual class will help to enrich our knowledge precisely and
                  make a student feel comfortable as a physical classroom.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`d-md-flex justify-content-center align-items-center`}
          >
            <div className={styles.headerSlider_Component}>
              <div className={styles.slider_left}>
                <Image
                  src="/home/secoundSlide.png"
                  alt=""
                  height="326"
                  width="400"
                  contain
                />
              </div>
              <div className={styles.slider_right}>
                <h2 className={styles.span_heading_text}>
                  <span className={styles.span_text}>Best-Quality Courses</span>{" "}
                  On The Most Affordable
                  <span className={styles.span_text}> Learning Platform.</span>
                </h2>
                <p className={styles.slider_paragraph}>
                  Our goal at “Basic Education” is to democratize access to
                  high-quality education and facilitate career advancement for
                  everyone.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`d-md-flex justify-content-center align-items-center`}
          >
            <div className={styles.headerSlider_Component}>
              <div className={styles.slider_left}>
                <Image
                  src="/home/thirdslide.png"
                  alt=""
                  height="326"
                  width="382"
                />
              </div>
              <div className={styles.slider_right}>
                <h2 className={styles.span_heading_text}>
                  <span className={styles.span_text}>Best Mentors</span> Career
                  Mentoring
                  <span className={styles.span_text}> Sessions.</span>
                </h2>
                <p className={styles.slider_paragraph}>
                  To assist you in preparing and outlining your career path,
                  schedule a personalized career mentoring session with industry
                  leaders.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`d-md-flex justify-content-center align-items-center`}
          >
            <div className={styles.headerSlider_Component}>
              <div className={styles.slider_left}>
                <Image
                  src="/home/fourthslide.svg"
                  alt=""
                  height="326"
                  width="382"
                />
              </div>
              <div className={styles.slider_right}>
                <h2 className={styles.span_heading_text}>
                  <span className={styles.span_text}>Build</span> Your Ideal
                  <span className={styles.span_text}> career</span> With Basic
                  Education.
                </h2>
                <p className={styles.slider_paragraph}>
                  With our accredited courses, acquire knowledge that can help
                  you land a job, and make an impression with a perfect resume.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`d-md-flex justify-content-center align-items-center`}
          >
            <div className={styles.headerSlider_Component}>
              <div className={styles.slider_left}>
                <Image
                  src="/home/fifthslide.svg"
                  alt=""
                  height="326"
                  width="382"
                />
              </div>
              <div className={styles.slider_right}>
                <h2 className={styles.span_heading_text}>
                  <span className={styles.span_text}>Detailed Practice</span>{" "}
                  Module in a Structured
                  <span className={styles.span_text}> Curriculum.</span>
                </h2>
                <p className={styles.slider_paragraph}>
                  All of our courses were developed after extensive discussions
                  with educators, industry experts, and recruiters. Each course
                  combines a number of practice modules to prepare you for roles
                  and interviews.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default SliderHome;
