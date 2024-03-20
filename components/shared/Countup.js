import React from "react";
import CountUp from "react-countup";

const Countup = () => {
  return (
    <section className="counter-section style-two">
      <div className="auto-container">
        <div className="inner-container">
          {/* Fact Counter */}
          <div className="fact-counter">
            <div className="row clearfix">
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box">
                      {/* <span
                          className="count-text"
                          data-speed={2500}
                          data-stop={230}
                        >
                          0
                        </span> */}
                      <CountUp
                        start={0}
                        end={3}
                        duration={2.75}
                        // delay={3}
                      ></CountUp>
                      +
                    </div>
                    <h4 className="counter-title">Years Of Experience</h4>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box alternate">
                      {/* <span
                          className="count-text"
                          data-speed={2000}
                          data-stop={95}
                        >
                          0
                        </span> */}
                      <CountUp
                        start={0}
                        end={500}
                        duration={2.75}
                        // delay={3}
                      ></CountUp>
                      +
                    </div>
                    <h4 className="counter-title">Happy Clients</h4>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="column counter-column col-lg-4 col-md-4 col-sm-12">
                <div
                  className="inner wow fadeInLeft"
                  data-wow-delay="600ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="count-outer count-box">
                      {/* <span
                          className="count-text"
                          data-speed={4000}
                          data-stop={820}
                        >
                          0
                        </span> */}
                      <CountUp
                        start={0}
                        end={20}
                        duration={2.75}
                        // delay={3}
                      ></CountUp>
                      +
                    </div>
                    <h4 className="counter-title">Brains To Support</h4>
                  </div>
                </div>
              </div>
              {/* Column */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countup;
