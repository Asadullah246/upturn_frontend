import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const ShoppingCart = () => {
  return (
    <div>
      <Head>
        {/* font  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        ></link>

        {/* font end */}

        {/* styles  */}
        <link rel="stylesheet" href="/newupdate/css/animate.css" />
        <link rel="stylesheet" href="/newupdate/css/animation.css" />
        <link rel="stylesheet" href="/newupdate/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/color-switcher-design.css"
        />
        <link rel="stylesheet" href="/newupdate/css/custom-animate.css" />
        <link rel="stylesheet" href="/newupdate/css/flaticon.css" />
        <link rel="stylesheet" href="/newupdate/css/font-awesome.css" />
        <link rel="stylesheet" href="/newupdate/css/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.bootstrap-touchspin.css"
        />
        <link rel="stylesheet" href="/newupdate/css/jquery.fancybox.min.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.mCustomScrollbar.min.css"
        />
        <link rel="stylesheet" href="/newupdate/css/owl.css" />
        <link rel="stylesheet" href="/newupdate/css/responsive.css" />
        <link rel="stylesheet" href="/newupdate/css/style.css" />

        {/* styles end  */}

        {/* js  */}
        <script src="/newupdate/js/appear.js"></script>
        <script src="/newupdate/js/bootstrap.min.js"></script>
        <script src="/newupdate/js/color-settings.js"></script>
        <script src="/newupdate/js/jquery-ui.js"></script>
        <script src="/newupdate/js/jquery.bootstrap-touchspin.js"></script>
        <script src="/newupdate/js/jquery.countdown.js"></script>
        <script src="/newupdate/js/jquery.fancybox.js"></script>
        <script src="/newupdate/js/jquery.js"></script>
        <script src="/newupdate/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/newupdate/js/jquery.paroller.min.js"></script>
        <script src="/newupdate/js/mixitup.js"></script>
        <script src="/newupdate/js/nav-tool.js"></script>
        <script src="/newupdate/js/owl.js"></script>
        <script src="/newupdate/js/parallax.min.js"></script>
        <script src="/newupdate/js/popper.min.js"></script>
        <script src="/newupdate/js/script.js"></script>
        <script src="/newupdate/js/tilt.jquery.min.js"></script>
        <script src="/newupdate/js/validate.js"></script>
        <script src="/newupdate/js/wow.js"></script>

        {/* js end */}
      </Head>

      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}
          <PageHeader pagename={"Shopping Cart"}/>
          {/* End Page Title Section */}
          {/*Cart Section*/}
          <section className="cart-section">
            <div className="auto-container">
              {/*Cart Outer*/}
              <div className="cart-outer">
                <div className="table-outer">
                  <table className="cart-table">
                    <thead className="cart-header">
                      <tr>
                        <th className="prod-column">PRODUCT</th>
                        <th>&nbsp;</th>
                        <th>Quantity</th>
                        <th>Avalability</th>
                        <th className="price">Price</th>
                        <th>Total</th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2} className="prod-column">
                          <div className="column-box">
                            <figure className="prod-thumb">
                              <a href="#">
                                <img
                                  src="/newupdate/images/resource/products/thumb-1.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <h3 className="prod-title">Product 01</h3>
                          </div>
                        </td>
                        <td className="qty">
                          <input
                            className="quantity-spinner"
                            type="text"
                            defaultValue={2}
                            name="quantity"
                          />
                        </td>
                        <td className="unit-price">
                          <div className="available-info">
                            <span className="icon fa fa-check" /> Item(s) <br />
                            Avilable Now
                          </div>
                        </td>
                        <td className="price">$34.99</td>
                        <td className="sub-total">$ 51.98</td>
                        <td className="remove">
                          <a href="#" className="remove-btn">
                            <span className="flaticon-cancel-1" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2} className="prod-column">
                          <div className="column-box">
                            <figure className="prod-thumb">
                              <a href="#">
                                <img
                                  src="/newupdate/images/resource/products/thumb-2.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                            <h3 className="prod-title">Product 02</h3>
                          </div>
                        </td>
                        <td className="qty">
                          <input
                            className="quantity-spinner"
                            type="text"
                            defaultValue={2}
                            name="quantity"
                          />
                        </td>
                        <td className="unit-price">
                          <div className="available-info">
                            <span className="icon fa fa-check" /> Item(s) <br />
                            Avilable Now
                          </div>
                        </td>
                        <td className="price">$29.99</td>
                        <td className="sub-total">$ 29.99</td>
                        <td className="remove">
                          <a href="#" className="remove-btn">
                            <span className="flaticon-cancel-1" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="coupon-outer clearfix">
                  <div className="pull-left">
                    <div className="apply-coupon clearfix">
                      <div className="form-group clearfix">
                        <input
                          type="text"
                          name="coupon-code"
                          defaultValue=""
                          placeholder="Enter Coupon Code..."
                        />
                      </div>
                      <div className="form-group clearfix">
                        <button
                          type="button"
                          className="theme-btn btn-style-two"
                        >
                          <span className="txt">Apply Coupon</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pull-right">
                    <button type="button" className="theme-btn cart-btn">
                      Update Cart
                    </button>
                  </div>
                </div>
                <div className="row clearfix">
                  <div className="column col-md-6 col-sm-12 col-xs-12">
                    <div className="shipping-form">
                      <div className="sec-title">
                        <h2>Calculate Shipping</h2>
                      </div>
                      <form
                        method="post"
                        action="https://///index.html"
                      >
                        <div className="row clearfix">
                          {/*Form Group*/}
                          <div className="form-group col-lg-12 col-md-12 col-sm-12">
                            <select
                              name="country"
                              className="custom-select-box"
                            >
                              <option>United Kingdom (UK)</option>
                              <option>Pakistan</option>
                              <option>USA</option>
                              <option>CANADA</option>
                              <option>INDIA</option>
                            </select>
                          </div>
                          {/*Form Group*/}
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <select
                              name="country"
                              className="custom-select-box"
                            >
                              <option>State / Country</option>
                              <option>Maharshtra</option>
                              <option>NY</option>
                              <option>ALabama</option>
                              <option>Mexico</option>
                            </select>
                          </div>
                          {/*Form Group*/}
                          <div className="form-group col-md-6 col-sm-6 col-xs-12">
                            <input
                              type="text"
                              name="code"
                              defaultValue=""
                              placeholder="Zip / Postal Code"
                            />
                          </div>
                          {/*Form Group*/}
                          <div className="form-group col-md-12 col-sm-12 col-xs-12">
                            <button
                              type="submit"
                              className="theme-btn btn-style-two"
                            >
                              <span className="txt">Update Totals</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="column col-md-6 col-sm-12 col-xs-12">
                    <div className="sec-title">
                      <h2>Cart Totals</h2>
                    </div>
                    {/*Totals Table*/}
                    <ul className="totals-table">
                      <li className="clearfix">
                        <span className="col col-title">Cart Subtotal</span>
                        <span className="col">$498.00</span>
                      </li>
                      <li className="clearfix">
                        <span className="col col-title">
                          Shipping and Handling
                        </span>
                        <span className="col">Free Shipping</span>
                      </li>
                      <li className="clearfix">
                        <span className="col col-title">Order Total</span>
                        <span className="col">$498.00</span>
                      </li>
                    </ul>
                    <div className="padd-top-30 text-right">
                      <button type="submit" className="theme-btn btn-style-two">
                        <span className="txt">Proceed to Checkout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Newsleter Section */}
          <section className="newsletter-section">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Form Column */}
                <div className="form-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="sec-title">
                      <div className="title">Newsletter</div>
                      <h2>Subscribe Our Newsletter</h2>
                    </div>
                    <div className="text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit
                      donec tempus pellentesque dui vel tristique purus justo{" "}
                    </div>
                    <div className="newsletter-form">
                      <form
                        method="post"
                        action="https://///contact.html"
                      >
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter Your Email"
                            required=""
                          />
                          <button
                            type="submit"
                            className="theme-btn btn-style-three"
                          >
                            <span className="txt">Subscribe Now</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image titlt" data-tilt="" data-tilt-max={3}>
                      <img src="/newupdate/images/resource/newsletter.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}
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
                            <a href="index.html">
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

export default ShoppingCart;
