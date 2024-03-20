import React from "react";

const serviceData = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Increase your website's search engine rankings to generate more organic visitors and customers.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Social Media Marketing (SMM)",
    description:
      "Engage with your audience on major social platforms to grow your brand and build a community around your products or services.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  }, 

  {
    title: "Marketing Analytics",
    description:
      "Our free analytics service empowers your strategy by delivering campaign performance information and optimization options.",
    logoInClass: "icon flaticon-gear",
    link: "/contentMarketing",
  },
  {
    title: "Video Editing",
    description:
      "We create audience-grabbing reels, shorts, commercial, and motion videos.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  },
  {
    title: "YouTube Marketing",
    description:
      "Use video to attract attention, build brand awareness, and spread your message on the world's largest video platform.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Graphics Design",
    description:
      "We offer logo design and complete visual branding solutions to enhance your brand's appearance",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Media Buying Services",
    description:
      "Place advertisements strategically on Facebook and Google to maximize visibility and audience interaction.",
    logoInClass: "icon flaticon-cloud-computing",
    link: "/contentMarketing",
  },
  {
    title: "Google Shopping Ad & Search Ad",
    description:
      "Targeted Google Shopping and search advertisements improve sales and visibility.",
    logoInClass: "icon flaticon-line-chart",
    link: "/contentMarketing",
  },
  {
    title: "Small Business 360 Marketing Services:",
    description:
      "Customized digital marketing solutions for small businesses to maximize online growth.",
    logoInClass: "icon flaticon-pie-chart",
    link: "/contentMarketing",
  },
  {
    title: "Dedicated Landing Page",
    description:
      "A dedicated landing page may advance your online marketing by converting visitors into leads or customers.",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Media Buying (Facebook Ads & Google Ads)",
    description: "We maximize your advertising ROI on Facebook and Google.",
    logoInClass: "icon flaticon-search-1",
    link: "/contentMarketing",
  },
  {
    title: "Email Marketing",
    description:
      "Build customer loyalty and sales with personalized email marketing.",
    logoInClass: "icon flaticon-bar-chart",
    link: "/contentMarketing",
  },
  {
    title: "Pay Per Click (PPC)",
    description:
      "Use search engines and social media to acquire rapid exposure and tailored website visitors.",
    logoInClass: "icon flaticon-search-1",
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
