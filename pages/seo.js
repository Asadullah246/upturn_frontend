import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Seo = () => {
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
          <PageHeader pagename={"Seo"} />
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar Side */}
                <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Services */}
                    <div className="sidebar-widget">
                      <ul className="service-list">
                        <li>
                          <a href="services.html">
                            <span className="color-layer" />
                            All Services
                          </a>
                        </li>
                        <li>
                          <a href="content-marketing.html">
                            <span className="color-layer" />
                            Content Marketing
                          </a>
                        </li>
                        <li>
                          <a href="social-marketing.html">
                            <span className="color-layer" />
                            Social Marketing
                          </a>
                        </li>
                        <li>
                          <a href="app-development.html">
                            <span className="color-layer" />
                            App Development
                          </a>
                        </li>
                        <li className="current">
                          <a href="seo.html">
                            <span className="color-layer" />
                            SEO Optimization
                          </a>
                        </li>
                        <li>
                          <a href="web-development.html">
                            <span className="color-layer" />
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a href="advertising.html">
                            <span className="color-layer" />
                            PPC Advertising
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Broucher Widget */}
                    <div className="broucher-widget">
                      <div
                        className="widget-content"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/pattern-19.jpg)",
                        }}
                      >
                        <h3>
                          Download <br /> Our Brochures
                        </h3>
                        <div className="icon flaticon-pdf-1" />
                        <div className="text">
                          Business is a marketing discipline focused on growing
                          visibility in organic (non-paid) technic required.
                        </div>
                        <a href="#" className="download">
                          Click here to download
                        </a>
                      </div>
                    </div>
                    {/* Help Widget */}
                    <div className="help-widget">
                      <div className="widget-content">
                        <h4>Need Help ?</h4>
                        <div className="text">
                          Please feel free to contact us. We will get back to
                          you with 1-2 business days. Or just call us now
                        </div>
                        <ul className="help-list">
                          <li>
                            <a href="tel:+0-000-0000-000">
                              <span className="icon fa fa-phone" />
                              +0 000 0000 000
                            </a>
                          </li>
                          <li>
                            <a href="mailto:upTurnIdea@example.com">
                              <span className="icon fa fa-envelope-o" />
                              upTurnIdea@example.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
                {/* Content Side */}
                <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                  <div className="service-detail">
                    <div className="inner-box">
                      <div className="image">
                        <img
                          src="/newupdate/images/resource/service-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="lower-content">
                        <h3>SEO Optimization</h3>
                        <p>
                          Having been around for over a decade, Basecamp is
                          considered a reliable tool that excels at giving
                          organizations a high-level view of their teams. Like
                          Asana, Basecamp can help monitor tracking, but also
                          offers additional features like direct messaging
                          chats, centralized document storage, and a scheduling
                          tool.Basecamp aims to take on Slack, Asana, Google
                          Drive, and Dropbox by melding all of their competitors
                          into one robust management tool.
                        </p>
                        <h4>Features</h4>
                        <p>
                          Designed with the harried business person in mind,
                          Basecamp helps managers and team members stay on top
                          of their professional lives. The app boasts that users
                          will no longer drown in a sea of emails as that
                          feature is already embedded into the app.
                          Additionally, the scheduling and tracking features
                          help ensure teams never again miss a deadline. Another
                          interesting component of Basecamp is that managercan
                          eliminate the need for “check-in” meetings by sending
                          an automated message daily to employees that ask for a
                          recap of what they accomplished that day. Then
                          employees can “tag” teammates in their recaps to
                          explain what they need help with or what they
                          finished.
                        </p>
                        <div className="two-columns">
                          <div className="row clearfix">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                              <div className="image">
                                <img
                                  src="/newupdate/images/resource/service-2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                              <h4>Cost</h4>
                              <p>
                                A unique feature of Basecamp is that the app
                                doesn’t charge for an increase in the number of
                                users or projects. So unlike some of its peers,
                                Basecamp charges a flat-fixed fee of $99 a month
                                for a team, no matter the size.
                              </p>
                            </div>
                          </div>
                        </div>
                        <h4>
                          The Secret Sauce That Makes Our SEO Company Superior
                        </h4>
                        <p>
                          Most SEO agencies will offer you rubbish things:
                          backlinks, directory submission, forum submission,
                          social bookmarking, blog commenting, …the list is
                          endless. But they don’t tell you what they will
                          deliver in terms of results.
                        </p>
                        <div className="two-columns">
                          <div className="row clearfix">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                              <p>
                                Unfortunately, these are waste of time and
                                money. We will ask you to forget everything you
                                think you know about SEO and how other companies
                                work. Our secret sauce is that we make your
                                website super useful for your visitors,
                                customers, and clients. We make sure that they
                                get exactly what they are looking for. That
                                makes us skyrocket your profit.
                              </p>
                              <p>
                                However, to protect our ability to outperform
                                all other SEO companies, we never disclose our
                                methodology during the build-out phase.
                              </p>
                            </div>
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                              <div className="image">
                                <img
                                  src="/newupdate/images/resource/service-3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sidebar Page Container */}
          {/* Clients Section */}
          <section className="clients-section style-two">
            <div className="auto-container">
              <div className="sponsors-outer">
                {/*Sponsors Carousel*/}
                <ul className="sponsors-carousel owl-carousel owl-theme">
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/4.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/5.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </body>
      {/* body end  */}
    </div>
  );
};

export default Seo;
