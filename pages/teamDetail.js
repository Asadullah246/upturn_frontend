import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const TeamDetail = () => {
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
        <PageHeader pagename={"Team Details"}/>
          {/* Team Detail Section */}
          <section className="team-single-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-4 col-md-12 col-sm-12">
                  <div
                    className="inner-column wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="image">
                      <img src="/newupdate/images/resource/team-1.jpg" alt="" />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-8 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>
                      Monark Malocm{" "}
                      <span className="category">Web Developer</span>
                    </h2>
                    <ul className="post-meta">
                      <li>
                        <span className="icon flaticon-big-envelope" />{" "}
                        <a href="mailto:upTurnIdea@gmail.com">upTurnIdea@gmail.com</a>
                      </li>
                      <li>
                        <span className="icon flaticon-phone-call" />{" "}
                        <a href="tel:999-999-9999">999 - 999 - 9999</a>
                      </li>
                      <li>
                        <span className="icon fa fa-whatsapp" />{" "}
                        <a href="tel:000-000-0000">000 - 000 - 0000</a>
                      </li>
                    </ul>
                    <div className="text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem
                        in ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce laoreet, ligula Lorem ipsum dolor sit amet, Fusce
                        laoreet in ligula consectetur dolor non nulla
                        porttitorcondimentum tincidunt,
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce laoreet, ligula Lorem ipsum dolor sit amet, Lorem
                        in ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce laoreet, ligula Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                    <div className="row clearfix">
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-style-three">
                          <li>SEO for Small Business</li>
                          <li>SEO for Local Services</li>
                          <li>Enterprise SEO</li>
                          <li>National SEO</li>
                        </ul>
                      </div>
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <ul className="list-style-three">
                          <li>Professional Approach</li>
                          <li>High Quality Work</li>
                          <li>Satisfaction Guarantee</li>
                          <li>Online Payment</li>
                        </ul>
                      </div>
                    </div>
                    {/* Social Box */}
                    <ul className="social-icon-one">
                      <li>
                        <a href="#" className="fa fa-facebook-f" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-twitter" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-linkedin" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-google" />
                      </li>
                      <li>
                        <a href="#" className="fa fa-whatsapp" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Team Detail Section */}
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
          {/* Main Footer */}

          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default TeamDetail;
