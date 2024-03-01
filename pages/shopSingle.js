import React from "react";
import PageHeader from "../components/shared/pageHeader";
import SearchPopUp from "../components/shared/SearchPopUp";
import TopScrolling from "../components/shared/ScrollToTop";

const shopSingle = () => {
  return (
    <div>
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}
        <PageHeader pagename={"Item Details"}/>
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  <div className="shop-single">
                    <div className="product-details">
                      {/*Basic Details*/}
                      <div className="basic-details">
                        <div className="row clearfix">
                          <div className="image-column col-md-6 col-sm-6 col-xs-12">
                            <figure className="image-box">
                              <a
                                href="images/resource/products/10.jpg"
                                className="lightbox-image"
                                title="Image Caption Here"
                              >
                                <img
                                  src="/newupdate/images/resource/products/10.jpg"
                                  alt=""
                                />
                              </a>
                            </figure>
                          </div>
                          <div className="info-column col-md-6 col-sm-6 col-xs-12">
                            <div className="details-header">
                              <h4>Product 01</h4>
                              <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star-half-empty" />
                              </div>
                              <div className="item-price">$29.00</div>
                            </div>
                            <div className="text">
                              <p>
                                Working from home meant we couldsnack and coffee
                                our breaks change our desks or view, good, drink
                                on the job, even spend the weather started
                                getting roughday in pajamas consequences.
                              </p>
                            </div>
                            <div className="location">
                              Check Delivery Option at Your Location:
                            </div>
                            {/* Pincode Form */}
                            <div className="pincode-form">
                              <form
                                method="post"
                                action="#"
                              >
                                <div className="form-group"> 
                                  <input
                                    type="text"
                                    name="text"
                                    defaultValue=""
                                    placeholder="Pincode"
                                    required=""
                                  />
                                  <button type="submit">Check</button>
                                </div>
                              </form>
                            </div>
                            <div className="expired">
                              Expected Delivery in 4-10 Days
                            </div>
                            <div className="other-options clearfix">
                              <div className="item-quantity">
                                <input
                                  className="quantity-spinner"
                                  type="text"
                                  defaultValue={2}
                                  name="quantity"
                                />
                              </div>
                              <button
                                type="button"
                                className="theme-btn btn-style-two add-to-cart"
                              >
                                <span className="txt">Add To Cart</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*Basic Details*/}
                      {/*Product Info Tabs*/}
                      <div className="product-info-tabs">
                        {/*Product Tabs*/}
                        <div className="prod-tabs tabs-box">
                          {/*Tab Btns*/}
                          <ul className="tab-btns tab-buttons clearfix">
                            <li
                              data-tab="#prod-details"
                              className="tab-btn active-btn"
                            >
                              Description
                            </li>
                            <li data-tab="#prod-reviews" className="tab-btn">
                              Reviews (2)
                            </li>
                          </ul>
                          {/*Tabs Container*/}
                          <div className="tabs-content">
                            {/*Tab / Active Tab*/}
                            <div className="tab active-tab" id="prod-details">
                              <div className="content">
                                <p>
                                  Leverage agile frameworks to provide a robust
                                  synopsis for high level overviews. Iterative
                                  approaches to corporate strategy foster
                                  collaborative thinking to further the overall
                                  value proposition. Organically grow the
                                  holistic world view of disruptive innovation
                                  via workplace diversity and empowerment.Bring
                                  to the table win-win survival strategies to
                                  ensure proactive domination. runway heading
                                  towards a streamlined cloud solution.
                                </p>
                                <p>
                                  Collaboratively administrate empowered markets
                                  via plug-and-play networks. Dynamically
                                  procrastinate B2C users after installed base
                                  benefits. Dramatically visualize customer
                                  directed convergence.{" "}
                                </p>
                              </div>
                            </div>
                            {/*Tab*/}
                            <div className="tab" id="prod-reviews">
                              <h2 className="title">
                                2 Reviews For win Your Friends
                              </h2>
                              {/*Reviews Container*/}
                              <div className="comments-area">
                                {/*Comment Box*/}
                                <div className="comment-box">
                                  <div className="comment">
                                    <div className="author-thumb">
                                      <img
                                        src="/newupdate/images/resource/author-1.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-inner">
                                      <div className="comment-info clearfix">
                                        Steven Rich – Sep 17, 2020
                                      </div>
                                      <div className="rating">
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star light" />
                                      </div>
                                      <div className="text">
                                        How all this mistaken idea of denouncing
                                        pleasure and praising pain was born and
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/*Comment Box*/}
                                <div className="comment-box reply-comment">
                                  <div className="comment">
                                    <div className="author-thumb">
                                      <img
                                        src="/newupdate/images/resource/author-2.png"
                                        alt=""
                                      />
                                    </div>
                                    <div className="comment-inner">
                                      <div className="comment-info clearfix">
                                        William Cobus – Aug 21, 2020
                                      </div>
                                      <div className="rating">
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star" />
                                        <span className="fa fa-star-half-empty" />
                                      </div>
                                      <div className="text">
                                        There anyone who loves or pursues or
                                        desires to obtain pain itself, because
                                        it is pain sed, because occasionally
                                        circumstances occur some great pleasure.
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/* Comment Form */}
                              <div className="shop-comment-form">
                                <h2>Add Your Comments</h2>
                                <div className="rating-box">
                                  <div className="text"> Your Rating:</div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                  <div className="rating">
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                    <a href="#">
                                      <span className="fa fa-star" />
                                    </a>
                                  </div>
                                </div>
                                <form
                                  method="post"
                                  action="https://///contact.html"
                                >
                                  <div className="row clearfix">
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                      <label>First Name *</label>
                                      <input
                                        type="text"
                                        name="username"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                                      <label>Last Name*</label>
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                                      <label>Email*</label>
                                      <input
                                        type="text"
                                        name="number"
                                        placeholder=""
                                        required=""
                                      />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                      <label>Your Comments*</label>
                                      <textarea
                                        name="message"
                                        placeholder=""
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                                      <button
                                        className="theme-btn btn-style-two"
                                        type="submit"
                                        name="submit-form"
                                      >
                                        <span className="txt">Submit now</span>
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/*End Product Info Tabs*/}
                      {/*Related Products*/}
                      <div className="related-products">
                        <h2>Related Products</h2>
                        <div className="row clearfix">
                          {/*Shop Item*/}
                          <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box">
                              <div className="image">
                                <img
                                  src="/newupdate/images/resource/products/4.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shopSingle">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shopSingle">
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
                                      <a href="shopSingle">Product 01</a>
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
                                <img
                                  src="/newupdate/images/resource/products/5.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shopSingle">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shopSingle">
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
                                      <a href="shopSingle">Product 02</a>
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
                                <div className="price">$29.00</div>
                              </div>
                            </div>
                          </div>
                          {/*Shop Item*/}
                          <div className="shop-item col-lg-4 col-md-6 col-sm-6 col-xs-12">
                            <div className="inner-box">
                              <div className="image">
                                <img
                                  src="/newupdate/images/resource/products/6.jpg"
                                  alt=""
                                />
                                <div className="overlay-box">
                                  <ul className="cart-option">
                                    <li>
                                      <a href="shopSingle">
                                        <span className="flaticon-shopping-cart-1" />
                                      </a>
                                      <span className="tooltip-data">
                                        Add to Cart
                                      </span>
                                    </li>
                                    <li>
                                      <a href="shopSingle">
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
                                      <a href="shopSingle">Product 03</a>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar Side */}
                <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                  <aside className="sidebar sticky-top">
                    {/* Search */}
                    <div className="sidebar-widget search-box">
                      <form method="post" action="https://///contact.html">
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
                      <form method="post" action="https://///contact.html">
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

        </div>


        <SearchPopUp />
        <TopScrolling />

      </body>
    </div>
  );
};

export default shopSingle;
