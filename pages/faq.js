import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import FaqNew from "../components/shared/FaqNew";

const Faq = () => {
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

          <PageHeader pagename={"Faq"} />
          {/* End Page Title Section */}
          {/* Faq Page Section */}
         <FaqNew/> 
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
                      <form method="post" action="#">
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
                      <img src="/newupdate/images/resource/faq.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Faq's Form Section */}

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

