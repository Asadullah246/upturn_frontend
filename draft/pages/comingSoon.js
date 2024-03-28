import Head from "next/head";
import React from "react";
import TopScrolling from "../../components/shared/ScrollToTop";
import SearchPopUp from "../../components/shared/SearchPopUp";

const ComingSoon = () => {
  return (
    <div>
   
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Coming Soon */}
          <section
            className="coming-soon"
            style={{ backgroundImage: "url(images/background/1.jpg)" }}
          >
            <div className="content">
              <div className="content-inner">
                <div className="auto-container">
                  <div className="logo">
                    <a href="/">
                      <img src="images/logo-2.png" alt="" />
                    </a>
                  </div>
                  <div className="sec-title">
                    <h2>Coming Soon</h2>
                  </div>
                  <div className="time-counter">
                    {/* Time Countdown */}
                    <div
                      className="time-countdown clearfix"
                      data-countdown="2021/12/9"
                    />
                    {/* Clock / Bg Clock */}
                    <div className="clock-wrapper">
                      <div className="clock-base">
                        <div className="click-indicator">
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                          <div>
                            <span />
                          </div>
                        </div>
                        <div className="clock-hour" />
                        <div className="clock-minute" />
                        <div className="clock-second" />
                        <div className="clock-center" />
                      </div>
                    </div>
                  </div>
                  {/*Emailed Form*/}
                  <div className="emailed-form">
                    <h3>Our Website is under construction.</h3>
                    <div className="text">
                      stay tuned for something amazing! <br />
                      Subscribe to be notified
                    </div>
                    <form
                      method="post"
                      action="https://///index.html"
                    >
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          defaultValue=""
                          placeholder="Your Email"
                          required=""
                        />
                        <button type="submit">
                          <span className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <ul className="social-icon-one">
                    <li>
                      <a href="#">
                        <span className="fa fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-pinterest-p" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End Coming Soon */}
        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </body>

      {/* body end  */}
    </div>
  );
};

export default ComingSoon;
