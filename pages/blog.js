import Head from "next/head";
import React from "react";
import PageHeader from "../components/shared/pageHeader";
import SearchPopUp from "../components/shared/SearchPopUp";
import TopScrolling from "../components/shared/ScrollToTop";

const Blog = () => {
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
        <PageHeader pagename={"Blogs"}/>
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Google now disregards or overlooks all reciprocal
                              links
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Absolute Links vs. Relative Links – SEO Intrinsic
                              Value
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Google now disregards or overlooks all reciprocal
                              links
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Absolute Links vs. Relative Links – SEO Intrinsic
                              Value
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Google now disregards or overlooks all reciprocal
                              links
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Absolute Links vs. Relative Links – SEO Intrinsic
                              Value
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Google now disregards or overlooks all reciprocal
                              links
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              Absolute Links vs. Relative Links – SEO Intrinsic
                              Value
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
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
                                  href="news-detail.html"
                                  className="icon flaticon-unlink"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="lower-content">
                          <ul className="post-meta">
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-user" /> Pablo
                                Villalpando
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">
                                <span className="icon fa fa-calendar" />{" "}
                                November 21, 2020
                              </a>
                            </li>
                          </ul>
                          <h5>
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Post Share Options */}
                  <div className="styled-pagination text-center">
                    <ul className="clearfix">
                      <li className="prev">
                        <a href="#">
                          <span className="fa fa-angle-left" />{" "}
                        </a>
                      </li>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li className="active">
                        <a href="#">02</a>
                      </li>
                      <li>
                        <a href="#">03</a>
                      </li>
                      <li className="next">
                        <a href="#">
                          <span className="fa fa-angle-right" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Sidebar Side */}
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Search */}
                    <div className="sidebar-widget search-box">
                      <form
                        method="post"
                        action="https://html.themerange.net/merix/merix/contact.html"
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
       
        </div>
        {/*End pagewrapper*/}
        {/* Color Palate / Color Switcher */}
        <SearchPopUp />
        <TopScrolling />
      </body>

      {/* body end  */}
    </div>
  );
};

export default Blog;
