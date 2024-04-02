import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";

const Services = () => {
  const logos=["icon flaticon-line-chart", "icon flaticon-pie-chart","icon flaticon-gear", "icon flaticon-pie-chart", "icon flaticon-bar-chart", "icon flaticon-line-chart", "icon flaticon-cloud-computing","icon flaticon-search-1","icon flaticon-line-chart", "icon flaticon-pie-chart","icon flaticon-gear", "icon flaticon-pie-chart", "icon flaticon-bar-chart", "icon flaticon-line-chart","icon flaticon-cloud-computing","icon flaticon-search-1"]

  const [services, setservices] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`services`);
      setservices(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);

  return (
    <section className="services-section-two style-two">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="">Our Services</div>
          <h2>You Take Growth For Business</h2>
        </div>
        <div className="inner-container">
          <div className="clearfix row">
            {/* Service Block Two / Style Two */}

            {services?.map((service, index) => {
              return (
                <div
                  key={index}
                  className="service-block-two style-two col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="inner-box">
                    <div className="color-layer" />
                    <div
                      className="icon-one"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/icon-1.png)",
                      }}
                    />
                    <div
                      className="icon-two"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/icon-2.png)",
                      }}
                    />
                    <div
                      className="icon-three"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/icon-19.png)",
                      }}
                    />
                    <div
                      className="icon-four"
                      style={{
                        backgroundImage:
                          "url(/newupdate/images/icons/icon-4.png)",
                      }}
                    />
                    <div className="icon-box">
                      <span className={logos[index]} />
                    </div>
                    <h5>
                      <a href={`/services/${service?._id}`}>{service?.title}</a>
                    </h5>
                    <div className="text">{service?.shortDescription?.slice(0,152)}...</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Lower Box */}
        <div className="lower-box">
          <div className="text">
            If You See All Service <a href="/services">Click Hare</a> Now.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
