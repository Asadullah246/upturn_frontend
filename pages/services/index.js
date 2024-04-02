import Head from "next/head";
import React, { useEffect, useState } from "react";
import TopScrolling from "../../components/shared/ScrollToTop";
import SearchPopUp from "../../components/shared/SearchPopUp";
import PageHeader from "../../components/shared/pageHeader";
import Countup from "../../components/shared/Countup";
import ReadyToBuild from "../../components/home/ReadyToBuild";
import AllServices from "../../components/service/AllServices";
import { getData } from "../../components/shared/Api";

const Services = () => {
  return (
    <div>
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}

          <PageHeader pagename={"Services1"} />
          {/* End Page Title Section */}
          {/* Services Page Section */}
          <AllServices />
          {/* End Services Page Section */}
          {/* Clients Section */}
          <section className="clients-section">
            <div className="auto-container">
              <div className="sponsors-outer">
                {/*Sponsors Carousel*/}
                <ul className="sponsors-carousel owl-carousel owl-theme">
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/4.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/5.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* End Clients Section */}
          {/* Call To Action Section */}
          {/* <ReadyToBuild/> */}
          <section
            className="call-to-action-section"
            style={{
              backgroundImage:
                "url(/newupdate/images/background/map-pattern.png)",
            }}
          >
            <div
              className="circle-layer"
              style={{
                backgroundImage: "url(/newupdate/images/resource/cta-bg.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Title Column */}
                <div className="title-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>Take Your Site to Next Level At this moment!</h2>
                    <div className="text">
                      Make the Right Choice for Your Future. Choose Moto!
                    </div>
                    <a href="about.html" className="theme-btn btn-style-three">
                      <span className="txt">Start Now</span>
                    </a>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="/newupdate/images/resource/cta.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Call To Action Section */}
          {/* Counter Section */}

          <Countup />
          {/* <section className="counter-section margin-top">
            <div className="auto-container">
              <div className="inner-container">

                <div className="fact-counter">
                  <div className="row clearfix">

                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2500}
                              data-stop={230}
                            >
                              0
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">ACTIVE CLIENTS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box alternate">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={95}
                            >
                              0
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">TEAM ADVISORS</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={4000}
                              data-stop={820}
                            >
                              0
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">PROJECTS DONE</h4>
                        </div>
                      </div>
                    </div>

                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={25}
                            >
                              0
                            </span>
                            +
                          </div>
                          <h4 className="counter-title">GLORIOUS YEARS</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}

          {/* End Counter Section */}
          {/* Newsleter Section */}
          <section className="newsletter-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Newsletter</div>
                      <h2>Subscribe Our Newsletter</h2>
                    </div>
                    <div className="text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      donec tempus pellentesque dui vel tristique purus justo{" "}
                    </div>
                    <div className="newsletter-form">
                      <form method="post" action="https://///contact.html">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter Your Email"
                            required=""
                          />
                          <button
                            type="submit"
                            className="theme-btn btn-style-three"
                          >
                            <span className="txt">Subscribe Now</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img
                        src="/newupdate/images/resource/newsletter.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}
        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default Services;
