import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import { ToastSuccess } from "../components/shared/ToastAlerts";

const Price = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    ToastSuccess("Thank you for subscribe")
  }
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
          <PageHeader pagename={"Price"}/>
          {/* Pricing Section */}
          <section className="pricing-section style-two">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Packages</div>
                <h2>Our Pricing Table</h2>
                <div className="text">
                  We take a consultative approach to every client engagement and
                  find actionable <br /> solutions that will help your
                  organization achieve the best outcomes.
                </div>
              </div>
              <div className="pricing-tabs tabs-box">
                {/*Tabs Container*/}
                <div className="tabs-content">
                  {/*Tab*/}
                  <div className="tab active-tab" id="prod-monthly">
                    <div className="content">
                      <div className="row clearfix">
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$69.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-five">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-1.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Economy</div>
                            <div className="price">$79.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-six">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer style-two"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-3.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$89.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-three">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-2.png)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Tab*/}
                  <div className="tab" id="prod-yearly">
                    <div className="content">
                      <div className="row clearfix">
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$69.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-five">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-1.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Economy</div>
                            <div className="price">$79.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-six">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer style-two"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-3.png)",
                              }}
                            />
                          </div>
                        </div>
                        {/* Price Block */}
                        <div className="price-block col-lg-4 col-md-6 col-sm-12">
                          <div className="inner-box">
                            <div className="title">Standard</div>
                            <div className="price">$89.99</div>
                            <ul className="price-list">
                              <li>Social Media Marketing</li>
                              <li>5.600 Keywords</li>
                              <li>One Way Link Building</li>
                              <li>10 Free Optimization</li>
                              <li>10 Press Releases</li>
                            </ul>
                            <a href="#" className="theme-btn btn-style-three">
                              <span className="txt">Buy Now</span>
                            </a>
                            <div
                              className="price-pattern-layer"
                              style={{
                                backgroundImage:
                                  "url(/newupdate/pages/background/price-pattern-2.png)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Tab Btns*/}
                <div className="buttons-outer">
                  <ul className="tab-buttons clearfix">
                    <li data-tab="#prod-monthly" className="tab-btn active-btn">
                      Monthly
                    </li>
                    <li data-tab="#prod-yearly" className="tab-btn">
                      Yearly
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/* End Pricing Section */}
          {/* Newsleter Section */}
          <section className="newsletter-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Newsletter</div>
                      <h2>Subscribe Our Newsletter</h2>
                    </div>
                    <div className="text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      donec tempus pellentesque dui vel tristique purus justo{" "}
                    </div>
                    <div className="newsletter-form">
                      <form
                        onSubmit={handleSubmit}
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter Your Email"
                            required
                          />
                          <button
                            type="submit"
                            className="theme-btn btn-style-three"
                          >
                            <span className="txt">Subscribe Now</span>
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
                      <img src="/newupdate/images/resource/newsletter.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}

        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default Price;
