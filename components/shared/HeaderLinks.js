import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { getData } from "./Api";
import Link from "next/link";

const HeaderLinks = () => {
  const [showNav, setShowNav] = useState(false);
  const [displayWidth, setDisplayWidth] = useState(null);
  const router = useRouter();
  const currentPath = router.pathname;
  const parentRoute = currentPath.split('/')[1]
  const [info, setInfo]=useState()
  const dataId="660895de0608b63dc8814028"
  const [services, setservices] = useState([]);
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`websiteInfo/${dataId}`);
      setInfo(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);



  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`services`);
      setservices(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);



  useEffect(() => {
    const handleResize = () => {
      setDisplayWidth(window.innerWidth);
    };

    // Initial width
    setDisplayWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="main-header header-style-one">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">
          {/* hidden logo  */}
          <div className="pull-left logo-box" style={{ display: "none" }}>
            <div className="logo">
              <a href="/">
                <img
                  // src="/newupdate/images/newIcons/Logo.svg"
                  src={info?.logo}
                  alt=""
                  title=""
                  className="homepageLogo"
                />
              </a>
            </div>
          </div>

          {/* end of hiddenlogo  */}

          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler  ">
              <div className="">
                <a href="/">
                  <img
                    src="/newupdate/images/newIcons/Logo.svg"
                    alt=""
                    title=""
                    className="homepageLogo"
                  />
                </a>
              </div>
              <span
                onClick={() => setShowNav(true)}
                className="icon flaticon-menu"
              />
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
                {/* logo section  */}
                <div className="logo  logonewdesign">
                  <a href="/">
                    <img
                      src="/newupdate/images/newIcons/Logo.svg"
                      alt=""
                      title=""
                      className="homepageLogo"
                    />
                  </a>
                </div>

                {/* end of logo section  */}

                <ul className="navigation clearfix homeLinksLatest">
                  <li className={parentRoute==""?"current":""} >
                    <a href="/">Home</a>
                  </li>
                  <li  className={` dropdown ${parentRoute=="about"?"current":""}`} >
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
                  <li className={` dropdown ${parentRoute=="services"?"current":""}`}  >
                    <a href="/services">Services</a>
                    <ul>
                      {services?.map(s=>{
                        return(
                          <li>
                          <a href={`/services/${s?._id}`}>{s?.name}</a>
                        </li>
                        )
                      })}

                    </ul>
                  </li>

                  <li className="dropdown has-mega-menu">
                    <a href="#">Pages</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3 style={{ marginLeft: "30px" }}>About Us</h3>
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
                          <h3 style={{ marginLeft: "30px" }}>Services</h3>
                          <ul>
                          {services?.map(s=>{
                        return(
                          <li>
                          <a href={`/services/${s?._id}`}>{s?.name}</a>
                        </li>
                        )
                      })}
                          </ul>
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3 style={{ marginLeft: "30px" }}>Blog</h3>
                          <ul>
                            <li>
                              <a href="/blog">Our Blog</a>
                            </li>
                            <li>
                              <a href="#">Blog Classic</a>
                            </li>
                            <li>
                              <a href="#">Blog Left Sidebar</a>
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
                          <h3 style={{ marginLeft: "30px" }}>Our Shop</h3>
                          <ul>
                            {/* <li>
                              <a href="/shop">Shop</a>
                            </li> */}
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

                  <li  className={parentRoute=="blog"?"current":""}>
                    <a href="/blog">Blog</a>
                  </li>
                  <li className={parentRoute=="contactUs"?"current":""}>
                    <a href="/contactUs">Contact us</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box me-4 ">
                <a href="/contactUs" className="theme-btn btn-style-two">
                  <span className="txt">Get A Quote</span>
                </a>
              </div>
              {/* Search Btn */}
              {/* <div className="search-box-btn search-box-outer">
                <span className="icon fa fa-search" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
      {/* Sticky Header  */}
      <div className="sticky-header">
        {/* new added sticky header  */}
        <div className="auto-container clearfix">
          {/* hidden logo  */}
          <div className="pull-left logo-box" style={{ display: "none" }}>
            <div className="logo">
              <a href="/">
                <img
                  src="/newupdate/images/newIcons/Logo.svg"
                  alt=""
                  title=""
                  className="homepageLogo"
                />
              </a>
            </div>
          </div>

          {/* end of hiddenlogo  */}

          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            {/* <div className="mobile-nav-toggler">
              <span className="icon flaticon-menu" />
            </div> */}

            <div className="mobile-nav-toggler   ">
              <div className="">
                <a href="/">
                  <img
                    src="/newupdate/images/newIcons/Logo.svg"
                    alt=""
                    title=""
                    className="homepageLogo"
                  />
                </a>
              </div>
              <span
                onClick={() => setShowNav(true)}
                className="icon flaticon-menu"
              />
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
                {/* logo section  */}
                <div className="logo  logonewdesign">
                  <a href="/">
                    <img
                      src="/newupdate/images/newIcons/Logo.svg"
                      alt=""
                      title=""
                      className="homepageLogo"
                    />
                  </a>
                </div>

                {/* end of logo section  */}

                <ul className="navigation clearfix homeLinksLatest">
                  <li  className={parentRoute==""?"current":""}>
                    <a href="/">Home</a>
                  </li>
                  <li  className={` dropdown ${parentRoute=="aboutUs"?"current":""}`} >
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
                  <li  className={` dropdown ${parentRoute=="services"?"current":""}`} >
                    <a href="/services">Services</a>
                    <ul>
                    {services?.map(s=>{
                        return(
                          <li>
                          <a href={`/services/${s?._id}`}>{s?.name}</a>
                        </li>
                        )
                      })}
                    </ul>
                  </li>
                  <li  className={parentRoute=="projects"?"current":""}>
                    <a href="/projects">Projects</a>

                  </li>
                  <li className="dropdown has-mega-menu">
                    <a href="#">Pages</a>
                    <div className="mega-menu">
                      <div className="mega-menu-bar row clearfix">
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3 style={{ marginLeft: "30px" }}>About Us</h3>
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
                          <h3 style={{ marginLeft: "30px" }}>Services</h3>
                          <ul>
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
                        </div>
                        <div className="column col-lg-3 col-md-4 col-sm-12">
                          <h3 style={{ marginLeft: "30px" }}>Blog</h3>
                          <ul>
                            <li>
                              <a href="/blog">Our Blog</a>
                            </li>
                            <li>
                              <a href="#">Blog Classic</a>
                            </li>
                            <li>
                              <a href="#">Blog Left Sidebar</a>
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
                          <h3 style={{ marginLeft: "30px" }}>Our Shop</h3>
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

                  <li  className={parentRoute=="blog"?"current":""}>
                    <a href="/blog">Blog</a>

                  </li>
                  <li  className={parentRoute=="contactUs"?"current":""}>
                    <a href="/contactUs">Contact Us</a>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Quote Btn */}
              <div className="btn-box">
                <a href="/contactUs" className="theme-btn btn-style-two">
                  <span className="txt">Get A Quote</span>
                </a>
              </div>
              {/* Search Btn */}
              {/* <div className="search-box-btn search-box-outer">
                <span className="icon fa fa-search" />
              </div> */}
            </div>
          </div>
        </div>
        {/* new added sticky header end */}
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}

      {/* handle class named : .mobile-menu  */}
      <div
        className={displayWidth <= 767 && showNav ? "mobile-menu-visible" : " "}
      >
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn" onClick={() => setShowNav(false)}>
            <span className="icon flaticon-multiply" />
          </div>

          <nav className="menu-box">
            <div className="nav-logo">
              {/* <a href="/">
              <img src="/newupdate/images/newIcons/Logo.svg" alt="" title="" />
            </a> */}
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
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
                  {/* logo section  */}
                  <div className="logo  logonewdesign">
                    <a href="/">
                      <img
                        style={{ marginLeft: "43px !important" }}
                        src="/newupdate/images/newIcons/Logo.svg"
                        alt=""
                        title=""
                        className="homepageLogo "
                      />
                    </a>
                  </div>

                  {/* end of logo section  */}

                  <ul className="navigation clearfix homeLinksLatest">
                    <li  className={parentRoute==""?"current":""}>
                      <a href="/">Home</a>
                    </li>
                    <li  className={` dropdown ${parentRoute=="aboutUs"?"current":""}`} >
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
                    <li  className={` dropdown ${parentRoute=="services"?"current":""}`} >
                      <a href="/services">Services</a>
                      
                      <ul>
                      {services?.map(s=>{
                        return(
                          <li>
                          <a href={`/services/${s?._id}`}>{s?.name}</a>
                        </li>
                        )
                      })}
                      </ul>
                    </li>
                    {/* <li  className={parentRoute=="projects"?"current":""}>
                      <a href="/projects">Projects</a>

                    </li> */}
                    <li className="dropdown has-mega-menu">
                      <a href="#">Pages</a>
                      <div className="mega-menu">
                        <div className="mega-menu-bar row clearfix">
                          <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3 style={{ marginLeft: "30px" }}>About Us</h3>
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
                            <h3 style={{ marginLeft: "30px" }}>Services</h3>
                            <ul>
                              <li>
                                <a href="/contentMarketing">
                                  Content Marketing
                                </a>
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
                          </div>
                          <div className="column col-lg-3 col-md-4 col-sm-12">
                            <h3 style={{ marginLeft: "30px" }}>Blog</h3>
                            <ul>
                              <li>
                                <a href="/blog">Our Blog</a>
                              </li>
                              <li>
                                <a href="#">Blog Classic</a>
                              </li>
                              <li>
                                <a href="#">Blog Left Sidebar</a>
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
                            <h3 style={{ marginLeft: "30px" }}>Our Shop</h3>
                            <ul>
                              {/* <li>
                              <a href="/shop">Shop</a>
                            </li> */}
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


                    <li  className={parentRoute=="blog"?"current":""}>
                      <a href="/blog">Blog</a>
                    </li>
                    <li  className={parentRoute=="contactUs"?"current":""}>
                      <a href="/contactUs">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </div>

    </header>
  );
};

export default HeaderLinks;
