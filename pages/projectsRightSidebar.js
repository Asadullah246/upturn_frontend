import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const ProjectsRightSidebar = () => {
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
          <PageHeader pagename={"Projects Right Sidebar"}/>
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    {/* Gallery Block */}
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    {/* Gallery Block */}
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    {/* Gallery Block */}
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                    <div className="gallery-block col-lg-6 col-md-6 col-sm-12">
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
                  </div>
                </div>
                {/* Sidebar Side */}
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Search */}
                    <div className="sidebar-widget search-box">
                      <form
                        method="post"
                        action="https://///contact.html"
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
                            <span className="icon fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* Categories Widget */}
                    <div className="sidebar-widget categories-widget">
                      <div className="sidebar-title">
                        <h4>Categories</h4>
                      </div>
                      <div className="widget-content">
                        <ul className="blog-cat">
                          <li>
                            <a href="#">
                              Content Marketing <span>( 01 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Social Marketing <span>( 25 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              App Development <span>( 66 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              SEO Optimization <span>( 12 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Web Development <span>( 11 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              PPC Advertising <span>( 02 )</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Categories Widget */}
                    <div className="sidebar-widget popular-posts">
                      <div className="sidebar-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="widget-content">
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-1.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              Google now disregards overlooks all links.
                            </a>
                          </div>
                          <div className="post-info">November 21, 2020</div>
                        </article>
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-2.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </div>
                          <div className="post-info">November 28, 2020</div>
                        </article>
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-3.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              A Guide to Google SEO <br /> Algorithm Updates
                            </a>
                          </div>
                          <div className="post-info">December 04, 2020</div>
                        </article>
                      </div>
                    </div>
                    {/* Author Widget */}
                    <div className="sidebar-widget author-widget">
                      <div
                        className="widget-content"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/author-bg.jpg)",
                        }}
                      >
                        <div className="image">
                          <img src="/newupdate/images/resource/author-7.jpg" alt="" />
                        </div>
                        <div className="name">Pablo Villalpando</div>
                        <div className="text">
                          I got lucky because I never gave up the search. Are
                          you quitting too soon? Or, are you willing to pursue
                          luck with a vengeance?
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
                    {/* Instagram Widget */}
                    <div className="sidebar-widget instagram-widget">
                      <div className="sidebar-title">
                        <h4>Instagram</h4>
                      </div>
                      <div className="widget-content">
                        <div className="clearfix">
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-1.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-2.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-3.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-4.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-5.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-6.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    {/* Popular Posts */}
                    <div className="sidebar-widget popular-tags">
                      <div className="sidebar-title">
                        <h4>Tags</h4>
                      </div>
                      <div className="widget-content">
                        <a href="#">Business</a>
                        <a href="#">Marketing</a>
                        <a href="#">SEO</a>
                        <a href="#">SEO</a>
                        <a href="#">SMM</a>
                        <a href="#">Solution</a>
                        <a href="#">Tips</a>
                        <a href="#">Startup</a>
                        <a href="#">Strategy</a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* Clients Section */}
          <section className="clients-section style-two">
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
          {/* Main Footer */}
          <footer className="main-footer">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-3.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-4.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-5.png)",
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
                              <img src="/newupdate/images/logo.png" alt="" />
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-1.jpg"
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-2.jpg"
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-3.jpg"
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-4.jpg"
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-5.jpg"
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
                                    src="/newupdate/images/gallery/footer-gallery-thumb-6.jpg"
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
        <SearchPopUp />
        <TopScrolling />
      </body>
      {/* body end  */}
    </div>
  );
};

export default ProjectsRightSidebar;
