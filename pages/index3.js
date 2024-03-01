import Head from "next/head";
import React from "react";

const Index3 = () => {
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
          {/* Main Header / Header Style Three */}
          <header className="main-header header-style-three">
            {/* Header Upper */}
            <div className="header-upper">
              <div className="auto-container clearfix">
                <div className="pull-left logo-box">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo-4.png" alt="" title="" />
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
                        <li className="current dropdown">
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
                    {/* Search Btn */}
                    <div className="search-box-btn search-box-outer">
                      <span className="icon fa fa-search" />
                    </div>
                    {/* Quote Btn */}
                    <div className="btn-box">
                      <a
                        href="contact.html"
                        className="theme-btn btn-style-one"
                      >
                        <span className="txt">Get A Quote</span>
                      </a>
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
                    {/* Cart Box */}
                    <div className="cart-box">
                      <div className="dropdown">
                        <button
                          className="cart-box-btn dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span className="flaticon-cart" />
                          <span className="total-cart">2</span>
                        </button>
                        <div
                          className="dropdown-menu pull-right cart-panel"
                          aria-labelledby="dropdownMenu1"
                        >
                          <div className="cart-product">
                            <div className="inner">
                              <div className="cross-icon">
                                <span className="icon fa fa-remove" />
                              </div>
                              <div className="image">
                                <img
                                  src="images/resource/post-thumb-1.jpg"
                                  alt=""
                                />
                              </div>
                              <h3>
                                <a href="shop-single.html">Product 01</a>
                              </h3>
                              <div className="quantity-text">Quantity 1</div>
                              <div className="price">$99.00</div>
                            </div>
                          </div>
                          <div className="cart-product">
                            <div className="inner">
                              <div className="cross-icon">
                                <span className="icon fa fa-remove" />
                              </div>
                              <div className="image">
                                <img
                                  src="images/resource/post-thumb-2.jpg"
                                  alt=""
                                />
                              </div>
                              <h3>
                                <a href="shop-single.html">Product 02</a>
                              </h3>
                              <div className="quantity-text">Quantity 1</div>
                              <div className="price">$99.00</div>
                            </div>
                          </div>
                          <div className="cart-total">
                            Sub Total: <span>$198</span>
                          </div>
                          <ul className="btns-boxed">
                            <li>
                              <a href="shoping-cart.html">View Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">CheckOut</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* Search Btn */}
                    <div className="search-box-btn search-box-outer">
                      <span className="icon fa fa-search" />
                    </div>
                    {/* Quote Btn */}
                    <div className="btn-box">
                      <a
                        href="contact.html"
                        className="theme-btn btn-style-two"
                      >
                        <span className="txt">Get A Quote</span>
                      </a>
                    </div>
                    {/* Nav Btn */}
                    <div className="nav-btn navSidebar-button">
                      <span className="icon flaticon-menu" />
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
          {/* Sidebar Cart Item */}
          <div className="xs-sidebar-group info-group">
            <div className="xs-overlay xs-bg-black" />
            <div className="xs-sidebar-widget">
              <div className="sidebar-widget-container">
                <div className="widget-heading">
                  <a href="#" className="close-side-widget">
                    X
                  </a>
                </div>
                <div className="sidebar-textwidget">
                  {/* Sidebar Info Content */}
                  <div className="sidebar-info-contents">
                    <div className="content-inner">
                      <div className="logo">
                        <a href="/">
                          <img src="images/logo.png" alt="" />
                        </a>
                      </div>
                      <div className="content-box">
                        <h2>About Us</h2>
                        <p className="text">
                          Over the years, we have worked with Fortune 500s and
                          brand-new startups. We help ambitious businesses like
                          yours generate more profits by building awareness,
                          driving web traffic, connecting with customers, and
                          growing overall sales. Give us a call.
                        </p>
                        <a
                          href="contact.html"
                          className="theme-btn btn-style-two"
                        >
                          <span className="txt">Contact Now</span>
                        </a>
                      </div>
                      <div className="contact-info">
                        <h2>Contact Info</h2>
                        <ul className="list-style-one">
                          <li>
                            <span className="icon fa fa-location-arrow" />
                            New York 24, Melborne City, USA
                          </li>
                          <li>
                            <span className="icon fa fa-phone" />
                            <a href="tel:+000-000-000-0000">
                              (000) 000-000-0000
                            </a>
                          </li>
                          <li>
                            <span className="icon fa fa-envelope" />
                            <a href="mailto:upTurnIdea@gmail.com">upTurnIdea@gmail.com</a>
                          </li>
                          <li>
                            <span className="icon fa fa-clock-o" />
                            Week Days: 09.00 to 18.00 Sunday: Closed
                          </li>
                        </ul>
                      </div>
                      {/* Social Box */}
                      <ul className="social-box">
                        <li className="facebook">
                          <a href="#" className="fa fa-facebook-f" />
                        </li>
                        <li className="twitter">
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li className="linkedin">
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li className="instagram">
                          <a href="#" className="fa fa-instagram" />
                        </li>
                        <li className="youtube">
                          <a href="#" className="fa fa-youtube" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END sidebar widget item */}
          {/* Banner Section Six */}
          <section className="banner-section-six">
            <div
              className="patern-layer-one"
              style={{ backgroundImage: "url(images/background/2.png)" }}
            />
            <div
              className="patern-layer-two"
              style={{
                backgroundImage: "url(images/background/pattern-1.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="title">Digital Marketing</div>
                    <h1>Your Business Find Better Solutions.</h1>
                    <div className="text">
                      Getting online is easy. Succeeding online is a different{" "}
                      <br /> story. You’ll need more than just a beautiful.
                    </div>
                    <div className="btn-box">
                      <a
                        href="services-detail.html"
                        className="theme-btn btn-style-three"
                      >
                        <span className="txt">Read More</span>
                      </a>
                      <a
                        href="services.html"
                        className="theme-btn btn-style-five"
                      >
                        <span className="txt">Our Services</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div
                      className="image wow fadeInRight"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <img src="images/resource/banner-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Banner Section Six */}
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
                      <img src="images/resource/mission.png" alt="" />
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
                          <img src="images/icons/mission-1.png" alt="" />
                        </span>
                        If Google can’t crawl your site, it’s not going to rank
                        – but that doesn’t mean avoiding Javascript.
                      </li>
                      <li>
                        <span className="icon">
                          <img src="images/icons/mission-2.png" alt="" />
                        </span>
                        For businesses which sell products online &amp; and
                        improve their product listings in the search results..
                      </li>
                      <li>
                        <span className="icon">
                          <img src="images/icons/mission-3.png" alt="" />
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
          {/* Services Section Five */}
          <section className="services-section-five">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Our Services</div>
                <h2>Create Awesome Service With Our Tools</h2>
                <div className="text">
                  Our strategy includes consistently evolving, to ensure we’re
                  producing <br /> exceptional SEO for business.
                </div>
              </div>
              <div className="services-carousel owl-carousel owl-theme">
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-1.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Consumer Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-2.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Marketing Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-3.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Sales Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-1.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Consumer Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-2.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Marketing Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
                {/* Service Block Five */}
                <div className="service-block-five">
                  <div className="inner-box">
                    <div className="side-layer-one" />
                    <div className="side-layer-two" />
                    <div className="icon-box">
                      <div className="border-layer" />
                      <div className="dott-layer" />
                      <span className="icon">
                        <img src="images/icons/service-3.png" alt="" />
                      </span>
                    </div>
                    <h5>
                      <a href="content-marketing.html">Sales Analytics</a>
                    </h5>
                    <div className="text">
                      Lorem ipsum dolor sit ametaut odiut perspiciatis unde
                      omnis iste quuntur alquam quaerat rsit amet
                    </div>
                    <a href="content-marketing.html" className="learn-more">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section Four */}
          {/* Analysis Section */}
          <section className="analysis-section">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(images/background/analysic-bg.png)",
              }}
            />
            <div className="auto-container">
              <div className="row clearfix">
                {/* Title Column */}
                <div className="title-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Market Analysis</div>
                      <h2>
                        Data Analysis and <br /> Statistics for consulting
                      </h2>
                    </div>
                    <div className="text">
                      Over the years, we have worked with Fortune 500s and
                      brand-new startups. We help ambitious businesses like
                      yours generate more profits by building awareness, driving
                      web traffic, connecting with customers, and growing
                      overall sales. Give us a call.
                    </div>
                    <a href="about.html" className="theme-btn btn-style-five">
                      <span className="txt">Lets Start</span>
                    </a>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="images/resource/analysic.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Analysis Section */}
          {/* Counter Section Three */}
          <section className="counter-section-three">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="images/resource/counter.png" alt="" />
                    </div>
                  </div>
                </div>
                {/* Counter Column */}
                <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Some Facts</div>
                      <h2>
                        Our Trusted User to <br /> See you Funfacts
                      </h2>
                    </div>
                    <div className="text">
                      Why I say old chap that is spiffing barney, nancy boy
                      bleeder chimney pot Richard cheers the little rotter so I
                      said, easy peasy buggered blower bevvy A bit of how's your
                      father he nicked it arse over tit.
                    </div>
                    {/* Fact Counter */}
                    <div className="fact-counter-three">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
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
                                  data-stop={8}
                                >
                                  0
                                </span>
                                M+
                              </div>
                              <h4 className="counter-title">Projects Done</h4>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
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
                                  data-stop={100}
                                >
                                  0
                                </span>
                                K
                              </div>
                              <h4 className="counter-title">Happy Clients</h4>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-offset-2 counter-column col-lg-6 col-md-6 col-sm-12">
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
                                  data-stop={1240}
                                >
                                  0
                                </span>
                              </div>
                              <h4 className="counter-title">
                                Ratings Customer
                              </h4>
                            </div>
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column counter-column col-lg-6 col-md-6 col-sm-12">
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
                                  data-stop={120}
                                >
                                  0
                                </span>
                                +
                              </div>
                              <h4 className="counter-title">Award Winner</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Counter Section Three */}
          {/* Steps Section */}
          <section
            className="steps-section"
            style={{
              backgroundImage: "url(images/background/pattern-14.png)",
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
                      <img src="images/resource/skill.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Skill Section */}
          {/* Demo Section */}
          <section
            className="demo-section"
            style={{
              backgroundImage: "url(images/background/pattern-15.png)",
            }}
          >
            <div className="auto-container">
              <div className="row clearfix">
                {/* Counter Column */}
                <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2>Watch a Video Demo</h2>
                    <div className="text">
                      Retarget past customers with second-chance offers and
                      reach new audiences with geo-targeted campaigns during
                      peak dining times using Forks’ push notifications.
                    </div>
                    <a
                      href="https://www.youtube.com/watch?v=kxPCFljwJws"
                      className="lightbox-image theme-btn btn-style-three"
                    >
                      <span className="txt">Play Video Now</span>
                    </a>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="images/resource/video-bg.png" alt="" />
                      <a
                        href="https://www.youtube.com/watch?v=kxPCFljwJws"
                        className="lightbox-image video-box"
                      >
                        <span className="fa fa-play">
                          <i className="ripple" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Demo Section */}
          {/* Testimonial Section Three */}
          <section className="testimonial-section-three">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Real Testimonials</div>
                <h2>
                  What They Say About Our <br /> Company?
                </h2>
              </div>
              <div className="testimonial-carousel owl-carousel owl-theme">
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </div>
                      <h6>TeamSnap</h6>
                      <div className="designation">Amy, VP Experience</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-6.jpg" alt="" />
                      </div>
                      <h6>Steven smith</h6>
                      <div className="designation">Programmer Doritibe</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </div>
                      <h6>TeamSnap</h6>
                      <div className="designation">Amy, VP Experience</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-6.jpg" alt="" />
                      </div>
                      <h6>Steven smith</h6>
                      <div className="designation">Programmer Doritibe</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-5.jpg" alt="" />
                      </div>
                      <h6>TeamSnap</h6>
                      <div className="designation">Amy, VP Experience</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
                {/* Testimonial Block Three */}
                <div className="testimonial-block-three">
                  <div className="inner-box">
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="images/resource/author-6.jpg" alt="" />
                      </div>
                      <h6>Steven smith</h6>
                      <div className="designation">Programmer Doritibe</div>
                    </div>
                    <div className="text">
                      “We don't take ourselves too seriously, but seriously
                      enough to ensure we're creating the best product and
                      experience for our customers. I feel like Help Scout does
                      the same.”
                    </div>
                    <div className="rating">
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                      <span className="fa fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Testimonial Section Three */}
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
                      <img src="images/resource/newsletter.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}
          {/* Main Footer */}
          <footer className="main-footer style-two">
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
            action="https://///blog.html"
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

export default Index3;
