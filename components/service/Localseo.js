import React from "react";

const serviceData = [
  {
    title: "Local Signals",
    description:
      "Google search for local signals in content, links, social media profile and profile listings to provide the most relevant local results to the searcher. ",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  },
  {
    title: "Google Business Profile",
    description:
      "We will implement Google recommended & updated local SEO tactics while optimizing your Google business profile.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Local search citations",
    description:
      "Citations are a major ranking factor. It’s all about putting your business name, address, and phone number on various online listings.",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Reputation Management",
    description:
      "Reviews can play a vital role in both rankings & business. Reviews will define your success for local SEO when it comes to ranking with Google.",
    logoInClass: "icon flaticon-search-1",
    link: "/contentMarketing",
  },
  {
    title: "Quality link building",
    description:
      "Creating high-quality & relevant backlinks is one of the major ranking factors to increase your brand’s credibility & trustworthiness.",
    logoInClass: "icon flaticon-gear",
    link: "/contentMarketing",
  },
  {
    title: "Keyword research",
    description:
      "Keyword research can dictate where your business is going. We will perform advanced keywords research based on your business.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  }
];
const Localseo = () => {
  return (
    <section className="services-section-two style-two" style={{padding:"0", marginTop:"30px"}}> 
      <div className="auto-container">
        {/* Sec Title */}
        {/* <div className="sec-title centered">
          <div className="">Our Services</div>
          <h2>You Take Growth For Business</h2>
        </div> */}
        <div className="inner-container">
          <div className="clearfix">
            {/* Service Block Two / Style Two */}

            {serviceData?.map((service, index) => {
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
                      <span className={service?.logoInClass} />
                    </div>
                    <h5>
                      <a href="#">{service?.title}</a>
                    </h5>
                    <div className="text">{service?.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Lower Box */}

      </div>
    </section>
  );
};

export default Localseo;
