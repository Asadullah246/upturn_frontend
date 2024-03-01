import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";

const ProjectsDetail = () => {
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
                        <li className="current dropdown">
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
            style={{
              backgroundImage: "url(images/background/pattern-16.png)",
            }}
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
              <h2>Project Detail</h2>
              <ul className="page-breadcrumb">
                <li>
                  <a href="/">home</a>
                </li>
                <li>Project Detail</li>
              </ul>
            </div>
          </section>
          {/* End Page Title Section */}
          {/* Gallery Detail Section */}
          <section className="gallery-detail-section">
            <div className="auto-container">
              <div className="inner-container">
                {/* Info Section */}
                <div className="upper-box">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>PUBLISHED</strong>
                        </li>
                        <li>February 22, 2020</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>CATEGORY</strong>
                        </li>
                        <li>Development / Media</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>CLIENT</strong>
                        </li>
                        <li>ThemeRange</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
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
                        <li className="google">
                          <a href="#" className="fa fa-google" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="inner-box">
                  <div className="image titlt" data-tilt="" data-tilt-max={3}>
                    <img src="images/resource/service-4.jpg" alt="" />
                  </div>
                  <h3>The Challenge &amp; Solution</h3>
                  <p>
                    One of the principal decisions that startup owners have to
                    make is whether or not to engage in SEO. One common
                    consideration is the cost of investing in an SEO campaign
                    versus possible returns. Another is the daunting list of SEO
                    terminologies, which may overwhelm newcomers to the
                    e-commerce and website scene. If you are a new online
                    entrepreneur but are not convinced of the benefits of SEO,
                    then this article is for you! Here are some of the reasons
                    why SEO is important and why you should consider it as a
                    marketing technique. SEO is less expensive than other online
                    marketing approaches. It also offers higher reward rates
                    when compared to other techniques such as social media
                    marketing, pay per click advertising, and email marketing.
                    While you may need to defray a substantial amount to cover
                    initial SEO planning and processes that include website
                    design, programming, and strategizing, you can be sure to
                    get faster and more long-term results.
                  </p>
                  <blockquote>
                    “I cannot give you the formula for success, but I can give
                    you the formula for failure. It is: Try to please
                    everybody.”
                    <span className="author-name"> - HERBERT BAYARD SWOPE</span>
                  </blockquote>
                  <div className="gallery-column">
                    <div className="row clearfix">
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="image titlt"
                          data-tilt=""
                          data-tilt-max={1}
                        >
                          <img src="images/resource/project-1.jpg" alt="" />
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="image titlt"
                          data-tilt=""
                          data-tilt-max={1}
                        >
                          <img src="images/resource/project-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>
                    <span>02.</span> Working Process
                  </h4>
                  <p>
                    One SEO component called off-site SEO ensures that users of
                    external pages or of social media can find your website.
                    Being optimized for SEO increases the site’s potential to
                    draw customers from other platforms other than the search
                    engine. For instance, when you post content and links to
                    your page on Facebook or Twitter, you are able to promote
                    your website and attract more customers. One of the main
                    goals of SEO is to attract the targeted audience through
                    organic searches. The number of visitors to your site
                    influences your sales and subscriptions. It also promotes
                    the marketing of your products and services. Increased
                    inbound traffic is always good for business because it
                    equates to more conversion opportunities.
                  </p>
                  <p>
                    Some SEO-related tools such as the Google Keyword Planner
                    and Google Analytics provide quantitative data to help you
                    understand your market, analyze the trends, and know your
                    competitors’ standings. It helps you identify popular and
                    valuable keywords so you can decide how to structure or
                    revise your content.
                  </p>
                  <div className="image titlt" data-tilt="" data-tilt-max={1}>
                    <img src="images/resource/project-3.jpg" alt="" />
                  </div>
                  <h4>
                    <span>03.</span> Perfect Result
                  </h4>
                  <p>
                    Implementing SEO strategies help you to rank higher on the
                    search engine’s results page (SERP). This means that when
                    your target customers search for products and services that
                    your industry offers, they are likely to find your website.
                    When you repeatedly appear on the SERP, users become aware
                    of your site and your business. This increases the chances
                    of landing potential customers on your webpages.{" "}
                    <span>
                      SEO is less expensive than other online marketing
                      approaches.
                    </span>{" "}
                    It also offers higher reward rates when compared to other
                    techniques such as social media marketing, pay per click
                    advertising, and email marketing.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End Gallery Detail Section */}
          {/* Related Projects Section */}
          <section className="related-projects-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Related PROJECTS</div>
                <h2>Our Latest Case Works</h2>
              </div>
              <div className="three-item-carousel owl-carousel owl-theme">
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/4.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/5.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/6.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/4.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/5.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/6.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/4.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/5.jpg" alt="" />
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
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="images/gallery/6.jpg" alt="" />
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
            </div>
          </section>
          {/* End Related Projects Section */}
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

export default ProjectsDetail;
