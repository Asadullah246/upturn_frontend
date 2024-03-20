import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

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

