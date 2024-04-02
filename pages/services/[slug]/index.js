import Head from "next/head";
import React, { useEffect, useState } from "react";
import SidebarServiceLinks from "../../../components/service/SidebarServiceLinks";
import SearchPopUp from "../../../components/shared/SearchPopUp";
import TopScrolling from "../../../components/shared/ScrollToTop";
import PageHeader from "../../../components/shared/pageHeader";
import { useRouter } from "next/router";
import { getData } from "../../../components/shared/Api";

const ServiceDetails = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [service, setService]=useState()
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


    useEffect(() => {

      if (slug) {
        const blogsData = async () => {
          const res = await getData(`services/${slug}`);
          setService(res?.data);
          return res?.data;
        };

        blogsData();
      }
    }, [slug]);

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

          <PageHeader pagename={service?.name} />
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Sidebar Side */}
                <div className="sidebar-side left-sidebar col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Services */}
                    <SidebarServiceLinks />
                    {/* Broucher Widget */}
                    {/* <div className="broucher-widget">
                      <div
                        className="widget-content"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/pattern-19.jpg)",
                        }}
                      >
                        <h3>
                          Download <br /> Our Brochures
                        </h3>
                        <div className="icon flaticon-pdf-1" />
                        <div className="text">
                          Business is a marketing discipline focused on growing
                          visibility in organic (non-paid) technic required.
                        </div>
                        <a href="#" className="download">
                          Click here to download
                        </a>
                      </div>
                    </div> */}
                    {/* Help Widget */}
                    <div className="help-widget">
                      <div className="widget-content">
                        <h4>Need Help ?</h4>
                        <div className="text">
                          Please feel free to contact us. We will get back to
                          you with 1-2 business days. Or just call us now
                        </div>
                        <ul className="help-list">
                          <li>
                            <a href={`tel:${info?.phone}`}>
                              <span className="icon fa fa-phone" />

                              {info?.phone}
                            </a>
                          </li>
                          <li>
                            <a href={`mailto:${info?.email}`}>
                              <span className="icon fa fa-envelope-o" />
                              {info?.email}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </aside>
                </div>
                {/* Content Side */}
                <div className="content-side right-sidebar col-lg-8 col-md-12 col-sm-12">
                  <div className="service-detail">
                    <div className="inner-box">
                      <div className="image">
                        <img
                          // src="/newupdate/images/resource/service-1.jpg"
                          src={service?.image}
                          alt=""
                        />
                      </div>
                      <div className="lower-content">
                        <h3>{service?.name}</h3>
                        <p>
                        {service?.shortDescription}
                        </p>
                        {service?.description?.map(s=>{
                          return(
                            <div>
                               <h4>{s?.title}</h4>
                               <p>{s?.details}</p>
                            </div>
                          )
                        })}



                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sidebar Page Container */}
          {/* Clients Section */}
          <section className="clients-section style-two">
            <div className="auto-container">
              <div className="sponsors-outer">
                {/*Sponsors Carousel*/}
                <ul className="sponsors-carousel owl-carousel owl-theme">
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/4.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/5.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/1.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/2.png" alt="" />
                      </a>
                    </figure>
                  </li>
                  <li className="slide-item">
                    <figure className="image-box">
                      <a href="#">
                        <img src="/newupdate/images/clients/3.png" alt="" />
                      </a>
                    </figure>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* End Clients Section */}
        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default ServiceDetails;
