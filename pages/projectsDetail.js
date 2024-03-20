import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const ProjectsDetail = () => {
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

          <PageHeader pagename={"Projects Detail"}/>
          {/* Gallery Detail Section */}
          <section className="gallery-detail-section">
            <div className="auto-container">
              <div className="inner-container">
                {/* Info Section */}
                <div className="upper-box">
                  <div className="row clearfix">
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>PUBLISHED</strong>
                        </li>
                        <li>February 22, 2020</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>CATEGORY</strong>
                        </li>
                        <li>Development / Media</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      <ul className="list">
                        <li>
                          <strong>CLIENT</strong>
                        </li>
                        <li>ThemeRange</li>
                      </ul>
                    </div>
                    {/* Column */}
                    <div className="column col-lg-3 col-md-6 col-sm-12">
                      {/* Social Box */}
                      <ul className="social-box">
                        <li className="facebook">
                          <a href="#" className="fa fa-facebook-f" />
                        </li>
                        <li className="twitter">
                          <a href="#" className="fa fa-twitter" />
                        </li>
                        <li className="linkedin">
                          <a href="#" className="fa fa-linkedin" />
                        </li>
                        <li className="google">
                          <a href="#" className="fa fa-google" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="inner-box">
                  <div className="image titlt" data-tilt="" data-tilt-max={3}>
                    <img src="/newupdate/images/resource/service-4.jpg" alt="" />
                  </div>
                  <h3>The Challenge &amp; Solution</h3>
                  <p>
                    One of the principal decisions that startup owners have to
                    make is whether or not to engage in SEO. One common
                    consideration is the cost of investing in an SEO campaign
                    versus possible returns. Another is the daunting list of SEO
                    terminologies, which may overwhelm newcomers to the
                    e-commerce and website scene. If you are a new online
                    entrepreneur but are not convinced of the benefits of SEO,
                    then this article is for you! Here are some of the reasons
                    why SEO is important and why you should consider it as a
                    marketing technique. SEO is less expensive than other online
                    marketing approaches. It also offers higher reward rates
                    when compared to other techniques such as social media
                    marketing, pay per click advertising, and email marketing.
                    While you may need to defray a substantial amount to cover
                    initial SEO planning and processes that include website
                    design, programming, and strategizing, you can be sure to
                    get faster and more long-term results.
                  </p>
                  <blockquote>
                    “I cannot give you the formula for success, but I can give
                    you the formula for failure. It is: Try to please
                    everybody.”
                    <span className="author-name"> - HERBERT BAYARD SWOPE</span>
                  </blockquote>
                  <div className="gallery-column">
                    <div className="row clearfix">
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="image titlt"
                          data-tilt=""
                          data-tilt-max={1}
                        >
                          <img src="/newupdate/images/resource/project-1.jpg" alt="" />
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-12">
                        <div
                          className="image titlt"
                          data-tilt=""
                          data-tilt-max={1}
                        >
                          <img src="/newupdate/images/resource/project-2.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>
                    <span>02.</span> Working Process
                  </h4>
                  <p>
                    One SEO component called off-site SEO ensures that users of
                    external pages or of social media can find your website.
                    Being optimized for SEO increases the site’s potential to
                    draw customers from other platforms other than the search
                    engine. For instance, when you post content and links to
                    your page on Facebook or Twitter, you are able to promote
                    your website and attract more customers. One of the main
                    goals of SEO is to attract the targeted audience through
                    organic searches. The number of visitors to your site
                    influences your sales and subscriptions. It also promotes
                    the marketing of your products and services. Increased
                    inbound traffic is always good for business because it
                    equates to more conversion opportunities.
                  </p>
                  <p>
                    Some SEO-related tools such as the Google Keyword Planner
                    and Google Analytics provide quantitative data to help you
                    understand your market, analyze the trends, and know your
                    competitors’ standings. It helps you identify popular and
                    valuable keywords so you can decide how to structure or
                    revise your content.
                  </p>
                  <div className="image titlt" data-tilt="" data-tilt-max={1}>
                    <img src="/newupdate/images/resource/project-3.jpg" alt="" />
                  </div>
                  <h4>
                    <span>03.</span> Perfect Result
                  </h4>
                  <p>
                    Implementing SEO strategies help you to rank higher on the
                    search engine’s results page (SERP). This means that when
                    your target customers search for products and services that
                    your industry offers, they are likely to find your website.
                    When you repeatedly appear on the SERP, users become aware
                    of your site and your business. This increases the chances
                    of landing potential customers on your webpages.{" "}
                    <span>
                      SEO is less expensive than other online marketing
                      approaches.
                    </span>{" "}
                    It also offers higher reward rates when compared to other
                    techniques such as social media marketing, pay per click
                    advertising, and email marketing.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End Gallery Detail Section */}
          {/* Related Projects Section */}
          <section className="related-projects-section">
            <div className="auto-container">
              {/* Sec Title */}
              <div className="sec-title centered">
                <div className="title">Related PROJECTS</div>
                <h2>Our Latest Case Works</h2>
              </div>
              <div className="three-item-carousel owl-carousel owl-theme">
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/4.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/4.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Programming</div>
                      <h5>
                        <a href="projects-detail.html">Detection Project</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/5.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/5.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Data Science</div>
                      <h5>
                        <a href="projects-detail.html">Data Scientist</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/6.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/6.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Science Projects</div>
                      <h5>
                        <a href="projects-detail.html">Benefits Research</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/4.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/4.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Programming</div>
                      <h5>
                        <a href="projects-detail.html">Detection Project</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/5.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/5.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Data Science</div>
                      <h5>
                        <a href="projects-detail.html">Data Scientist</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/6.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/6.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Science Projects</div>
                      <h5>
                        <a href="projects-detail.html">Benefits Research</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/4.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/4.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Programming</div>
                      <h5>
                        <a href="projects-detail.html">Detection Project</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/5.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/5.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Data Science</div>
                      <h5>
                        <a href="projects-detail.html">Data Scientist</a>
                      </h5>
                    </div>
                  </div>
                </div>
                {/* Gallery Block */}
                <div className="gallery-block">
                  <div className="inner-box">
                    <figure className="image-box">
                      <img src="/newupdate/images/gallery/6.jpg" alt="" />
                      {/* Overlay Box */}
                      <div className="overlay-box">
                        <div className="overlay-inner">
                          <div className="content">
                            <a
                              href="images/gallery/6.jpg"
                              data-fancybox="gallery"
                              data-caption=""
                              className="icon flaticon-plus"
                            />
                          </div>
                        </div>
                      </div>
                    </figure>
                    <div className="lower-content">
                      <div className="title">Science Projects</div>
                      <h5>
                        <a href="projects-detail.html">Benefits Research</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Related Projects Section */}
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
          {/* Main Footer */}
          <footer className="main-footer">
            <div
              className="pattern-layer"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-3.png)",
              }}
            />
            <div
              className="pattern-layer-two"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-4.png)",
              }}
            />
            <div
              className="pattern-layer-three"
              style={{
                backgroundImage: "url(/newupdate/images/background/pattern-5.png)",
              }}
            />
            <div className="auto-container">
              {/*Widgets Section*/}
              <div className="widgets-section">
                <div className="row clearfix">
                  {/* Column */}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/* Footer Column */}
                      <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                        <div className="footer-widget logo-widget">
                          <div className="logo">

                            <a href="/">
                              <img src="/newupdate/images/logo.png" alt="" />

                            </a>
                          </div>
                          <div className="text">
                            Our approach to SEO is uniquely built around what we
                            know works…and what we know doesn’t work. With over
                            200 verified factors in play.
                          </div>
                          {/* Social Box */}
                          <ul className="social-box">
                            <li>
                              <a href="#" className="fa fa-facebook-f" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-linkedin" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-twitter" />
                            </li>
                            <li>
                              <a href="#" className="fa fa-google" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Footer Column */}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h4>Services</h4>
                          <ul className="list-link">
                            <li>
                              <a href="#">SEO for Small Business</a>
                            </li>
                            <li>
                              <a href="#">SEO for Local Services</a>
                            </li>
                            <li>
                              <a href="#">Enterprise SEO</a>
                            </li>
                            <li>
                              <a href="#">National SEO</a>
                            </li>
                            <li>
                              <a href="#">International SEO</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Column */}
                  <div className="big-column col-lg-6 col-md-12 col-sm-12">
                    <div className="row clearfix">
                      {/*Footer Column*/}
                      <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-widget gallery-widget">
                          <h4>instagram</h4>
                          <div className="widget-content">
                            <div className="images-outer clearfix">
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/1.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-1.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/2.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-2.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/3.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-3.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/4.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-4.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/1.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-5.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                              {/*Image Box*/}
                              <figure className="image-box">
                                <a
                                  href="images/gallery/2.jpg"
                                  className="lightbox-image"
                                  data-fancybox="footer-gallery"
                                  title="Image Title Here"
                                  data-fancybox-group="footer-gallery"
                                >
                                  <img
                                    src="/newupdate/images/gallery/footer-gallery-thumb-6.jpg"
                                    alt=""
                                  />
                                </a>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Footer Column */}
                      <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                        <div className="footer-widget links-widget">
                          <h4>Contact info</h4>
                          <ul className="list-style-two">
                            <li>
                              <span className="icon flaticon-wall-clock" />
                              Mon – Sat 10:00pm - 8:00pm
                            </li>
                            <li>
                              <span className="icon flaticon-phone-call" />
                              <a href="tel:+0987-654-321">0987 654 321</a>{" "}
                              <a href="tel:+0123-456-789">0123 456 789</a>
                            </li>
                            <li>
                              <span className="icon flaticon-email" />
                              <a href="mailto:upTurnIdea@gmail.com">
                                upTurnIdea@gmail.com
                              </a>
                            </li>
                            <li>
                              <span className="icon flaticon-maps-and-flags" />
                              16122 Collins Street West, Melbourne, VIC Srsars
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer Bottom */}
              <div className="footer-bottom">
                <div className="copyright">
                  Copyright © 2020 upTurnIdea by{" "}
                  <a href="https://themeforest.net/user/themerange">
                    ThemeRange
                  </a>
                  . All Rights Reserved. All Rights Reserved.
                </div>
              </div>
            </div>
          </footer>
          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </body>
      {/* body end  */}
    </div>
  );
};

export default ProjectsDetail;
