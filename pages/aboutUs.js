import Head from "next/head";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/shared/pageHeader";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import ScrollToTop from "../components/shared/ScrollToTop";

const AboutUs = () => {


  const [startCountUp, setStartCountUp] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setStartCountUp(true);
    }
  }, [inView]);

  return (
    <div >
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
      <body className="hidden-bar-wrapper"  ref={ref}  >
        <div className="page-wrapper">
          {/* Preloader */}

          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}
        <PageHeader pagename="About Us"/>
          {/* End Main Header */}

          {/* Services Section Three */}
          <section className="services-section-three style-two">
            <div
              className="pattern-layer-one"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-8.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-9.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage: "url(/newupdate/images/icons/icon-10.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Blocks Column */}
                <div className="blocks-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="row clearfix">
                      {/* Service Block Three */}
                      <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="inner-box wow fadeInUp"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="icon-box">
                            <span className="icon flaticon-badge" />
                          </div>
                          <h5>
                            <a href="content-marketing.html">Best Security</a>
                          </h5>
                          <div className="text">
                            We have seen great successes with everyone
                            companies.
                          </div>
                        </div>
                      </div>
                      {/* Service Block Three */}
                      <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="inner-box wow fadeInUp"
                          data-wow-delay="150ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="icon-box">
                            <span className="icon flaticon-chat-3" />
                          </div>
                          <h5>
                            <a href="content-marketing.html">Risk Manage</a>
                          </h5>
                          <div className="text">
                            Every business and industry requires an approach in
                            our Heand.
                          </div>
                        </div>
                      </div>
                      {/* Service Block Three */}
                      <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="inner-box wow fadeInUp"
                          data-wow-delay="0ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="icon-box">
                            <span className="icon flaticon-growth" />
                          </div>
                          <h5>
                            <a href="content-marketing.html">Growth Revenue</a>
                          </h5>
                          <div className="text">
                            You make sure you know how campaign is performing
                            Business
                          </div>
                        </div>
                      </div>
                      {/* Service Block Three */}
                      <div className="service-block-three col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="inner-box wow fadeInUp"
                          data-wow-delay="150ms"
                          data-wow-duration="1500ms"
                        >
                          <div className="icon-box">
                            <span className="icon flaticon-management" />
                          </div>
                          <h5>
                            <a href="content-marketing.html">Greate Support</a>
                          </h5>
                          <div className="text">
                            To generate highly focused leads ready to purchases
                            our service
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">WHY US CHOOSE NOW</div>
                      <h2>
                        We Provide the Best <br /> Facilites For Business
                      </h2>
                    </div>
                    <div className="bold-text">
                      From keyword research to technical auditing to site
                      migration, our team of technical SEOs are true experts in
                      their field.
                    </div>
                    <ul className="list-style-three">
                      <li>
                        We've been supporting WordPress since the beginning.
                      </li>
                      <li>
                        Perfect for large sites or agencies managing multiple
                        clients.
                      </li>
                      <li>
                        Our easy-to-use control panel and API let you spend
                      </li>
                    </ul>
                    <a href="/contactUs" className="theme-btn btn-style-five">
                      <span className="txt">Learn More</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section Three */}
          {/* Counter Section Two */}
          <section className="counter-section-two">
            <div className="auto-container">
              <div className="inner-container">
                {/* Fact Counter */}
                <div className="fact-counter-two">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="content">
                          <div className="icon flaticon-in-love" />
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={2500}
                              data-stop={230}
                            >

                            </span> */}
                            <CountUp  start={0}
                              end={500}
                              duration={4.75} />

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
                          <div className="icon flaticon-mentor" />
                          <div className="count-outer count-box alternate">
                            {/* <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={95}
                            >
                              0
                            </span> */}
                            <CountUp  start={0}
                              end={30}
                              duration={4.75} />
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
                          <div className="icon flaticon-target" />
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={4000}
                              data-stop={820}
                            >
                              0
                            </span> */}
                            <CountUp  start={0}
                              end={600}
                              duration={4.75} />
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
                          <div className="icon flaticon-united" />
                          <div className="count-outer count-box">
                            {/* <span
                              className="count-text"
                              data-speed={2000}
                              data-stop={25}
                            >
                              0
                            </span> */}
                            <CountUp  start={0}
                              end={7}
                              duration={4.75} />
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
          {/* End Counter Section Two */}
          {/* Mission Section */}
          <section className="mission-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div
                      className="image wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <img
                        src="/newupdate/images/resource/mission.png"
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
                      <div className="title">WHO WE ARE</div>
                      <h2>
                        To Change Your View For <br /> SEO Our Mission
                      </h2>
                    </div>
                    <div className="bold-text">
                      Merix is a brand of digital agency. Competen novate
                      synergstic vortas through forward strategic theme areas
                      Compelling extend super was that Proactive myocardinate
                      vertical strategic
                    </div>
                    <ul className="mission-list">
                      <li>
                        <span className="icon">
                          <img
                            src="/newupdate/images/icons/mission-1.png"
                            alt=""
                          />
                        </span>
                        If Google can’t crawl your site, it’s not going to rank
                        – but that doesn’t mean avoiding Javascript.
                      </li>
                      <li>
                        <span className="icon">
                          <img
                            src="/newupdate/images/icons/mission-2.png"
                            alt=""
                          />
                        </span>
                        For businesses which sell products online &amp; and
                        improve their product listings in the search results..
                      </li>
                      <li>
                        <span className="icon">
                          <img
                            src="/newupdate/images/icons/mission-3.png"
                            alt=""
                          />
                        </span>
                        If you’re investing in a new website it’s important to
                        ensure it’s built to succeed in the search results too.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section Three */}
          {/* Steps Section */}
          <section
            className="steps-section"
            style={{
              backgroundImage:
                "url(/newupdate/images/background/pattern-14.png)",
            }}
          >
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">HOW WE DO IT</div>
                <h2>
                  Steps to Build a Successful <br /> Digital Product
                </h2>
              </div>
              <div className="row clearfix">
                {/* Step Block */}
                <div className="step-block col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-box">
                      <div className="number">01</div>
                    </div>
                    <h6>Advertising and Marketing</h6>
                  </div>
                </div>
                {/* Step Block */}
                <div className="step-block col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-box">
                      <div className="number">02</div>
                    </div>
                    <h6>
                      Web <br /> Development
                    </h6>
                  </div>
                </div>
                {/* Step Block */}
                <div className="step-block col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-box">
                      <div className="number">03</div>
                    </div>
                    <h6>
                      Mobile App <br /> Development
                    </h6>
                  </div>
                </div>
                {/* Step Block */}
                <div className="step-block col-lg-3 col-md-6 col-sm-12">
                  <div
                    className="inner-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="icon-box">
                      <div className="number">04</div>
                    </div>
                    <h6>Search Engine Optimization</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Steps Section */}
          {/* Skill Section */}
          <section className="skill-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Counter Column */}
                <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Why Choose Us</div>
                      <h2>
                        We dedicate for Company <br /> with SEO work
                      </h2>
                    </div>
                    <div className="text">
                      From keyword research to technical auditing to site
                      migration, our team of technical SEOs are true experts in
                      their field.
                    </div>
                    {/* Skills */}
                    <div className="skills">
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">Keyword Research</div>
                          <div className="skill-percentage">
                            <div className="count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={70}
                              >
                                0
                              </span>
                              %
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="bar progress-line"
                              data-width={70}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">Technical SEO Audit</div>
                          <div className="skill-percentage">
                            <div className="count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={80}
                              >
                                0
                              </span>
                              %
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="bar progress-line"
                              data-width={80}
                            />
                          </div>
                        </div>
                      </div>
                      {/* Skill Item */}
                      <div className="skill-item">
                        <div className="skill-header clearfix">
                          <div className="skill-title">
                            Content Optimization
                          </div>
                          <div className="skill-percentage">
                            <div className="count-box">
                              <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={60}
                              >
                                0
                              </span>
                              %
                            </div>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="bar-inner">
                            <div
                              className="bar progress-line"
                              data-width={60}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img
                        src="/newupdate/images/
resource/skill.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Skill Section */}
          {/* Newsleter Section */}
          <section className="newsletter-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img
                        src="/newupdate/images/
resource/newsletter.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
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
                        action="https://html.themerange.net/merix/merix/contact.html"
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
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}
          {/* Main Footer */}
          <footer className="main-footer">
            <div
              className="pattern-layer"
              style={{
                backgroundImage:
                  "url(/newupdate/images/background/pattern-3.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage:
                  "url(/newupdate/images/background/pattern-4.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage:
                  "url(/newupdate/images/background/pattern-5.png)",
              }}
            />
            <div className="auto-container">
              {/*Widgets Section*/}
              <div className="widgets-section">
                <div className="row clearfix">
                  {/* Column */}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/* Footer Column */}
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget logo-widget">
                          <div className="logo">
                            <a href="index.html">
                              <img
                                src="/newupdate/images/
logo.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="text">
                            Our approach to SEO is uniquely built around what we
                            know works…and what we know doesn’t work. With over
                            200 verified factors in play.
                          </div>
                          {/* Social Box */}
                          <ul className="social-box">
                            <li>
                              <a href="#" className="fa fa-facebook-f" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-linkedin" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-twitter" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-google" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Footer Column */}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h4>Services</h4>
                          <ul className="list-link">
                            <li>
                              <a href="#">SEO for Small Business</a>
                            </li>
                            <li>
                              <a href="#">SEO for Local Services</a>
                            </li>
                            <li>
                              <a href="#">Enterprise SEO</a>
                            </li>
                            <li>
                              <a href="#">National SEO</a>
                            </li>
                            <li>
                              <a href="#">International SEO</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget gallery-widget">
                          <h4>instagram</h4>
                          <div className="widget-content">
                            <div className="images-outer clearfix">
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/1.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/2.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/3.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-3.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/4.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-4.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/1.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-5.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/2.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/
gallery/footer-gallery-thumb-6.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Footer Column */}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h4>Contact info</h4>
                          <ul className="list-style-two">
                            <li>
                              <span className="icon flaticon-wall-clock" />
                              Mon – Sat 10:00pm - 8:00pm
                            </li>
                            <li>
                              <span className="icon flaticon-phone-call" />
                              <a href="tel:+0987-654-321">0987 654 321</a>{" "}
                              <a href="tel:+0123-456-789">0123 456 789</a>
                            </li>
                            <li>
                              <span className="icon flaticon-email" />
                              <a href="mailto:Merix@gmail.com">
                                Merix@gmail.com
                              </a>
                            </li>
                            <li>
                              <span className="icon flaticon-maps-and-flags" />
                              16122 Collins Street West, Melbourne, VIC Srsars
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                <div className="copyright">
                  Copyright © 2020 Merix by{" "}
                  <a href="https://themeforest.net/user/themerange">
                    ThemeRange
                  </a>
                  . All Rights Reserved. All Rights Reserved.
                </div>
              </div>
            </div>
          </footer>
          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        {/* Color Palate / Color Switcher */}
        <div className="color-palate">
          <div className="color-trigger">
            <i className="fa fa-gear" />
          </div>
          <div className="color-palate-head">
            <h6>Choose Your Options</h6>
          </div>
          <h5>RTL Version</h5>
          <ul className="rtl-version option-box">
            {" "}
            <li className="rtl">RTL Version</li> <li>LTR Version</li>{" "}
          </ul>
          <h5>Boxed Version</h5>
          <ul className="box-version option-box">
            {" "}
            <li className="box">Boxed</li> <li>Full width</li>
          </ul>
          <h5>Want Sticky Header</h5>
          <ul className="header-version option-box">
            {" "}
            <li className="box">No</li> <li>Yes</li>
          </ul>
          <h5>Dark Verion</h5>
          <ul className="dark-version option-box">
            {" "}
            <li className="box">Yes</li> <li>No</li>
          </ul>
          <a href="#" className="purchase-btn">
            Purchase now $17
          </a>
          <div className="palate-foo">
            <span>
              You will find much more options and styling in admin panel.
            </span>
          </div>
        </div>
        {/* Search Popup */}
        <div className="search-popup">
          <button className="close-search style-two">
            <span className="flaticon-multiply" />
          </button>
          <button className="close-search">
            <span className="fa fa-arrow-up" />
          </button>
          <form
            method="post"
            action="https://html.themerange.net/merix/merix/blog.html"
          >
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Search Here"
                required=""
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>
        </div>
        {/* End Header Search */}
        {/* Scroll To Top */}
        {/* <div
          className="back-to-top scroll-to-target show-back-to-top"
          data-target="html"
        >
          TOP
        </div> */}
          <ScrollToTop/> 
      </body>
      {/* body end  */}
    </div>
  );
};

export default AboutUs;
