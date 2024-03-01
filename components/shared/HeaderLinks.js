import React from "react";

const HeaderLinks = () => {
  return (
    <header className="main-header header-style-one">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">
          <div className="pull-left logo-box">
            <div className="logo">
              <a href="/">
                <img
                  src="/newupdate/images/newIcons/logo.png"
                  alt=""
                  title=""
                  className="homepageLogo"
                />
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
                  <li className="current ">
                    <a href="/">Home</a>
                    {/* <ul>
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
                    </ul> */}
                  </li>
                  <li className="dropdown">
                    <a href="/aboutUs">About</a>
                    <ul>
                      <li>
                        <a href="/aboutUs">About Us</a>
                      </li>
                      <li>
                        <a href="/faq">Faq</a>
                      </li>
                      <li>
                        <a href="/price">Price</a>
                      </li>
                      <li>
                        <a href="/team">Team</a>
                      </li>
                      {/* <li>
                        <a href="/teamDetail">Team Detail</a>
                      </li> */}
                      <li>
                        <a href="/testimonial">Testimonial</a>
                      </li>
                      {/* <li>
                        <a href="comming-soon.html">Comming Soon</a>
                      </li> */}
                      <li>
                        <a href="/terms">Terms &amp; Condition</a>
                      </li>
                      <li>
                        <a href="/privacy">Privacy &amp; Policy</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/services1">Services</a>
                    <ul>
                      <li>
                        <a href="/services1">Services</a>
                      </li>
                      <li>
                        <a href="/contentMarketing">Content Marketing</a>
                      </li>
                      <li>
                        <a href="/socialMarketing">Social Marketing</a>
                      </li>
                      <li>
                        <a href="/appDevelopment">App Development</a>
                      </li>
                      <li>
                        <a href="/seo">SEO Optimization</a>
                      </li>
                      <li>
                        <a href="/webDevelopment">Web Development</a>
                      </li>
                      <li>
                        <a href="/advertising">PPC Advertising</a>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <a href="/projects">Projects</a>
                    {/* <ul>
                      <li>
                        <a href="/project">Projects</a>
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
                    </ul> */}
                  </li>
                  <li className="dropdown has-mega-menu">
                    <a href="#">Pages</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3 style={{marginLeft:"30px" }}>About Us</h3>
                          <ul>
                            <li>
                              <a href="/aboutUs">About Us</a>
                            </li>
                            <li>
                              <a href="/faq">Faq</a>
                            </li>
                            <li>
                              <a href="/price">Price</a>
                            </li>
                            <li>
                              <a href="/team">Team</a>
                            </li>

                            <li>
                              <a href="/testimonial">Testimonial</a>
                            </li>

                            <li>
                              <a href="/terms">Terms &amp; Condition</a>
                            </li>
                            <li>
                              <a href="/privacy">Privacy &amp; Policy</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3  style={{marginLeft:"30px" }}>Services</h3>
                          <ul>
                            <li>
                              <a href="/contentMarketing">
                                Content Marketing
                              </a>
                            </li>
                            <li>
                              <a href="/socialMarketing">
                                Social Marketing
                              </a>
                            </li>
                            <li>
                              <a href="/appDevelopment">App Development</a>
                            </li>
                            <li>
                              <a href="/seo">SEO Optimization</a>
                            </li>
                            <li>
                              <a href="/webDevelopment">Web Development</a>
                            </li>
                            <li>
                              <a href="/advertising">PPC Advertising</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3  style={{marginLeft:"30px" }}>Blog</h3>
                          <ul>
                            <li>
                              <a href="/blog">Our Blog</a>
                            </li>
                            <li>
                              <a href="#">Blog Classic</a>
                            </li>
                            <li>
                              <a href="#">
                                Blog Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href="#">Blog Single</a>
                            </li>
                            <li>
                              <a href="#">Not Found</a>
                            </li>
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3  style={{marginLeft:"30px" }}>Our Shop</h3>
                          <ul>
                            <li>
                              <a href="/shop">Shop</a>
                            </li>
                            {/* <li>
                              <a href="shop-single.html">Shop Details</a>
                            </li> */}
                            <li>
                              <a href="/shoppingCart">Cart Page</a>
                            </li>
                            <li>
                              <a href="/checkout">Checkout Page</a>
                            </li>
                            <li>
                              <a href="/login">Login</a>
                            </li>
                            {/* <li>
                              <a href="/register">Register</a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown">
                    <a href="/shop">Shop</a>
                    <ul>
                      <li>
                        <a href="/shop">Our Products</a>
                      </li>
                      {/* <li>
                        <a href="shop-single.html">Product Single</a>
                      </li> */}
                      <li>
                        <a href="/shoppingCart">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="/checkout">Checkout</a>
                      </li>
                      <li>
                        <a href="/account">Account</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/blog">Blog</a>
                    <ul>
                      <li>
                        <a href="/blog">Our Blog</a>
                      </li>
                      <li>
                        <a href="#">Blog Classic</a>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a href="/contactUs">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box">
                <a href="/contactUs" className="theme-btn btn-style-one">
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
              <img src="/newupdate/images/newIcons/logo.png" alt="" title="" className="smallLogo" />
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
                <a href="/contactUs" className="theme-btn btn-style-two">
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
              <img src="/newupdate/images/newIcons/logo.png" alt="" title="" />
            </a>
          </div>
          <div className="menu-outer">
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
};

export default HeaderLinks;
