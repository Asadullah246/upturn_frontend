import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Checkout = () => {
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
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}
         <PageHeader pagename={"Checkout"}/>
          {/*CheckOut Page*/}
          <div className="checkout-page">
            <div className="auto-container">
              {/*Default Links*/}
              <ul className="default-links">
                <li>
                  Exisitng Customer? <a href="#">Click here to login</a>
                </li>
                <li>
                  Have a coupon? <a href="#">Click here to enter your code</a>
                </li>
              </ul>
              {/*Checkout Details*/}
              <div className="checkout-form">
                <form
                  method="post"
                  action="https://///checkout.html"
                >
                  <div className="row clearfix">
                    {/*Column*/}
                    <div className="column col-md-6 col-sm-12 col-xs-12">
                      <div className="checkout-title">
                        <h2>Billing Address</h2>
                      </div>
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Country <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            First Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            Last Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Address <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Town / City <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Contact Info <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder="Email Address"
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder="Phone Number"
                          />
                        </div>
                        <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="check-box">
                            <input
                              type="checkbox"
                              name="shipping-option"
                              id="account-option"
                            />{" "}
                             {" "}
                            <label htmlFor="account-option">
                              Create an account?
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Column*/}
                    <div className="column col-md-6 col-sm-12 col-xs-12">
                      <div className="checkout-title">
                        <h2>Shiping to a Different Address</h2>
                      </div>
                      <div className="row clearfix">
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Country <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            First Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-6 col-sm-6 col-xs-12">
                          <div className="field-label">
                            Last Name <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Address <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">
                            Town / City <sup>*</sup>
                          </div>
                          <input
                            type="text"
                            name="field-name"
                            defaultValue=""
                            placeholder=""
                          />
                        </div>
                        {/*Form Group*/}
                        <div className="form-group col-md-12 col-sm-12 col-xs-12">
                          <div className="field-label">Other Notes</div>
                          <textarea
                            className=""
                            placeholder="Special notes about your order..."
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/*End Checkout Details*/}
              {/*Lower Content*/}
              <div className="lower-content">
                <div className="row clearfix">
                  {/*Order Column*/}
                  <div className="order-column column col-md-6 col-sm-12 col-xs-12">
                    {/*Sec Title*/}
                    <div className="checkout-title">
                      <h2>Order Summary</h2>
                    </div>
                    <div className="cart-outer">
                      <table className="cart-table">
                        <thead className="cart-header">
                          <tr>
                            <th className="prod-column">Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="prod-column">
                              <div className="column-box">
                                <figure className="prod-thumb">
                                  <img
                                    src="images/resource/products/prod-thumb-1.jpg"
                                    alt=""
                                  />
                                </figure>
                                <h4 className="prod-title">Product 01</h4>
                              </div>
                            </td>
                            <td className="qty">
                              <input type="text" />
                            </td>
                            <td className="sub-total">$34.99</td>
                          </tr>
                          <tr>
                            <td className="prod-column">
                              <div className="column-box">
                                <figure className="prod-thumb">
                                  <img
                                    src="images/resource/products/prod-thumb-2.jpg"
                                    alt=""
                                  />
                                </figure>
                                <h4 className="prod-title">Product 02</h4>
                              </div>
                            </td>
                            <td className="qty">
                              <input type="text" />
                            </td>
                            <td className="sub-total">$29.99</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/*Cart Column*/}
                  <div className="column col-md-6 col-sm-12 col-xs-12">
                    {/*Sec Title*/}
                    <div className="checkout-title">
                      <h2>Cart Totals</h2>
                    </div>
                    {/*Totals Table*/}
                    <ul className="totals-table">
                      <li className="clearfix">
                        <span className="col title">Cart Subtotal</span>
                        <span className="col">$146.00</span>
                      </li>
                      <li className="clearfix">
                        <span className="col title">Shipping and Handling</span>
                        <span className="col total">Free Shipping</span>
                      </li>
                      <li className="clearfix">
                        <span className="col title">Order Total</span>
                        <span className="col total">$146.00</span>
                      </li>
                    </ul>
                    {/*Payment Options*/}
                    <div className="payment-options">
                      <ul>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-1"
                              defaultChecked=""
                            />
                            <label htmlFor="payment-1">
                              <strong>Direct Bank Transfer</strong>
                              <span className="small-text">
                                Please send a check to Store Name, Store Street,
                                Store Town, Store State / County, Store
                                Postcode.
                              </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="radio-option">
                            <input
                              type="radio"
                              name="payment-group"
                              id="payment-3"
                            />
                            <label htmlFor="payment-3">
                              <strong>
                                Paypal <a href="#">What is Paypal</a>
                              </strong>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <button type="button" className="theme-btn btn-style-two">
                        <span className="txt">Place Order</span>
                      </button>
                    </div>
                    {/*End Place Order*/}
                  </div>
                </div>
              </div>
              {/*End Lower Content*/}
            </div>
          </div>
          {/*End CheckOut Page*/}
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
                      <img src="images/resource/newsletter.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}

        </div>
        {/*End pagewrapper*/}

        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>

      {/* body end  */}
    </div>
  );
};

export default Checkout;
