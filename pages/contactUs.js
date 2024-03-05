import Head from "next/head";
import React from "react";
import PageHeader from "../components/shared/pageHeader";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";

const ContactUs = () => {
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
          <PageHeader pagename={"Contact Us"} />
          {/* End Main Header */}

          {/* Contact Info Section */}
          <section className="contact-info-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Follow Our Info</div>
                <h2>Contact information</h2>
                <div className="text">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. <br /> We will be
                  happy to answer your questions.
                </div>
              </div>
              <div className="inner-container">
                <div className="row clearfix">
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-clock" />
                        We are open <br /> SAT-THUR 09:30 – 06:00 (GMT 6+)
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-pin" />
                        Level 4 and 5 Nadian Tower 89/7 <br /> Gopibag Dhaka
                        1203, Bangladesh
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-phone-call" />
                        <a href="tel:8801324738600">+8801324-738600</a> <br />
                        <a href="mailto:hello@bizcope.com">hello@bizcope.com</a>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="social-box">
                      <span>
                        Our Socials Links{" "}
                        <i>
                          Print this page to PDF for the complete set of
                          vectors.
                        </i>
                      </span>
                      <li className="facebook">
                        <a className="fa fa-facebook-f" href="#" />
                      </li>
                      <li className="twitter">
                        <a className="fa fa-twitter" href="#" />
                      </li>
                      <li className="linkedin">
                        <a href="#" className="fa fa-google-plus" />
                      </li>
                      <li className="pinterest">
                        <a href="#" className="fa fa-pinterest-p" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Map Boxed */}
              <div className="map-boxed">
                {/* Map Outer */}
                <div className="map-outer">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d805184.6331292129!2d144.49266890254142!3d-37.97123689954809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2s!4v1574408946759!5m2!1sen!2s"
                    width="100%"
                    height="560px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                  />
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Info Section */}
          {/* Contact Form Section */}
          <section className="contact-form-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Don’t Hasitate To Contact With us</div>
                <h2>Now Very Easy</h2>
                <div className="text">
                  Our approach to SEO is uniquely built around what we know
                  works…and what we know <br /> doesn’t work. With over 200
                  verified factors in play.
                </div>
              </div>
              <div className="inner-container">
                {/* Contact Form */}
                <div className="contact-form">
                  {/*Contact Form*/}
                  <form
                    method="post"
                    action="https://///sendemail.php"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-user-2" />
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-phone-call" />
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Phone"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-big-envelope" />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                        <span className="icon flaticon-notepad" />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <span className="icon flaticon-message" />
                        <textarea
                          name="message"
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                        <button
                          className="theme-btn btn-style-three"
                          type="submit"
                          name="submit-form"
                        >
                          <span className="txt">Submit Now</span>
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*End Contact Form */}
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Form Section */}
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

export default ContactUs;
