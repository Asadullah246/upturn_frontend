import Head from "next/head";
import React from "react";
import TopScrolling from "../../components/shared/ScrollToTop";
import SearchPopUp from "../../components/shared/SearchPopUp";

const BlogLeftSidebar = () => {
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
          <header className="main-header">
            {/*Header-Upper*/}
            <div className="header-upper">
              <div className="auto-container clearfix">
                <div className="pull-left logo-box">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo.png" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div className="nav-outer clearfix">
                  {/*Mobile Navigation Toggler*/}
                  <div className="mobile-nav-toggler">
                    <span className="icon flaticon-menu" />
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div
                      className="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <a href="#">Home</a>
                          <ul>
                            <li>
                              <a href="/">Homepage One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Homepage Two</a>
                            </li>
                            <li>
                              <a href="index-3.html">Homepage Three</a>
                            </li>
                            <li>
                              <a href="index-4.html">Homepage Four</a>
                            </li>
                            <li>
                              <a href="index-5.html">Homepage Five</a>
                            </li>
                            <li>
                              <a href="index-6.html">Homepage Six</a>
                            </li>
                            <li className="dropdown">
                              <a href="#">Header Styles</a>
                              <ul>
                                <li>
                                  <a href="/">Header Style One</a>
                                </li>
                                <li>
                                  <a href="index-2.html">Header Style Two</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Header Style Three</a>
                                </li>
                                <li>
                                  <a href="index-4.html">Header Style Four</a>
                                </li>
                                <li>
                                  <a href="index-5.html">Header Style Five</a>
                                </li>
                                <li>
                                  <a href="index-6.html">Header Style Six</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">About</a>
                          <ul>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="price.html">Price</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-detail.html">Team Detail</a>
                            </li>
                            <li>
                              <a href="testimonial.html">Testimonial</a>
                            </li>
                            <li>
                              <a href="comming-soon.html">Comming Soon</a>
                            </li>
                            <li>
                              <a href="terms.html">Terms &amp; Condition</a>
                            </li>
                            <li>
                              <a href="privacy.html">Privacy &amp; Policy</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="content-marketing.html">
                                Content Marketing
                              </a>
                            </li>
                            <li>
                              <a href="social-marketing.html">
                                Social Marketing
                              </a>
                            </li>
                            <li>
                              <a href="app-development.html">App Development</a>
                            </li>
                            <li>
                              <a href="seo.html">SEO Optimization</a>
                            </li>
                            <li>
                              <a href="web-development.html">Web Development</a>
                            </li>
                            <li>
                              <a href="advertising.html">PPC Advertising</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Projects</a>
                          <ul>
                            <li>
                              <a href="projects.html">Projects</a>
                            </li>
                            <li>
                              <a href="projects-left-sidebar.html">
                                Projects Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="projects-right-sidebar.html">
                                Projects Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="projects-detail.html">Projects Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown has-mega-menu">
                          <a href="#">Pages</a>
                          <div className="mega-menu">
                            <div className="mega-menu-bar row clearfix">
                              <div className="column col-lg-3 col-md-4 col-sm-12">
                                <h3>About Us</h3>
                                <ul>
                                  <li>
                                    <a href="about.html">About Us</a>
                                  </li>
                                  <li>
                                    <a href="faq.html">Faq</a>
                                  </li>
                                  <li>
                                    <a href="price.html">Price</a>
                                  </li>
                                  <li>
                                    <a href="team.html">Team</a>
                                  </li>
                                  <li>
                                    <a href="team-detail.html">Team Detail</a>
                                  </li>
                                  <li>
                                    <a href="testimonial.html">Testimonial</a>
                                  </li>
                                  <li>
                                    <a href="comming-soon.html">Comming Soon</a>
                                  </li>
                                  <li>
                                    <a href="terms.html">
                                      Terms &amp; Condition
                                    </a>
                                  </li>
                                  <li>
                                    <a href="privacy.html">
                                      Privacy &amp; Policy
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="column col-lg-3 col-md-4 col-sm-12">
                                <h3>Services</h3>
                                <ul>
                                  <li>
                                    <a href="content-marketing.html">
                                      Content Marketing
                                    </a>
                                  </li>
                                  <li>
                                    <a href="social-marketing.html">
                                      Social Marketing
                                    </a>
                                  </li>
                                  <li>
                                    <a href="app-development.html">
                                      App Development
                                    </a>
                                  </li>
                                  <li>
                                    <a href="seo.html">SEO Optimization</a>
                                  </li>
                                  <li>
                                    <a href="web-development.html">
                                      Web Development
                                    </a>
                                  </li>
                                  <li>
                                    <a href="advertising.html">
                                      PPC Advertising
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="column col-lg-3 col-md-4 col-sm-12">
                                <h3>Blog</h3>
                                <ul>
                                  <li>
                                    <a href="blog.html">Our Blog</a>
                                  </li>
                                  <li>
                                    <a href="blog-classic.html">Blog Classic</a>
                                  </li>
                                  <li>
                                    <a href="blog-left-sidebar.html">
                                      Blog Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="news-detail.html">Blog Single</a>
                                  </li>
                                  <li>
                                    <a href="not-found.html">Not Found</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="column col-lg-3 col-md-4 col-sm-12">
                                <h3>Our Shop</h3>
                                <ul>
                                  <li>
                                    <a href="shop.html">Shop</a>
                                  </li>
                                  <li>
                                    <a href="shop-single.html">Shop Details</a>
                                  </li>
                                  <li>
                                    <a href="shoping-cart.html">Cart Page</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout Page</a>
                                  </li>
                                  <li>
                                    <a href="login.html">Login</a>
                                  </li>
                                  <li>
                                    <a href="register.html">Register</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="dropdown">
                          <a href="#">Shop</a>
                          <ul>
                            <li>
                              <a href="shop.html">Our Products</a>
                            </li>
                            <li>
                              <a href="shop-single.html">Product Single</a>
                            </li>
                            <li>
                              <a href="shopping-cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="account.html">Account</a>
                            </li>
                          </ul>
                        </li>
                        <li className="current dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <a href="blog.html">Our Blog</a>
                            </li>
                            <li>
                              <a href="blog-classic.html">Blog Classic</a>
                            </li>
                            <li>
                              <a href="blog-left-sidebar.html">
                                Blog Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="news-detail.html">Blog Single</a>
                            </li>
                            <li>
                              <a href="not-found.html">Not Found</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  {/* Main Menu End*/}
                  <div className="outer-box clearfix">
                    {/* Quote Btn */}
                    <div className="btn-box">
                      <a
                        href="contact.html"
                        className="theme-btn btn-style-one"
                      >
                        <span className="txt">Get A Quote</span>
                      </a>
                    </div>
                    {/* Search Btn */}
                    <div className="search-box-btn search-box-outer">
                      <span className="icon fa fa-search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*End Header Upper*/}
            {/* Sticky Header  */}
            <div className="sticky-header">
              <div className="auto-container clearfix">
                {/*Logo*/}
                <div className="logo pull-left">
                  <a href="/" title="">
                    <img src="images/logo-small.png" alt="" title="" />
                  </a>
                </div>
                {/*Right Col*/}
                <div className="pull-right">
                  {/* Main Menu */}
                  <nav className="main-menu">
                    {/*Keep This Empty / Menu will come through Javascript*/}
                  </nav>
                  {/* Main Menu End*/}
                  {/* Main Menu End*/}
                  <div className="outer-box clearfix">
                    {/* Quote Btn */}
                    <div className="btn-box">
                      <a
                        href="contact.html"
                        className="theme-btn btn-style-two"
                      >
                        <span className="txt">Get A Quote</span>
                      </a>
                    </div>
                    {/* Search Btn */}
                    <div className="search-box-btn search-box-outer">
                      <span className="icon fa fa-search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Sticky Menu */}
            {/* Mobile Menu  */}
            <div className="mobile-menu">
              <div className="menu-backdrop" />
              <div className="close-btn">
                <span className="icon flaticon-multiply" />
              </div>
              <nav className="menu-box">
                <div className="nav-logo">
                  <a href="/">
                    <img src="images/logo-3.png" alt="" title="" />
                  </a>
                </div>
                <div className="menu-outer">
                  {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
                </div>
              </nav>
            </div>
            {/* End Mobile Menu */}
          </header>
          {/* End Main Header */}
          {/* Page Title Section */}
          <section
            className="page-title"
            style={{ backgroundImage: "url(images/background/pattern-16.png)" }}
          >
            <div
              className="pattern-layer-one"
              style={{
                backgroundImage: "url(images/main-slider/pattern-1.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage: "url(images/background/pattern-17.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage: "url(images/background/pattern-18.png)",
              }}
            />
            <div
              className="pattern-layer-four"
              style={{ backgroundImage: "url(images/icons/cross-icon.png)" }}
            />
            <div className="auto-container">
              <h2>Blog Left Sidebar</h2>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">home</a>
                </li>
                <li>Blogs</li>
              </ul>
            </div>
          </section>
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar Side */}
                <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
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
                              src="images/resource/post-thumb-1.jpg"
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
                              src="images/resource/post-thumb-2.jpg"
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
                              src="images/resource/post-thumb-3.jpg"
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
                            "url(images/background/author-bg.jpg)",
                        }}
                      >
                        <div className="image">
                          <img src="images/resource/author-7.jpg" alt="" />
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
                            <img src="images/resource/instagram-1.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="images/resource/instagram-2.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="images/resource/instagram-3.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="images/resource/instagram-4.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="images/resource/instagram-5.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="images/resource/instagram-6.jpg" alt="" />
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
                {/* Content Side */}
                <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                  <div className="row clearfix">
                    {/* News Block */}
                    <div className="news-block col-lg-6 col-md-6 col-sm-12">
                      <div
                        className="inner-box wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="image">
                          <img src="images/resource/news-1.jpg" alt="" />
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
                          <img src="images/resource/news-2.jpg" alt="" />
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
                          <img src="images/resource/news-3.jpg" alt="" />
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
                          <img src="images/resource/news-1.jpg" alt="" />
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
                          <img src="images/resource/news-2.jpg" alt="" />
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
                          <img src="images/resource/news-3.jpg" alt="" />
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
                          <img src="images/resource/news-1.jpg" alt="" />
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
                          <img src="images/resource/news-2.jpg" alt="" />
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
                          <img src="images/resource/news-3.jpg" alt="" />
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
                          <img src="images/resource/news-1.jpg" alt="" />
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
                          <img src="images/resource/news-2.jpg" alt="" />
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
                          <img src="images/resource/news-3.jpg" alt="" />
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
                        <img src="images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/4.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/5.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="images/clients/3.png" alt="" />
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
                backgroundImage: "url(images/background/pattern-3.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage: "url(images/background/pattern-4.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage: "url(images/background/pattern-5.png)",
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
                            <a href="/">
                              <img src="images/logo.png" alt="" />
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
                                    src="images/gallery/footer-gallery-thumb-1.jpg"
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
                                    src="images/gallery/footer-gallery-thumb-2.jpg"
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
                                    src="images/gallery/footer-gallery-thumb-3.jpg"
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
                                    src="images/gallery/footer-gallery-thumb-4.jpg"
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
                                    src="images/gallery/footer-gallery-thumb-5.jpg"
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
                                    src="images/gallery/footer-gallery-thumb-6.jpg"
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
                              <a href="mailto:upTurnIdea@gmail.com">
                                upTurnIdea@gmail.com
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
                  Copyright © 2020 upTurnIdea by{" "}
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

export default BlogLeftSidebar;
