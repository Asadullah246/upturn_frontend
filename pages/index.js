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


const NewHome = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Head>
        {/* font  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />

        {/* font end */}

        {/* styles  */}
        <link rel="stylesheet" href="/newupdate/css/animate.css" />
        <link rel="stylesheet" href="/newupdate/css/animation.css" />
        <link rel="stylesheet" href="/newupdate/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/color-switcher-design.css"
        />
        <link rel="stylesheet" href="/newupdate/css/custom-animate.css" />
        <link rel="stylesheet" href="/newupdate/css/flaticon.css" />
        <link rel="stylesheet" href="/newupdate/css/font-awesome.css" />
        <link rel="stylesheet" href="/newupdate/css/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.bootstrap-touchspin.css"
        />
        <link rel="stylesheet" href="/newupdate/css/jquery.fancybox.min.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.mCustomScrollbar.min.css"
        />
        <link rel="stylesheet" href="/newupdate/css/owl.css" />
        <link rel="stylesheet" href="/newupdate/css/responsive.css" />
        <link rel="stylesheet" href="/newupdate/css/style.css" />

        {/* styles end  */}

        {/* js  */}
        <script src="/newupdate/js/appear.js"></script>
        <script src="/newupdate/js/bootstrap.min.js"></script>
        <script src="/newupdate/js/color-settings.js"></script>
        <script src="/newupdate/js/jquery-ui.js"></script>
        <script src="/newupdate/js/jquery.bootstrap-touchspin.js"></script>
        <script src="/newupdate/js/jquery.countdown.js"></script>
        <script src="/newupdate/js/jquery.fancybox.js"></script>
        <script src="/newupdate/js/jquery.js"></script>
        <script src="/newupdate/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/newupdate/js/jquery.paroller.min.js"></script>
        <script src="/newupdate/js/mixitup.js"></script>
        <script src="/newupdate/js/nav-tool.js"></script>
        <script src="/newupdate/js/owl.js"></script>
        <script src="/newupdate/js/parallax.min.js"></script>
        <script src="/newupdate/js/popper.min.js"></script>
        <script src="/newupdate/js/script.js"></script>
        <script src="/newupdate/js/tilt.jquery.min.js"></script>
        <script src="/newupdate/js/validate.js"></script>
        <script src="/newupdate/js/wow.js"></script>

        {/* js end */}
      </Head>

      {/* main content  */}

      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}

          <HeaderLinks/>
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
                        Digital Marketing with <br /> Skin in the Game
                        </h1>
                        <p className="text-white ">With a decade of experience in the digital industry, we proved that the combination of strategic thinking and expertise creates fascinating results.</p>
                        <p className="text-white">Let’s put the skin in the game! </p>
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
                <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
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
                    Every SEO company says that they can deliver you results, but we don’t just say but also show you the proof from our real projects.
                    </div>
                    <a
                      href="/contentMarketing"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="150ms"
                    data-wow-duration="1500ms"
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
                    Experience is such a thing that you can’t make with money. Our 12+ years of experience of excellent data-driven results make us different from all other SEO companies.
                    </div>
                    <a
                      href="content-marketing.html"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="150ms"
                    data-wow-duration="1500ms"
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
                     Your company will groth continusely. Our recent result prove this. We will continue support you till you want.
                    </div>
                    <a
                      href="content-marketing.html"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block / Style Two */}
                <div className="service-block style-two col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
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
                    We are led by biggest industry experts in Bangladesh who give services to the biggest Bangladeshi companies like Rokomari.com, BITM, BASIS and many more.
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
                      <h2>Grow Your Business</h2>
                    </div>
                    <div className="bold-text">
                      Over 12 years upTurnIdea helping companies reach their
                      financial and branding goals.
                    </div>
                    <div className="text">
                    Uptern Idea helps you achieve more sales and revenue from our Digital Marketing services. As we are in the industry for more than 12 years now (from 2012) we have grown high-level expertise in this industry.
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
        <Services/> 
          {/* End Services Section Two */}
          {/* Counter Section */}
          <section className="counter-section style-two">
            <div className="auto-container">
              <div className="inner-container">
                {/* Fact Counter */}
                <div className="fact-counter">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={2500}
                              data-stop={230}
                            >
                              0
                            </span> */}
                            <CountUp
                              start={0}
                              end={230}
                              duration={2.75}
                              // delay={3}
                            ></CountUp>
                            +
                          </div>
                          <h4 className="counter-title">ACTIVE CLIENTS</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box alternate">
                            {/* <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={95}
                            >
                              0
                            </span> */}
                            <CountUp
                              start={0}
                              end={90}
                              duration={2.75}
                              // delay={3}
                            ></CountUp>
                            +
                          </div>
                          <h4 className="counter-title">TEAM ADVISORS</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="600ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={4000}
                              data-stop={820}
                            >
                              0
                            </span> */}
                            <CountUp
                              start={0}
                              end={730}
                              duration={2.75}
                              // delay={3}
                            ></CountUp>
                            +
                          </div>
                          <h4 className="counter-title">PROJECTS DONE</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="900ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={25}
                            >
                              0
                            </span> */}
                            <CountUp
                              start={0}
                              end={730}
                              duration={2.75}
                              // delay={3}
                            ></CountUp>
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
          </section>
          {/* End Counter Section */}
          {/* Call To Action Section */}
          <section
            className="call-to-action-section style-two"
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
                    <a href="/aboutUs" className="theme-btn btn-style-eleven">
                      <span className="txt">Lets Start</span>
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
          {/* Team Section Two */}
          <section className="team-section-two">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Our Team</div>
                <h2>Our Expert Leadership</h2>
              </div>
              <div className="row clearfix">
                {/* Team Block Two */}
                <div className="team-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <ul className="team-social-box">
                      <li className="youtube">
                        <a href="#" className="fa fa-youtube" />
                        <span className="social-name">youtube</span>
                      </li>
                      <li className="linkedin">
                        <a href="#" className="fa fa-linkedin" />
                        <span className="social-name">linkedin</span>
                      </li>
                      <li className="facebook">
                        <a href="#" className="fa fa-facebook-f" />
                        <span className="social-name">facebook</span>
                      </li>
                      <li className="twitter">
                        <a href="#" className="fa fa-twitter" />
                        <span className="social-name">twitter</span>
                      </li>
                    </ul>
                    <div className="image">
                      <a href="/teamDetail">
                        <img
                          src="/newupdate/images/resource/team-12.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <a href="/teamDetail">Christina Tores</a>
                      </h3>
                      <div className="designation">CEO of Company</div>
                    </div>
                  </div>
                </div>
                {/* Team Block Two */}
                <div className="team-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <ul className="team-social-box">
                      <li className="youtube">
                        <a href="#" className="fa fa-youtube" />
                        <span className="social-name">youtube</span>
                      </li>
                      <li className="linkedin">
                        <a href="#" className="fa fa-linkedin" />
                        <span className="social-name">linkedin</span>
                      </li>
                      <li className="facebook">
                        <a href="#" className="fa fa-facebook-f" />
                        <span className="social-name">facebook</span>
                      </li>
                      <li className="twitter">
                        <a href="#" className="fa fa-twitter" />
                        <span className="social-name">twitter</span>
                      </li>
                    </ul>
                    <div className="image">
                      <a href="/teamDetail">
                        <img
                          src="/newupdate/images/resource/team-13.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <a href="/teamDetail">Jacken Mike</a>
                      </h3>
                      <div className="designation">General Manager</div>
                    </div>
                  </div>
                </div>
                {/* Team Block Two */}
                <div className="team-block-two col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <ul className="team-social-box">
                      <li className="youtube">
                        <a href="#" className="fa fa-youtube" />
                        <span className="social-name">youtube</span>
                      </li>
                      <li className="linkedin">
                        <a href="#" className="fa fa-linkedin" />
                        <span className="social-name">linkedin</span>
                      </li>
                      <li className="facebook">
                        <a href="#" className="fa fa-facebook-f" />
                        <span className="social-name">facebook</span>
                      </li>
                      <li className="twitter">
                        <a href="#" className="fa fa-twitter" />
                        <span className="social-name">twitter</span>
                      </li>
                    </ul>
                    <div className="image">
                      <a href="/teamDetail">
                        <img
                          src="/newupdate/images/resource/team-14.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="lower-content">
                      <h3>
                        <a href="/teamDetail">Regina Blackly</a>
                      </h3>
                      <div className="designation">CTO of Company</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Team Section Two */}
          {/* Testimonial Section */}
          <section className="testimonial-section">
            <div
              className="icon-layer-one"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
              }}
            />
            <div
              className="icon-layer-two"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-7.png)",
              }}
            />
            <div
              className="icon-layer-three"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-8.png)",
              }}
            />
            <div
              className="icon-layer-four"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-9.png)",
              }}
            />
            <div
              className="icon-layer-five"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-10.png)",
              }}
            />
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Real Testimonials</div>
                <h2>
                  What They Say About Our <br /> Company?
                </h2>
                <div className="text">
                  We know how important customer experience is for a busines and
                  therefore, <br /> we trive to make your company excel in this.
                </div>
              </div>
              <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
              >
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img
                          src="/newupdate/images/resource/author-1.png"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="text">
                        I had so much fun working with your specialists on my
                        business project that we will come back soom!
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Margaret Sunsan</h6>
                        <div className="designation">Develper</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img
                          src="/newupdate/images/resource/author-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star dark" />
                      </div>
                      <div className="text">
                        i liked working with these creative guys, who know
                        everything about quality design, innovations and
                        usability,
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Eizabeth Blackwell</h6>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img
                          src="/newupdate/images/resource/author-1.png"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="text">
                        I had so much fun working with your specialists on my
                        business project that we will come back soom!
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Margaret Sunsan</h6>
                        <div className="designation">Develper</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img
                          src="/newupdate/images/resource/author-2.png"
                          alt=""
                        />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star dark" />
                      </div>
                      <div className="text">
                        i liked working with these creative guys, who know
                        everything about quality design, innovations and
                        usability,
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Eizabeth Blackwell</h6>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </section>
          {/* End Testimonial Section */}
          {/* Pricing Section */}
          <section className="pricing-section style-three">
            <div
              className="pattern-layer"
              style={{
                backgroundImage:
                  "url(/newupdate/images/background/pattern-1.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage:
                  "url(/newupdate/images/background/pattern-20.png)",
              }}
            />
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Packages</div>
                <h2>Our Pricing Table</h2>
                <div className="text">
                  We take a consultative approach to every client engagement and
                  find actionable <br /> solutions that will help your
                  organization achieve the best outcomes.
                </div>
              </div>
              <div className="pricing-tabs tabs-box">
                {/*Tabs Container*/}
                <div className="tabs-content">
                  {/*Tab*/}
                  <div className="tab active-tab" id="prod-monthly">
                    <div className="content">
                      <div className="row clearfix">
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$69.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eleven">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-1.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Economy</div>
                            <div className="price">$79.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-six">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer style-two"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-3.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$89.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-eight">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-2.png)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Tab*/}
                  <div className="tab" id="prod-yearly">
                    <div className="content">
                      <div className="row clearfix">
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$69.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-five">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-1.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Economy</div>
                            <div className="price">$79.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-six">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer style-two"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-3.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$89.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-three">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/images/background/price-pattern-2.png)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Tab Btns*/}
                <div className="buttons-outer">
                  <ul className="tab-buttons clearfix">
                    <li data-tab="#prod-monthly" className="tab-btn active-btn">
                      Monthly
                    </li>
                    <li data-tab="#prod-yearly" className="tab-btn">
                      Yearly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
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
          <section className="news-section">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/newupdate/images/resource/cta-bg.png)",
              }}
            />
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title">
                <div className="clearfix">
                  <div className="pull-left">
                    <div className="title">OUR BLOG</div>
                    <h2>Our Latest Media</h2>
                    <div className="text">
                      Our campaigns get your business in front of the right
                      people at the <br /> right time to increase organic
                      traffic and boost engagement.
                    </div>
                  </div>
                  <div className="pull-right">
                    <a href="/blog" className="theme-btn btn-style-eleven">
                      <span className="txt">All News</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row clearfix">
                {/* News Block / Style Two */}
                <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="/newupdate/images/resource/news-1.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="/newsDetails"
                              className="icon flaticon-unlink"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-user" /> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-calendar" /> November
                            21, 2020
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="/newsDetails">
                          Google now disregards or overlooks all reciprocal
                          links
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* News Block / Style Two */}
                <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInUp"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="/newupdate/images/resource/news-2.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="/newsDetails"
                              className="icon flaticon-unlink"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-user" /> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-calendar" /> November
                            21, 2020
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="/newsDetails">
                          Absolute Links vs. Relative Links – SEO Intrinsic
                          Value
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* News Block / Style Two */}
                <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInRight"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="/newupdate/images/resource/news-3.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="/newsDetails"
                              className="icon flaticon-unlink"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-meta">
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-user" /> Pablo
                            Villalpando
                          </a>
                        </li>
                        <li>
                          <a href="/newsDetails">
                            <span className="icon fa fa-calendar" /> November
                            21, 2020
                          </a>
                        </li>
                      </ul>
                      <h5>
                        <a href="/newsDetails">
                          How to increase your ROI through scientific SEM?
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End News Section */}
        </div>
        {/*End pagewrapper*/}

        <SearchPopUp />
        <TopScrolling />
      </body>

      {/* main content ends  */}
    </div>
  );
};

export default NewHome;
