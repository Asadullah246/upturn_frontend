import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Services1 = () => {
  return (
    <div>
      <Head>
        {/* font  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        ></link>

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

      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}

          <PageHeader pagename={"Services1"}/>
          {/* End Page Title Section */}
          {/* Services Page Section */}
          <section className="services-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-pie-chart" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/contentMarketing">Content Marketing</a>
                    </h5>
                    <div className="text">
                      You can provide the answers that your potential customers
                      are trying to find, so you can become the industry.
                    </div>
                    <a
                      href="/contentMarketing"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-line-chart" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/socialMarketing">Social Marketing</a>
                    </h5>
                    <div className="text">
                      Create and manage top-performing social campaigns and
                      start developing a dedicated customer fan base.
                    </div>
                    <a
                      href="/socialMarketing"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-search-1" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/seo">SEO Optimization</a>
                    </h5>
                    <div className="text">
                      Get more website traffic, more customers, and more online
                      visibility with powerful SEO services.
                    </div>
                    <a
                      href="/seo"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-bar-chart" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/appDevelopment">App Development</a>
                    </h5>
                    <div className="text">
                      Create, publish, and promote engaging content to generate
                      more traffic and build a dedicated community.
                    </div>
                    <a
                      href="/appDevelopment"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-gear" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/webDevelopment">Web Development</a>
                    </h5>
                    <div className="text">
                      Your website has to impress your visitors within just a
                      few seconds. If it runs slow, if it feels outdated.
                    </div>
                    <a
                      href="/webDevelopment"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div>
                </div>
                {/* Service Block Four */}
                <div className="service-block-four col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className="icon flaticon-cloud-computing" />
                      <div
                        className="icon-five"
                        style={{
                          backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                        }}
                      />
                    </div>
                    <h5>
                      <a href="/advertising">PPC Advertising</a>
                    </h5>
                    <div className="text">
                      You can provide the answers that your potential customers
                      are trying to find, so you can become the industry.
                    </div>
                    <a
                      href="/advertising"
                      className="arrow-icon flaticon-arrow-pointing-to-right"
                    />
                  </div> 
                </div>
              </div>
            </div>
          </section>
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
          <section
            className="call-to-action-section"
            style={{
              backgroundImage: "url(/newupdate/images/background/map-pattern.png)",
            }}
          >
            <div
              className="circle-layer"
              style={{ backgroundImage: "url(/newupdate/images/resource/cta-bg.png)" }}
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
          <section className="counter-section margin-top">
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
                    {/* Column */}
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
                    {/* Column */}
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
                    {/* Column */}
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
          </section>
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
                      <form
                        method="post"
                        action="https://///contact.html"
                      >
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
                      <img src="/newupdate/images/resource/newsletter.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}


        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </body>
      {/* body end  */}
    </div>
  );
};

export default Services1;

