import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import SidebarServiceLinks from "../components/service/SidebarServiceLinks";
import SidebarSubLinks from "../components/service/SidebarSubLinks";

const Seo = () => {

  const links=[
    {
        name:"Local SEO",
        link:"#localseo"
    },
    {
        name:"Healthcare SEO",
        link:"#healthcareseo"
    }

]

  return (
    <div>
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
                    <SidebarServiceLinks />
                    {/* Broucher Widget */}
                    <div className="broucher-widget">
                      <div
                        className="widget-content"
                        // style={{
                        //   backgroundImage:
                        //     "url(/newupdate/images/background/pattern-19.jpg)",
                        // }}
                      >
                        <h3>
                          {/* Download <br /> Our Brochures */}
                          SEO Optimization
                        </h3>
                        {/* <div className="icon flaticon-pdf-1" />
                        <div className="text">
                          Business is a marketing discipline focused on growing
                          visibility in organic (non-paid) technic required.
                        </div>
                        <a href="#" className="download">
                          Click here to download
                        </a> */}
                        <SidebarSubLinks links={links} />
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
