import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";

const AllServices = () => {
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
    <section className="services-page-section">
      <div className="auto-container">
        <div className="row clearfix">
          {/* Service Block Four */}

          {services?.map((service, index)=>{
            return(
                <div key={index} className="service-block-four col-lg-4 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="color-layer" />
                  <div
                    className="icon-one"
                    style={{
                      backgroundImage: "url(/newupdate/images/icons/icon-1.png)",
                    }}
                  />
                  <div
                    className="icon-two"
                    style={{
                      backgroundImage: "url(/newupdate/images/icons/icon-2.png)",
                    }}
                  />
                  <div
                    className="icon-three"
                    style={{
                      backgroundImage: "url(/newupdate/images/icons/icon-3.png)",
                    }}
                  />
                  <div
                    className="icon-four"
                    style={{
                      backgroundImage: "url(/newupdate/images/icons/icon-4.png)",
                    }}
                  />
                  <div className="icon-box">
                    <span className={logos[index]} />
                    <div
                      className="icon-five"
                      style={{
                        backgroundImage: "url(/newupdate/images/icons/icon-6.png)",
                      }}
                    />
                  </div>
                  <h5>
                    <a href={`/services/${service?._id}`} >{service?.name}</a>
                  </h5>
                  <div className="text">
                  {service?.shortDescription?.slice(0,100)}
                  </div>
                  <a
                    href={`/services/${service?._id}`}
                    className="arrow-icon flaticon-arrow-pointing-to-right"
                  />
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  );
};

export default AllServices;
