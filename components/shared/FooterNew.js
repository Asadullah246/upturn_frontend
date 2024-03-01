import React from 'react';

const FooterNew = () => {
    return (
        <footer className="main-footer">
        <div
          className="pattern-layer"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-3.png)",
          }}
        />
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-4.png)",
          }}
        />
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-5.png)",
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
                          <img style={{height:"50px"}}
                            src="/newupdate/images/newIcons/logo.png" 
                            alt=""
                          />
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
                          <a href="mailto:Merix@gmail.com">
                            Merix@gmail.com
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
              Copyright © 2020 Merix by{" "}
              <a href="https://themeforest.net/user/themerange">
                ThemeRange
              </a>
              . All Rights Reserved. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterNew;
