import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Faq = () => {
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
          <PageHeader pagename={"Faq"} />
          {/* End Page Title Section */}
          {/* Faq Page Section */}
          <section className="faq-page-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Some Faq’s</div>
                <h2>Work with a Dedicated SEO Company</h2>
                <div className="text">
                  Our approach to SEO is uniquely built around what we know
                  works…and what we know <br /> doesn’t work. With over 200
                  verified factors in play.
                </div>
              </div>
              <div className="row clearfix">
                {/* Column */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  <ul className="accordion-box">
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Best Practices for Keyword Density?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Best SEO Practices for Page Layouts?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block active-block">
                      <div className="acc-btn active">
                        What is off page SEO link building?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content current">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Best SEO Practices for High Quality Content?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Column */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  <ul className="accordion-box">
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        What is domain authority?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Which SEO techniques are popular?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        What is broken link building?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Are SEO meta tags important?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        How do I conduct keyword research?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Block*/}
                    <li className="accordion block">
                      <div className="acc-btn">
                        Where do I start my SEO strategy?{" "}
                        <div className="icon flaticon-right-arrow-1" />
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Google has said for years that the most important
                            single factor to them is high quality content. Now
                            more than ever, they have the ability. We help
                            ambitious businesses like yours generate more
                            profits by building awareness, driving web traffic,
                            connecting with customers.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End Faq Page Section */}
          {/* Faq's Form Section */}
          <section className="faq-form-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    {/* Sec Title */}
                    <div className="sec-title">
                      <div className="title">Your Quesiton</div>
                      <h2>Tell Us Any Question</h2>
                      <div className="text">
                        We provide best service for our customer check the list
                        now.
                      </div>
                    </div>
                    {/* Faq's Form */}
                    <div className="faq-form">
                      <form method="post" action="https://///contact.html">
                        <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            defaultValue=""
                            placeholder="Name"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Email"
                            required=""
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="theme-btn btn-style-three"
                          >
                            <span className="txt">Send Question</span>
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
                      <img src="images/resource/faq.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Faq's Form Section */}
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

export default Faq;
