import Head from "next/head";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/shared/pageHeader";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import ScrollToTop from "../components/shared/ScrollToTop";
import CountManage from "../components/shared/CountManage";
import SearchPopUp from "../components/shared/SearchPopUp";
import TopScrolling from "../components/shared/ScrollToTop";
import ReadyToBuild from "../components/home/ReadyToBuild";
import { ToastSuccess } from "../components/shared/ToastAlerts";

const AboutUs = () => {


  const [startCountUp, setStartCountUp] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      setStartCountUp(true);
    }
  }, [inView]);


  const handleSubmit =(e)=>{
e.preventDefault()
ToastSuccess("Thank you for subscribe")
  } 

  return (
    <div >



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
                    We are desperate, dedicated, and keen to learn new things to prove ourselves. It grew even bigger in the last couple of years that goes beyond 60 years of cumulative experience.
                    </div>
                    <ul className="list-style-three">
                      <li>
                      We provide a complete digital marketing solution for all sorts of business.
                      </li>
                      <li>
                      Try our tailored SEO packages to rank better in the SERP.
                      </li>
                      <li>
                      Be competent in visually and grab the attention. We design your dream on the web.
                      </li>
                    </ul>
                    {/* <a href="/contactUs" className="theme-btn btn-style-five">
                      <span className="txt">Learn More</span>
                    </a> */}
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
                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
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
                              end={12}
                              duration={4.75} />

                            +
                          </div>
                          <h4 className="counter-title">Years Of Experience</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
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
                              end={1000}
                              duration={4.75} />
                            +
                          </div>
                          <h4 className="counter-title">Happy Clients</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}
                    <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
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
                              end={27}
                              duration={4.75} />
                            +
                          </div>
                          <h4 className="counter-title">Brains To Support</h4>
                        </div>
                      </div>
                    </div>
                    {/* Column */}

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
                      upTurnIdea is a brand of digital agency. Competen novate
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
                              {/* <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={70}
                              >
                                0
                              </span> */}
                                 <CountUp
                              start={0}
                              end={70}
                              duration={2.75}
                              delay={3}
                              ></CountUp>

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
                              {/* <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={80}
                              >
                                0
                              </span> */}
                                  <CountUp
                              start={0}
                              end={80}
                              duration={2.75}
                              delay={3}
                              ></CountUp>
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
                              {/* <span
                                className="count-text"
                                data-speed={2000}
                                data-stop={60}
                              >
                                0
                              </span> */}
                                  <CountUp
                              start={0}
                              end={60}
                              duration={2.75}
                              delay={3}
                              ></CountUp>
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
                        src="/newupdate/images/resource/skill.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Skill Section */}

          {/* ready to build */}
          <ReadyToBuild/>
          {/* end of ready to build */}

          {/* Newsleter Section */}
          <section className="newsletter-section">
            <div className="auto-container">
              <div className="row clearfix">
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
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Newsletter</div>
                      <h2>Subscribe Our Newsletter</h2>
                    </div>
                    <div className="text">
                    Elevate your online presence with cutting-edge digital solutions tailored to your business needs. Experience seamless integration of web development, SEO, and digital marketing strategies for optimal results.{" "}
                    </div>
                    <div className="newsletter-form">
                      <form
                        // method="post"
                        // action="https://///contact.html"
                        // action="#"
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter Your Email"
                            required
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

          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
      <SearchPopUp />
        <TopScrolling />

      </body>
      {/* body end  */}
    </div>
  );
};

export default AboutUs;
