import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Projects = () => {
  return (
    <div>


      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}


          <PageHeader pagename={"Projects"} />
          {/* End Page Title Section */}
          {/* Gallery Section */}
          <section className="gallery-section">
            <div
              className="pattern-layer"
              style={{ backgroundImage: "url(/newupdate/images/resource/cta-bg.png)" }}
            />
            <div className="auto-container">
              {/* MixitUp Galery */}
              <div className="mixitup-gallery">
                <div className="sec-title">
                  <div className="clearfix">
                    <div className="pull-left">
                      <div className="title">RECENT PROJECTS</div>
                      <h2>Our Latest Case Works</h2>
                    </div>
                    <div className="pull-right">
                      {/*Filter*/}
                      <div className="filters clearfix">
                        <ul className="filter-tabs filter-btns clearfix">
                          <li
                            className="active filter"
                            data-role="button"
                            data-filter="all"
                          >
                            All
                          </li>
                          <li
                            className="filter"
                            data-role="button"
                            data-filter=".development"
                          >
                            Development
                          </li>
                          <li
                            className="filter"
                            data-role="button"
                            data-filter=".marketing"
                          >
                            Markeging
                          </li>
                          <li
                            className="filter"
                            data-role="button"
                            data-filter=".media"
                          >
                            Media
                          </li>
                          <li
                            className="filter"
                            data-role="button"
                            data-filter=".optimization"
                          >
                            Optimization
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter-list row clearfix">
                  {/* Gallery Block */}
                  <div className="gallery-block all mix optimization development media col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/1.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/1.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">System Project</div>
                        <h5>
                          <a href="projects-detail.html">
                            Movie Recommendation
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Block */}
                  <div className="gallery-block all mix optimization media marketing col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/2.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/2.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">Machine Learning</div>
                        <h5>
                          <a href="projects-detail.html">
                            Customer Segmentation
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Block */}
                  <div className="gallery-block all mix development development media col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/3.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/3.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">Web Project</div>
                        <h5>
                          <a href="projects-detail.html">Data Analysis</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Block */}
                  <div className="gallery-block all mix development marketing col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/4.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/4.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">Programming</div>
                        <h5>
                          <a href="projects-detail.html">Detection Project</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Block */}
                  <div className="gallery-block all mix optimization media development col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/5.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/5.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">Data Science</div>
                        <h5>
                          <a href="projects-detail.html">Data Scientist</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* Gallery Block */}
                  <div className="gallery-block all mix development development marketing col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <figure className="image-box">
                        <img src="/newupdate/images/gallery/6.jpg" alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a
                                href="images/gallery/6.jpg"
                                data-fancybox="gallery"
                                data-caption=""
                                className="icon flaticon-plus"
                              />
                            </div>
                          </div>
                        </div>
                      </figure>
                      <div className="lower-content">
                        <div className="title">Science Projects</div>
                        <h5>
                          <a href="projects-detail.html">Benefits Research</a>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-box text-center">
                  <a href="projects.html" className="theme-btn btn-style-three">
                    <span className="txt">View More</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Gallery Section */}
          {/* Newsleter Section */}
          <section className="newsletter-section style-two">
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
                      <form method="post" action="">
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

export default Projects;
