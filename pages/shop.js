import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Shop = () => {
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


          <PageHeader pagename={"Shop"}/>
          {/* End Page Title Section */}
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  <div className="shop-section">
                    {/* Sort By */}
                    <div className="items-sorting">
                      <div className="row clearfix">
                        <div className="results-column col-lg-8 col-md-8 col-sm-12">
                          <h4>Showing 1-9 of 12 results</h4>
                        </div>
                        <div className="select-column pull-right col-lg-4 col-md-4 col-sm-12">
                          <div className="form-group">
                            <select name="sort-by">
                              <option>Default Sorting</option>
                              <option>By Order</option>
                              <option>By Price</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix">
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/1.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 01</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/2.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 02</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/3.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 03</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/4.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 04</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/5.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 05</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/6.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 06</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/6.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 07</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/7.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 08</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/8.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 09</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/1.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 10</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/2.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 11</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/3.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 12</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/4.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 13</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/5.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 14</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.00</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/6.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 15</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/6.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 16</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-o" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$24.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/7.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 17</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star-half-empty" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$34.99</div>
                          </div>
                        </div>
                      </div>
                      {/*Shop Item*/}
                      <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-box">
                          <div className="image">
                            <img src="/newupdate/images/resource/products/8.jpg" alt="" />
                            <div className="overlay-box">
                              <ul className="cart-option">
                                <li>
                                  <a href="shop-single.html">
                                    <span className="flaticon-shopping-cart-1" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Cart
                                  </span>
                                </li>
                                <li>
                                  <a href="shop-single.html">
                                    <span className="fa fa-heart-o" />
                                  </a>
                                  <span className="tooltip-data">
                                    Add to Whishlist
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="lower-content">
                            <div className="clearfix">
                              <div className="pull-left">
                                <h3>
                                  <a href="shop-single.html">Product 18</a>
                                </h3>
                              </div>
                              <div className="pull-right">
                                {/*Rating*/}
                                <div className="rating">
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                </div>
                              </div>
                            </div>
                            <div className="price">$29.00</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Post Share Options */}
                    <div className="styled-pagination text-center">
                      <ul className="clearfix">
                        <li className="prev">
                          <a href="#">
                            <span className="fa fa-angle-left" />{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#">01</a>
                        </li>
                        <li className="active">
                          <a href="#">02</a>
                        </li>
                        <li>
                          <a href="#">03</a>
                        </li>
                        <li className="next">
                          <a href="#">
                            <span className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Sidebar Side */}
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Search */}
                    <div className="sidebar-widget search-box">
                      <form
                        method="post"
                        action="https://///contact.html"
                      >
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            defaultValue=""
                            placeholder="Search Here"
                            required=""
                          />
                          <button type="submit">
                            <span className="icon fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* Categories Widget */}
                    <div className="sidebar-widget categories-widget">
                      <div className="sidebar-title">
                        <h4>Categories</h4>
                      </div>
                      <div className="widget-content">
                        <ul className="blog-cat">
                          <li>
                            <a href="#">
                              Content Marketing <span>( 01 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Social Marketing <span>( 25 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              App Development <span>( 66 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              SEO Optimization <span>( 12 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Web Development <span>( 11 )</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              PPC Advertising <span>( 02 )</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Categories Widget */}
                    <div className="sidebar-widget popular-posts">
                      <div className="sidebar-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="widget-content">
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-1.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              Google now disregards overlooks all links.
                            </a>
                          </div>
                          <div className="post-info">November 21, 2020</div>
                        </article>
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-2.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              How to increase your ROI through scientific SEM?
                            </a>
                          </div>
                          <div className="post-info">November 28, 2020</div>
                        </article>
                        <article className="post">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/post-thumb-3.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <div className="text">
                            <a href="news-detail.html">
                              A Guide to Google SEO <br /> Algorithm Updates
                            </a>
                          </div>
                          <div className="post-info">December 04, 2020</div>
                        </article>
                      </div>
                    </div>
                    {/* Instagram Widget */}
                    <div className="sidebar-widget instagram-widget">
                      <div className="sidebar-title">
                        <h4>Instagram</h4>
                      </div>
                      <div className="widget-content">
                        <div className="clearfix">
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-1.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-2.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-3.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-4.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-5.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img src="/newupdate/images/resource/instagram-6.jpg" alt="" />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                        </div>
                      </div>
                    </div>
                    {/* Popular Posts */}
                    <div className="sidebar-widget popular-tags">
                      <div className="sidebar-title">
                        <h4>Tags</h4>
                      </div>
                      <div className="widget-content">
                        <a href="#">Business</a>
                        <a href="#">Marketing</a>
                        <a href="#">SEO</a>
                        <a href="#">SEO</a>
                        <a href="#">SMM</a>
                        <a href="#">Solution</a>
                        <a href="#">Tips</a>
                        <a href="#">Startup</a>
                        <a href="#">Strategy</a>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
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

export default Shop;
 