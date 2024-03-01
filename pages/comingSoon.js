import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";

const ComingSoon = () => {
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
