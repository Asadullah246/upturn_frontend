import React from "react";

const PageHeader = ({ pagename }) => {
  return (
    <div>
      {/* Main Header*/}
      <header className="main-header">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="auto-container clearfix">
            <div className="pull-left logo-box">
              <div className="logo">
                <a href="/">
                  <img src="/newupdate/images/logo.png" alt="" title="" />
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
                    <li className="current dropdown">
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
                          <a href="content-marketing.html">Content Marketing</a>
                        </li>
                        <li>
                          <a href="social-marketing.html">Social Marketing</a>
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
                                <a href="terms.html">Terms &amp; Condition</a>
                              </li>
                              <li>
                                <a href="privacy.html">Privacy &amp; Policy</a>
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
                                <a href="advertising.html">PPC Advertising</a>
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
                          <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
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
                  <a href="contact.html" className="theme-btn btn-style-one">
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
                <img src="/newupdate/images/logo-small.png" alt="" title="" />
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
                  <a href="contact.html" className="theme-btn btn-style-two">
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
          {/* url(/newupdate/images */}
          <div className="close-btn">
            <span className="icon flaticon-multiply" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="/newupdate/images/logo-3.png" alt="" title="" />
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
          backgroundImage: "url(/newupdate/images/background/pattern-16.png)",
        }}
      >
        <div
          className="pattern-layer-one"
          style={{
            backgroundImage: "url(/newupdate/images/main-slider/pattern-1.png)",
          }}
        />
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(/newupdate/images/background/pattern-17.png)",
          }}
        />
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage: "url(/newupdate/images/background/pattern-18.png)",
          }}
        />
        <div
          className="pattern-layer-four"
          style={{
            backgroundImage: "url(/newupdate/images/icons/cross-icon.png)",
          }}
        />
        <div className="auto-container">
          <h2>About us</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>{pagename}</li>
          </ul>
        </div>
      </section>
      {/* End Page Title Section */}
    </div>
  );
};

export default PageHeader;
