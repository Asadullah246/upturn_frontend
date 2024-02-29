import Head from "next/head";
import React from "react";

const ShopSingle = () => {
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
          <header className="main-header">
            {/*Header-Upper*/}
            <div className="header-upper">
              <div className="auto-container clearfix">
                <div className="pull-left logo-box">
                  <div className="logo">
                    <a href="index.html">
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
                              <a href="index.html">Homepage One</a>
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
                                  <a href="index.html">Header Style One</a>
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
                        <li className="current dropdown">
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
                        <li className="dropdown">
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
                  <a href="index.html" title="">
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
                  <a href="index.html">
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
              <h2>Shop Detail</h2>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">home</a>
                </li>
                <li>Shop Detail</li>
              </ul>
            </div>
          </section>
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  <div className="shop-single">
                    <div className="product-details">
                      {/*Basic Details*/}
                      <div className="basic-details">
                        <div className="row clearfix">
                          <div className="image-column col-md-6 col-sm-6 col-xs-12">
                            <figure className="image-box">
                              <a
                                href="images/resource/products/10.jpg"
                                className="lightbox-image"
                                title="Image Caption Here"
                              >
                                <img
                                  src="images/resource/products/10.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                          </div>
                          <div className="info-column col-md-6 col-sm-6 col-xs-12">
                            <div className="details-header">
                              <h4>Product 01</h4>
                              <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star-half-empty" />
                              </div>
                              <div className="item-price">$29.00</div>
                            </div>
                            <div className="text">
                              <p>
                                Working from home meant we couldsnack and coffee
                                our breaks change our desks or view, good, drink
                                on the job, even spend the weather started
                                getting roughday in pajamas consequences.
                              </p>
                            </div>
                            <div className="location">
                              Check Delivery Option at Your Location:
                            </div>
                            {/* Pincode Form */}
                            <div className="pincode-form">
                              <form
                                method="post"
                                action="https://html.themerange.net/merix/merix/contact.html"
                              >
                                <div className="form-group">
                                  <input
                                    type="text"
                                    name="text"
                                    defaultValue=""
                                    placeholder="Pincode"
                                    required=""
                                  />
                                  <button type="submit">Check</button>
                                </div>
                              </form>
                            </div>
                            <div className="expired">
                              Expected Delivery in 4-10 Days
                            </div>
                            <div className="other-options clearfix">
                              <div className="item-quantity">
                                <input
                                  className="quantity-spinner"
                                  type="text"
                                  defaultValue={2}
                                  name="quantity"
                                />
                              </div>
                              <button
                                type="button"
                                className="theme-btn btn-style-two add-to-cart"
                              >
                                <span className="txt">Add To Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Basic Details*/}
                      {/*Product Info Tabs*/}
                      <div className="product-info-tabs">
                        {/*Product Tabs*/}
                        <div className="prod-tabs tabs-box">
                          {/*Tab Btns*/}
                          <ul className="tab-btns tab-buttons clearfix">
                            <li
                              data-tab="#prod-details"
                              className="tab-btn active-btn"
                            >
                              Description
                            </li>
                            <li data-tab="#prod-reviews" className="tab-btn">
                              Reviews (2)
                            </li>
                          </ul>
                          {/*Tabs Container*/}
                          <div className="tabs-content">
                            {/*Tab / Active Tab*/}
                            <div className="tab active-tab" id="prod-details">
                              <div className="content">
                                <p>
                                  Leverage agile frameworks to provide a robust
                                  synopsis for high level overviews. Iterative
                                  approaches to corporate strategy foster
                                  collaborative thinking to further the overall
                                  value proposition. Organically grow the
                                  holistic world view of disruptive innovation
                                  via workplace diversity and empowerment.Bring
                                  to the table win-win survival strategies to
                                  ensure proactive domination. runway heading
                                  towards a streamlined cloud solution.
                                </p>
                                <p>
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits. Dramatically visualize customer
                                  directed convergence.{" "}
                                </p>
                              </div>
                            </div>
                            {/*Tab*/}
                            <div className="tab" id="prod-reviews">
                              <h2 className="title">
                                2 Reviews For win Your Friends
                              </h2>
                              {/*Reviews Container*/}
                              <div className="comments-area">
                                {/*Comment Box*/}
                                <div className="comment-box">
                                  <div className="comment">
                                    <div className="author-thumb">
                                      <img
                                        src="images/resource/author-1.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-inner">
                                      <div className="comment-info clearfix">
                                        Steven Rich – Sep 17, 2020
                                      </div>
                                      <div className="rating">
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star light" />
                                      </div>
                                      <div className="text">
                                        How all this mistaken idea of denouncing
                                        pleasure and praising pain was born and
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Comment Box*/}
                                <div className="comment-box reply-comment">
                                  <div className="comment">
                                    <div className="author-thumb">
                                      <img
                                        src="images/resource/author-2.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-inner">
                                      <div className="comment-info clearfix">
                                        William Cobus – Aug 21, 2020
                                      </div>
                                      <div className="rating">
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star-half-empty" />
                                      </div>
                                      <div className="text">
                                        There anyone who loves or pursues or
                                        desires to obtain pain itself, because
                                        it is pain sed, because occasionally
                                        circumstances occur some great pleasure.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Comment Form */}
                              <div className="shop-comment-form">
                                <h2>Add Your Comments</h2>
                                <div className="rating-box">
                                  <div className="text"> Your Rating:</div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                </div>
                                <form
                                  method="post"
                                  action="https://html.themerange.net/merix/merix/contact.html"
                                >
                                  <div className="row clearfix">
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                      <label>First Name *</label>
                                      <input
                                        type="text"
                                        name="username"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                      <label>Last Name*</label>
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                      <label>Email*</label>
                                      <input
                                        type="text"
                                        name="number"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                      <label>Your Comments*</label>
                                      <textarea
                                        name="message"
                                        placeholder=""
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                      <button
                                        className="theme-btn btn-style-two"
                                        type="submit"
                                        name="submit-form"
                                      >
                                        <span className="txt">Submit now</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Product Info Tabs*/}
                      {/*Related Products*/}
                      <div className="related-products">
                        <h2>Related Products</h2>
                        <div className="row clearfix">
                          {/*Shop Item*/}
                          <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box">
                              <div className="image">
                                <img
                                  src="images/resource/products/4.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="fa fa-heart-o" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Whishlist
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="lower-content">
                                <div className="clearfix">
                                  <div className="pull-left">
                                    <h3>
                                      <a href="shop-single.html">Product 01</a>
                                    </h3>
                                  </div>
                                  <div className="pull-right">
                                    {/*Rating*/}
                                    <div className="rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                    </div>
                                  </div>
                                </div>
                                <div className="price">$29.00</div>
                              </div>
                            </div>
                          </div>
                          {/*Shop Item*/}
                          <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box">
                              <div className="image">
                                <img
                                  src="images/resource/products/5.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="fa fa-heart-o" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Whishlist
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="lower-content">
                                <div className="clearfix">
                                  <div className="pull-left">
                                    <h3>
                                      <a href="shop-single.html">Product 02</a>
                                    </h3>
                                  </div>
                                  <div className="pull-right">
                                    {/*Rating*/}
                                    <div className="rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star-o" />
                                    </div>
                                  </div>
                                </div>
                                <div className="price">$29.00</div>
                              </div>
                            </div>
                          </div>
                          {/*Shop Item*/}
                          <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box">
                              <div className="image">
                                <img
                                  src="images/resource/products/6.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shop-single.html">
                                        <span className="fa fa-heart-o" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Whishlist
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="lower-content">
                                <div className="clearfix">
                                  <div className="pull-left">
                                    <h3>
                                      <a href="shop-single.html">Product 03</a>
                                    </h3>
                                  </div>
                                  <div className="pull-right">
                                    {/*Rating*/}
                                    <div className="rating">
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star" />
                                      <span className="fa fa-star-half-empty" />
                                    </div>
                                  </div>
                                </div>
                                <div className="price">$34.99</div>
                              </div>
                            </div>
                          </div>
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
              </div>
            </div>
          </div>
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
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="images/resource/newsletter.png" alt="" />
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
                            <a href="index.html">
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
        <div
          className="back-to-top scroll-to-target show-back-to-top"
          data-target="html"
        >
          TOP
        </div>
      </body>
      {/* body end  */}
    </div>
  );
};

export default ShopSingle;
