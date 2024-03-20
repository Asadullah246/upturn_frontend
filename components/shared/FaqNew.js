import React, { useState } from "react";

const FaqNew = () => {
  // const [activeIndex, setActiveIndex] = useState(null);

  // const handleAccordionClick = (index) => {
  //   setActiveIndex(prevIndex => prevIndex === index ? null : index);
  // };

  const [activeIndexes, setActiveIndexes] = useState(Array(5).fill(null)); // Initialize an array with 10 null values

  const handleAccordionClick = (index) => {
    setActiveIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index ? (prevIndex === null ? i : null) : prevIndex
      )
    );
  };
  const [activeIndexes2, setActiveIndexes2] = useState(Array(5).fill(null)); // Initialize an array with 10 null values

  const handleAccordionClick2 = (index) => {
    setActiveIndexes2((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index ? (prevIndex === null ? i : null) : prevIndex
      )
    );
  };

  return (
    <section className="faq-page-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Some Faq’s</div>
          <h2>Work with a Dedicated SEO Company</h2>
          <div className="text">
            Our approach to SEO is uniquely built around what we know works…and
            what we know <br /> doesn’t work. With over 200 verified factors in
            play.
          </div>
        </div>
        <div className="row clearfix">
          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <ul className="accordion-box">
              {/* updated li  */}
              {/* <li className={`accordion block ${activeIndex === 0 ? 'active-block' : ''}`}>
          <div className={`acc-btn ${activeIndex === 0 ? 'active' : ''}`} onClick={() => handleAccordionClick(0)}>
            Best Practices for Keyword Density? <div className="icon flaticon-right-arrow-1" />
          </div>
          <div className={`acc-content ${activeIndex === 0 ? '  current' : ''}`}>
            <div className="content">
              <div className="text">
                Google has said for years that the most important single factor to them is high quality content. Now more than ever, they have the ability. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers.
              </div>
            </div>
          </div>
        </li> */}

              {activeIndexes.map((activeIndex, index) => (
                <li
                  className={`accordion block ${
                    activeIndex !== null ? "active-block" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`acc-btn ${
                      activeIndex !== null ? "active" : ""
                    }`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    What is off page SEO link building? {index + 1}{" "}
                    <div className="icon flaticon-right-arrow-1" />
                  </div>
                  <div
                    className={`acc-content ${
                      activeIndex !== null ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>
              ))}

              {/* updated li end */}

              {/* <li className="accordion block active-block">
                <div className="acc-btn active">
                  What is off page SEO link building?{" "}
                  <div className="icon flaticon-right-arrow-1" />
                </div>
                <div className="acc-content current">
                  <div className="content">
                    <div className="text">
                      Google has said for years that the most important single
                      factor to them is high quality content. Now more than
                      ever, they have the ability. We help ambitious businesses
                      like yours generate more profits by building awareness,
                      driving web traffic, connecting with customers.
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
          {/* Column */}
          <div className="column col-lg-6 col-md-12 col-sm-12">
            <ul className="accordion-box">
              {/* new accordion  */}
              {activeIndexes2.map((activeIndex, index) => (
                <li
                  className={`accordion block ${
                    activeIndex !== null ? "active-block" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`acc-btn ${
                      activeIndex !== null ? "active" : ""
                    }`}
                    onClick={() => handleAccordionClick2(index)} 
                  >
                    Where do I start my SEO strategy? {index + 1}{" "}
                    <div className="icon flaticon-right-arrow-1" />
                  </div>
                  <div
                    className={`acc-content ${
                      activeIndex !== null ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <div className="text">
                        Google has said for years that the most important single
                        factor to them is high quality content. Now more than
                        ever, they have the ability. We help ambitious
                        businesses like yours generate more profits by building
                        awareness, driving web traffic, connecting with
                        customers.
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              {/* new accordion end */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqNew;
