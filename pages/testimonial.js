import Head from "next/head";
import React, { useEffect, useState } from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import { ToastSuccess } from "../components/shared/ToastAlerts";
import { getData } from "../components/shared/Api";

const Testimonial = () => {
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("testimonial");
      setBlogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, [refresh]);

  const handleSubmit = (e) => {
    e.preventDefault();
    ToastSuccess("Thank you for subscribe");
  };

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

          <PageHeader pagename={"Testimonial"} />
          {/* End Page Title Section */}
          {/* Testimonial Page Section */}
          <section className="testimonial-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                {blogs?.map((testimonial) => {
                  return (
                    <div
                      key={testimonial?._id}
                      className="testimonial-block col-lg-6 col-md-12 col-sm-12"
                    >
                      <div className="inner-box">
                        <div className="pattern-layer" />
                        <div className="author-image-outer">
                          <div className="author-image">
                            {testimonial?.image ? (
                              <img src={testimonial?.image} alt="" />
                            ) : (
                              <img
                                height={95}
                                width={95}
                                style={{ borderRadius: "50%" }}
                                src={`https://ui-avatars.com/api/?name=${testimonial?.name}&background=C140D8&color=fff`}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="rating">
                            {[...Array(5)].map((rating, index) => {
                              return (
                                <span
                                  className={`${
                                    testimonial?.rating < index + 1
                                      ? "fa fa-star dark"
                                      : "fa fa-star "
                                  }`}
                                />
                              );
                            })}
                          </div>
                          <div className="text">{testimonial?.description}</div>
                          <div className="lower-box">
                            <div className="quote-icon fa fa-quote-left" />
                            <h6>{testimonial?.name}</h6>
                            <div className="designation">
                              {testimonial?.designation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                      <form onSubmit={handleSubmit}>
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
                      <img
                        src="/newupdate/images/resource/newsletter.png"
                        alt=""
                      />
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
