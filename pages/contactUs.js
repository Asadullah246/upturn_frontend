import Head from "next/head";
import React from "react";
import PageHeader from "../components/shared/pageHeader";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import ContactForm from "../components/shared/ContactForm";

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
         <PageHeader pagename={"Contact Us"}/>
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
                        10:00am to 6:00pm <br /> Sunday Closed
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-pin" />
                        13005 Greenville Avenue <br /> California, TX 70240
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-phone-call" />
                        <a href="tel:+1-000999-0099">+1 000999 0099</a>
                        <a href="mailto:mail@example.com">mail@example.com</a>
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
        <ContactForm/> 
          {/* End Contact Form Section */}

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
