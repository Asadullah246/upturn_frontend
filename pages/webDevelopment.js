import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const WebDevelopment = () => {
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
          <PageHeader pagename={"Web Development"} />
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
                        <li>
                          <a href="seo.html">
                            <span className="color-layer" />
                            SEO Optimization
                          </a>
                        </li>
                        <li className="current">
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
                            upTurnIdea
                          </li>
                          <li>
                            upTurnIdea
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
                        <h3>Web Development for Conversions</h3>
                        <p>
                          What’s the main purpose of your website? Turning the
                          visitors into customers, right? In web design and
                          development, we call it conversion.
                        </p>{" "}
                        <p>
                          You see, very few web design and development companies
                          in Bangladesh understand this. A badly designed
                          website will cause you to waste your time and money.
                          The better the website is, the more visitors are
                          converted into customers. So build your website with
                          an award-winning web design and development company
                          that can deliver the result!{" "}
                        </p>
                        <h4>Web Design And Development Services</h4>
                        <p>
                          As a leading website design company in Bangladesh, we
                          ensure top-notch web development services for your
                          business needs. With decades of experience in the
                          field of website design and development, we can help
                          you build a website that appeals your audience and
                          converts them into leads.
                        </p>
                        <p>
                          As a web development company, we are catering to
                          everybody: from personal website to corporate or
                          e-commerce website. Make sure you are working with the
                          best web design company in Bangladesh.{" "}
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
                        <h4>Why It’s Good for SEO Pros</h4>
                        <p>
                          Managing a client’s SEO consists of many different
                          timelines and action items. Keeping track of client
                          emails, meetings, and central documents is a full-time
                          job.
                        </p>
                        <div className="two-columns">
                          <div className="row clearfix">
                            <div className="column col-lg-6 col-md-6 col-sm-12">
                              <p>
                                By offering one of the best all-encompassing
                                software solutions, Basecamp helps busy SEO pros
                                stay on top of their entire business by more
                                efficiently checking in with their team and
                                deadlines in one easy to use the app.Casie
                                Gillette, senior director of digital marketing
                                at KoMarketing, uses Basecamp mainly for
                                communicating to clients.
                              </p>
                              <p>
                                “Basecamp is our primary means of communication
                                with clients,” Gillette said. “For any
                                deliverable, it allows an easy way to track the
                                conversation and adjust docs accordingly.”
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
          {/* End Clients Section */}
        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </body>
      {/* body end  */}
    </div>
  );
};

export default WebDevelopment;
