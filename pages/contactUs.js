import Head from "next/head";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/shared/pageHeader";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import ContactForm from "../components/shared/ContactForm";
import { getData } from "../components/shared/Api";

const ContactUs = () => {

  const [info, setInfo]=useState()
  const dataId="660895de0608b63dc8814028"

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`websiteInfo/${dataId}`);
      setInfo(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);

  return (
    <div>
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}
          <PageHeader pagename={"Contact Us"} />
          {/* End Main Header */}

          {/* Contact Info Section */}
          <section className="contact-info-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Follow Our Info</div>
                <h2>Contact information</h2>
                <div className="text">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries within 24 hours on business days. <br /> We will be
                  happy to answer your questions.
                </div>
              </div>
              <div className="inner-container">
                <div className="row clearfix">
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-clock" />
                        10:00am to 6:00pm <br /> Friday Closed
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-pin" />
                        {info?.address}
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <div className="info-box">
                      <div className="box-inner">
                        <div className="icon flaticon-phone-call" />
                        <a href={`tel:${info?.phone}`}>{info?.phone}</a> <br />
                        <a href={`mailto:${info?.email}`}>
                           {info?.email}
                          </a>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="column col-lg-6 col-md-6 col-sm-12">
                    <ul className="social-box">
                      <span>
                        Our Socials Links{" "}
                        <i>
                          Print this page to PDF for the complete set of
                          vectors.
                        </i>
                      </span>
                      <li className="facebook">
                        <a href={info?.facebook || "#"} className="fa fa-facebook-f" />
                      </li>
                      <li className="twitter">
                        <a href={info?.twitter || "#"} className="fa fa-twitter" />
                      </li>
                      <li className="linkedin">
                        <a href={info?.linkedin || "#"} className="fa fa-google-plus" />
                      </li>
                      {/* <li className="pinterest">
                        <a href={info?.facebook || "#"} className="fa fa-pinterest-p" />
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Map Boxed */}
              <div className="map-boxed">
                {/* Map Outer */}
                <div className="map-outer">


                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.5393653104136!2d90.4013445983948!3d23.7802106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c73ba848a2fb%3A0xae12bfcecf23f8ab!2sMohakhali%20wirelessgate!5e0!3m2!1sen!2sbd!4v1710959115156!5m2!1sen!2sbd"
                    width="100%"
                    height="560px"
                    frameBorder={0}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Info Section */}
          {/* Contact Form Section */}
          <ContactForm />
          {/* End Contact Form Section */}
        </div>
        {/*End pagewrapper*/}

        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>

      {/* body end  */}
    </div>
  );
};

export default ContactUs;
