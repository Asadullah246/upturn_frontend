import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getData } from "../shared/Api";

const TestimonialSection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("testimonial");
      setBlogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);

  return (
    <section className="testimonial-section">
      <div
        className="icon-layer-one"
        style={{
          backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
        }}
      />
      <div
        className="icon-layer-two"
        style={{
          backgroundImage: "url(/newupdate/images/icons/icon-7.png)",
        }}
      />
      <div
        className="icon-layer-three"
        style={{
          backgroundImage: "url(/newupdate/images/icons/icon-8.png)",
        }}
      />
      <div
        className="icon-layer-four"
        style={{
          backgroundImage: "url(/newupdate/images/icons/icon-9.png)",
        }}
      />
      <div
        className="icon-layer-five"
        style={{
          backgroundImage: "url(/newupdate/images/icons/icon-10.png)",
        }}
      />
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Real Testimonials</div>
          <h2>
          LISTEN TO OUR CLIENTS
          </h2>
          <div className="text">
          We know the importance of customers. <br/> We ensure to get the best experience

           
          </div>
        </div>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          showDots={true}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          // itemClass="carousel-item-padding-40-px"
        >
          {blogs?.map((testimonial) => {
            return (
              <div className="testimonial-block">
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
                    <div className="text">
                    {testimonial?.description}
                    </div>
                    <div className="lower-box">
                      <div className="quote-icon fa fa-quote-left" />
                      <h6>{testimonial?.name}</h6>
                      <div className="designation">{testimonial?.designation}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
