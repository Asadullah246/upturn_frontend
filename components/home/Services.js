import React from "react";

const serviceData = [
  {
    title: "Digital Marketing",
    description:
      "Digital marketing creates opportunities for small and medium business enterprises to compete with larger business entities.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  },
  {
    title: "Search Engine Optimization",
    description:
      "SEO is a part of Digital marketing that help your targeted customers to find you in search engine results and take action.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Web Design and Development",
    description:
      "Professional web Designing is the first step to showcase your brand and convert visitors into buyers.",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Software Development",
    description:
      "Building reliable and scalable software development to meet your business goals.",
    logoInClass: "icon flaticon-search-1",
    link: "/contentMarketing",
  },
  {
    title: "E-commerce SEO",
    description:
      "SEO has the potential to boost your e-commerce site’s sales and revenue and make you the market leader in your industry.",
    logoInClass: "icon flaticon-gear",
    link: "/contentMarketing",
  },
  {
    title: "Social Media Marketing",
    description:
      "If you aren’t sure how you should proceed in promoting your brand let us analyze your business to take most effective plan.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  },
  {
    title: "Clipping Path",
    description:
      "From a simple white background to the most complex clipping paths. Get pixel perfect image editing services, whenever you need them.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Video Production",
    description:
      "Our video production services can help direct people to your business, build your reputation, and expand your sales.",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Web Hosting",
    description:
      "We offer web hosting services that will provide you with reliable access to the internet and the ability to host a website more securely.",
    logoInClass: "icon flaticon-cloud-computing",
    link: "/contentMarketing",
  },
];
const Services = () => {
  return (
    <section className="services-section-two style-two">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="">Our Services</div>
          <h2>You Take Growth For Business</h2>
        </div>
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
                      <a href="content-marketing.html">{service?.title}</a>
                    </h5>
                    <div className="text">{service?.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Lower Box */}
        <div className="lower-box">
          <div className="text">
            If You See All Service <a href="/services1">Click Hare</a> Now.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
