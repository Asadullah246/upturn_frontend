import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";

const Checkout = () => {
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
              <h2>CheckOut</h2>
              <ul className="page-breadcrumb">
                <li>
                  <a href="index.html">home</a>
                </li>
                <li>CheckOut</li>
              </ul>
            </div>
          </section>
          {/* End Page Title Section */}
          {/*CheckOut Page*/}
          <div className="checkout-page">
            <div className="auto-container">
              {/*Default Links*/}
              <ul className="default-links">
                <li>
                  Exisitng Customer? <a href="#">Click here to login</a>
                </li>
                <li>
                  Have a coupon? <a href="#">Click here to enter your code</a>
                </li>
              </ul>
              {/*Checkout Details*/}
              <div className="checkout-form">
                <form
                  method="post"
                  action="https://///checkout.html"
                >
                  <div className="row clearfix">
                    {/*Column*/}
                    <div className="column col-md-6 col-sm-12 col-xs-12">
                      <div className="checkout-title">
                        <h2>Billing Address</h2>
                      </div>
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Country <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            First Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            Last Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Address <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Town / City <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Contact Info <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder="Email Address"
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="check-box">
                            <input
                              type="checkbox"
                              name="shipping-option"
                              id="account-option"
                            />{" "}
                             {" "}
                            <label htmlFor="account-option">
                              Create an account?
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Column*/}
                    <div className="column col-md-6 col-sm-12 col-xs-12">
                      <div className="checkout-title">
                        <h2>Shiping to a Different Address</h2>
                      </div>
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Country <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            First Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            Last Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Address <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Town / City <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">Other Notes</div>
                          <textarea
                            className=""
                            placeholder="Special notes about your order..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*End Checkout Details*/}
              {/*Lower Content*/}
              <div className="lower-content">
                <div className="row clearfix">
                  {/*Order Column*/}
                  <div className="order-column column col-md-6 col-sm-12 col-xs-12">
                    {/*Sec Title*/}
                    <div className="checkout-title">
                      <h2>Order Summary</h2>
                    </div>
                    <div className="cart-outer">
                      <table className="cart-table">
                        <thead className="cart-header">
                          <tr>
                            <th className="prod-column">Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="prod-column">
                              <div className="column-box">
                                <figure className="prod-thumb">
                                  <img
                                    src="images/resource/products/prod-thumb-1.jpg"
                                    alt=""
                                  />
                                </figure>
                                <h4 className="prod-title">Product 01</h4>
                              </div>
                            </td>
                            <td className="qty">
                              <input type="text" />
                            </td>
                            <td className="sub-total">$34.99</td>
                          </tr>
                          <tr>
                            <td className="prod-column">
                              <div className="column-box">
                                <figure className="prod-thumb">
                                  <img
                                    src="images/resource/products/prod-thumb-2.jpg"
                                    alt=""
                                  />
                                </figure>
                                <h4 className="prod-title">Product 02</h4>
                              </div>
                            </td>
                            <td className="qty">
                              <input type="text" />
                            </td>
                            <td className="sub-total">$29.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*Cart Column*/}
                  <div className="column col-md-6 col-sm-12 col-xs-12">
                    {/*Sec Title*/}
                    <div className="checkout-title">
                      <h2>Cart Totals</h2>
                    </div>
                    {/*Totals Table*/}
                    <ul className="totals-table">
                      <li className="clearfix">
                        <span className="col title">Cart Subtotal</span>
                        <span className="col">$146.00</span>
                      </li>
                      <li className="clearfix">
                        <span className="col title">Shipping and Handling</span>
                        <span className="col total">Free Shipping</span>
                      </li>
                      <li className="clearfix">
                        <span className="col title">Order Total</span>
                        <span className="col total">$146.00</span>
                      </li>
                    </ul>
                    {/*Payment Options*/}
                    <div className="payment-options">
                      <ul>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-1"
                              defaultChecked=""
                            />
                            <label htmlFor="payment-1">
                              <strong>Direct Bank Transfer</strong>
                              <span className="small-text">
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-3"
                            />
                            <label htmlFor="payment-3">
                              <strong>
                                Paypal <a href="#">What is Paypal</a>
                              </strong>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button type="button" className="theme-btn btn-style-two">
                        <span className="txt">Place Order</span>
                      </button>
                    </div>
                    {/*End Place Order*/}
                  </div>
                </div>
              </div>
              {/*End Lower Content*/}
            </div>
          </div>
          {/*End CheckOut Page*/}
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

        <SearchPopUp />
        <TopScrolling />
      </body>

      {/* body end  */}
    </div>
  );
};

export default Checkout;
