import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import { ToastSuccess } from "../components/shared/ToastAlerts";

const Testimonial = () => {
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

          <PageHeader pagename={"Testimonial"}/>
          {/* End Page Title Section */}
          {/* Testimonial Page Section */}
          <section className="testimonial-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-1.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="text">
                        I had so much fun working with your specialists on my
                        business project that we will come back soom!
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Margaret Sunsan</h6>
                        <div className="designation">Develper</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-2.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star dark" />
                      </div>
                      <div className="text">
                        i liked working with these creative guys, who know
                        everything about quality design, innovations and
                        usability,
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Eizabeth Blackwell</h6>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-1.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="text">
                        I had so much fun working with your specialists on my
                        business project that we will come back soom!
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Margaret Sunsan</h6>
                        <div className="designation">Develper</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-2.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star dark" />
                      </div>
                      <div className="text">
                        i liked working with these creative guys, who know
                        everything about quality design, innovations and
                        usability,
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Eizabeth Blackwell</h6>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-1.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="text">
                        I had so much fun working with your specialists on my
                        business project that we will come back soom!
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Margaret Sunsan</h6>
                        <div className="designation">Develper</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Testimonial Block */}
                <div className="testimonial-block col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-box">
                    <div className="pattern-layer" />
                    <div className="author-image-outer">
                      <div className="author-image">
                        <img src="/newupdate/images/resource/author-2.png" alt="" />
                      </div>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star dark" />
                      </div>
                      <div className="text">
                        i liked working with these creative guys, who know
                        everything about quality design, innovations and
                        usability,
                      </div>
                      <div className="lower-box">
                        <div className="quote-icon fa fa-quote-left" />
                        <h6>Eizabeth Blackwell</h6>
                        <div className="designation">Web Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Testimonial Page Section */}
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
                            required=""
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

export default Testimonial; 

