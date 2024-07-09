"user client";
import Head from "next/head";
import React from "react";
// import OwlCarousel from "react-owl-carousel";

// Dynamic import of react-owl-carousel
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false, // Disable server-side rendering
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import SearchPopUp from "../components/shared/SearchPopUp";
import TopScrolling from "../components/shared/ScrollToTop";
import CountUp from "react-countup";

import PageHeader from "../components/shared/pageHeader";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HeaderLinks from "../components/shared/HeaderLinks";
import Services from "../components/home/Services";
import ReadyToBuild from "../components/home/ReadyToBuild";
import ContactForm from "../components/shared/ContactForm";
import Countup from "../components/shared/Countup";
import TeamLeaders from "../components/home/TeamLeaders";
import Pricing from "../components/home/Pricing";
import Whatsapp from "../components/shared/Whatsapp";
import BlogSection from "../components/home/BlogSection";
import TestimonialSection from "../components/home/TestimonialSection";
import TargetMarketPlace from "../components/home/TargetMarketPlace";
import Management from "../components/home/Management";

const NewHome = () => {


  return (
    <div>
      {/* main content  */}

      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/* {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}

          <HeaderLinks />
          {/* End Main Header */}

          {/* Banner Section Four */}
          <section className="banner-section-four">
            <div className="main-slider-carousel ">
              <div
                className="slide"
                style={{
                  backgroundImage:
                    "url(/newupdate/images/main-slider/image-2.jpg)",
                }}
              >
                <div
                  className="dotted-layer"
                  style={{
                    backgroundImage:
                      "url(/newupdate/images/main-slider/dotted-layer-1.png)",
                  }}
                />
                <div className="auto-container">
                  <div className="row clearfix">
                    {/* Content Column */}
                    <div className="content-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        {/* <div className="title">What’s Your SEO Score</div> */}
                        <h1>
                        Elevate Your Marketing Strategy <br /> Expand Your Reach
                        </h1>
                        <p className="text-white ">
                        Unlock the Full Potential of Your Business with combination of strategic thinking and expertise solution.
                        </p>
                        {/* <p className="text-white">
                          Let’s put  the skin in the game!{" "}
                        </p> */}
                        <div className="btns-box">
                          <a
                            href="/contactUs"
                            className="theme-btn btn-style-eleven"
                          >
                            <span className="txt">Schedule A Call</span>
                          </a>
                          {/* <a
                            href="contact.html"
                            className="theme-btn btn-style-nine"
                          >
                            <span className="txt">Contact Now</span>
                          </a> */}
                        </div>
                      </div>
                    </div>
                    {/* Image Column */}
                    <div className="image-column col-lg-6 col-md-12 col-sm-12">
                      <div className="inner-column">
                        <div className="image">
                          <img
                            src="/newupdate/images/main-slider/content-image-2.png"
                            alt=""
                          />
                        </div>
                        <div className="images-icons parallax-scene-1">
                          <div className="image-1" data-depth="0.50">
                            <img
                              src="/newupdate/images/main-slider/content-image-3.png"
                              alt=""
                            />
                          </div>
                          <div className="image-2" data-depth="0.50">
                            <img
                              src="/newupdate/images/main-slider/content-image-4.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Waves Container */}
            <div>
              <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
              >
                <defs>
                  <path
                    id="gentle-wave"
                    d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                  />
                </defs>
                <g className="parallax">
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={0}
                    fill="rgba(255,255,255,0.7"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={3}
                    fill="rgba(255,255,255,0.5)"
                  />
                  <use
                    xlinkHref="#gentle-wave"
                    x={48}
                    y={5}
                    fill="rgba(255,255,255,0.3)"
                  />
                  <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                </g>
              </svg>
            </div>
            {/* Waves End */}
          </section>
          {/* End Banner Section */}
          {/* Services Section */}
          <section className="services-section style-two">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Service Block / Style Two */}
                <div  className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                    style={{minHeight:"385px"}}
                  >
                    <div className="color-layer" />
                    <div
                      className="pattern-layer-one"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern.png)",
                      }}
                    />
                    <div
                      className="pattern-layer-two"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern-2.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-shuttle" />
                    </div>
                    <h5>
                      <a href="content-marketing.html">Proof of Results</a>
                    </h5>
                    <div className="text">
                    We don't just promise results; we deliver them. Explore tangible proof from our real projects.
                    </div>
                    <a
                      href="/contentMarketing"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div  className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="150ms"
                    data-wow-duration="1500ms"
                    style={{minHeight:"385px"}}
                  >
                    <div className="color-layer" />
                    <div
                      className="pattern-layer-one"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern.png)",
                      }}
                    />
                    <div
                      className="pattern-layer-two"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern-2.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-globe" />
                    </div>
                    <h5>
                      <a href="content-marketing.html">Experience</a>
                    </h5>
                    <div className="text">
                    Experience is a priceless resource that money cannot afford. We stand out from the competition. In the SEO space with our three years of outstanding, data-driven results delivery.
                    </div>
                    <a
                      href="content-marketing.html"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div  className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="150ms"
                    data-wow-duration="1500ms"
                    style={{minHeight:"385px"}}
                  >
                    <div className="color-layer" />
                    <div
                      className="pattern-layer-one"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern.png)",
                      }}
                    />
                    <div
                      className="pattern-layer-two"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern-2.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-network" />
                    </div>
                    <h5>
                      <a href="content-marketing.html">Keep Your Groth</a>
                    </h5>
                    <div className="text">
                    A well-planned marketing strategy can significantly impact a company's growth trajectory. Our technique delights your audience and increases revenue. At our end, we assure you of continued support.
                    </div>
                    <a
                      href="content-marketing.html"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div  className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                    style={{minHeight:"385px"}}
                  >
                    <div className="color-layer" />
                    <div
                      className="pattern-layer-one"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern.png)",
                      }}
                    />
                    <div
                      className="pattern-layer-two"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/service-pattern-2.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-bar-chart" />
                    </div>
                    <h5>
                      <a href="content-marketing.html">Industry Experts</a>
                    </h5>
                    <div className="text">
                    We provide services to companies like Rokomari.com, BITM, BASIS, and many more. Our expertise knows very well how to generate consumers.
                    </div>
                    <a
                      href="content-marketing.html"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* About Section / Style Two */}
          <section className="about-section style-two">
            <div
              className="circle-layer"
              style={{
                backgroundImage:
                  "url(/newupdate/images/icons/about-circle.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={1}>
                      <img
                        src="/newupdate/images/resource/about-1.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">ABOUT US</div>
                      <h2>Unlock Your Business's Potential</h2>
                    </div>
                    <div className="bold-text">
                    Upturn Idea will assist you in reaching your financial and branding goals.
                    </div>
                    <div className="text">
                    Our expertise will provide the exact service you need to drive your brand long. We proved our efficiency in the last three years. Now, here to excel your brand at the peak
                    </div>
                    <a href="/aboutUs" className="theme-btn btn-style-eleven">
                      <span className="txt">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section / Style Two */}


          {/* Services Section Two */}
          <Services />
          {/* End Services Section Two */}
          {/* Counter Section */}
          <Countup />
          {/* End Counter Section */}
          {/* Call To Action Section */}
          <ReadyToBuild />
          {/* End Call To Action Section */}
          {/* Team Section Two */}
          <Management/>
          <TeamLeaders />
          {/* End Team Section Two */}
          {/* Testimonial Section */}
          <TestimonialSection/>

          {/* End Testimonial Section */}
          {/* Pricing Section */}
          <Pricing />
          {/* End Pricing Section */}
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
          {/* News Section */}
         <BlogSection/>
          {/* End News Section */}

            {/* new  */}
            <TargetMarketPlace/>
          {/* new  */}

          {/* contact form  */}
          <ContactForm />
          {/* end of contact form  */}
        </div>
        {/*End pagewrapper*/}

        {/* <TopScrolling /> */}

      </body>

      {/* main content ends  */}
    </div>
  );
};

export default NewHome;
