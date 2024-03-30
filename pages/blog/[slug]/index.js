import Head from "next/head";
import React, { Fragment } from "react";
import SearchPopUp from "../../../components/shared/SearchPopUp";
import TopScrolling from "../../../components/shared/ScrollToTop";
import PageHeader from "../../../components/shared/pageHeader";

const NewsDetail = () => {
  const blog = {
    image: "/newupdate/images/resource/news-7.jpg",
    author: {
      name: "Pablo Villalpando",
      designation: "author",
      image: "/newupdate/images/resource/author-8.jpg",
      links: {
        facebook: "facebook.com",
        twitter: "twitter.com",
        linkedIn: "linkedIn.com",
      },
      description:
        "He is attended the State University of New York at Oswego where he majored in English Literature and Creative Writing.",
    },
    date: "10/02/2020",
    description: [
      {
        title: " Absolute Links vs. Relative Links – SEO Intrinsic Value",
        details:
          " It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \nIt has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
      {
        title: " Absolute Links vs. Relative Links – SEO Intrinsic Value",
        details:
          " It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \n It has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. \nIt has survived not only five centuries, but also the leap into electronic typesetting. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      },
    ],
    reviews: [
      {
        name: "William cobus",
        date: "10-9-2022",
        image: "/newupdate/images/resource/author-1.png",
        rating: 5,
        status: true,
        comment:
          "There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.",
      },
      {
        name: "William cobus",
        date: "10-9-2022",
        image: "/newupdate/images/resource/author-2.png",
        rating: 3,
        status: true,
        comment:
          "There anyone who loves or pursues or desires to obtain pain itself, because it is pain sed, because occasionally circumstances occur some great pleasure.",
      },
    ],
  };
  return (
    <div>
      {/* body  */}
      <div className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}
          <PageHeader pagename="Blog Details" />
          {/* Sidebar Page Container */}
          <div className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                {/* Content Side */}
                <div className="content-side col-lg-8 col-md-12 col-sm-12">
                  {/* News Detail */}
                  <div className="news-detail">
                    <div className="inner-box">
                      <div className="image">
                        <img src={blog?.image} alt="" />
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <span className="icon fa fa-user" />{" "}
                            {blog?.author?.name}
                          </li>
                          <li>
                            <span className="icon fa fa-calendar" />{" "}
                            {blog?.date}
                          </li>
                        </ul>
                        {blog?.description?.map((desc, index) => {
                          return (
                            <Fragment key={index}>
                              <h2>{desc?.title}</h2>
                              {desc?.details?.split("\n")?.map((para, i) => {
                                return (
                                  <Fragment key={i}>
                                    <p>{para}</p>
                                  </Fragment>
                                );
                              })}
                            </Fragment>
                          );
                        })}

                        {/* <blockquote>
                          “I cannot give you the formula for success, but I can
                          give you the formula for failure. It is: Try to please
                          everybody.”
                          <span className="author-name">Bayard Herbert</span>
                        </blockquote>
                        <div className="row clearfix">
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img
                                src="/newupdate/images/resource/news-12.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="column col-lg-6 col-md-6 col-sm-12">
                            <div className="image">
                              <img
                                src="/newupdate/images/resource/news-13.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div> */}

                        {/* Post Share Options*/}
                        <div className="post-share-options">
                          <div className="post-share-inner clearfix">
                            <div className="pull-left">
                              <div className="post-title">Tags:</div>
                              <ul className="tags">
                                <li>
                                  <a href="#">App,</a>
                                </li>
                                <li>
                                  <a href="#">Agencyco,</a>
                                </li>
                                <li>
                                  <a href="#">History,</a>
                                </li>
                                <li>
                                  <a href="#">Blue,</a>
                                </li>
                                <li>
                                  <a href="#">Gold</a>
                                </li>
                              </ul>
                            </div>
                            <ul className="social-box pull-right">
                              <li className="facebook">
                                <a href="#">
                                  <span className="fa fa-facebook-f" />
                                </a>
                              </li>
                              <li className="twitter">
                                <a href="#">
                                  <span className="fa fa-twitter" />
                                </a>
                              </li>
                              <li className="linkedin">
                                <a href="#">
                                  <span className="fa fa-google-plus" />
                                </a>
                              </li>
                              <li className="pinterest">
                                <a href="#">
                                  <span className="fa fa-pinterest-p" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Author Box */}
                    <div className="authors-box">
                      <div className="author-inner">
                        <div className="thumb">
                          <img
                            src="/newupdate/images/resource/author-8.jpg"
                            alt=""
                          />
                        </div>
                        <div className="author">
                          {blog?.author?.designation}
                        </div>
                        <h4 className="name">{blog?.author?.name}</h4>
                        <div className="text">{blog?.author?.description}</div>
                        <ul className="social-icon clearfix">
                          <li>
                            <a href={blog?.author?.facebook}>
                              <i className="fa fa-facebook-f" />
                            </a>
                          </li>
                          {/* <li>
                            <a href={blog?.author?.facebook}>
                              <i className="fa fa-google-plus" />
                            </a>
                          </li> */}
                          <li>
                            <a href={blog?.author?.twitter}>
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href={blog?.author?.linkedIn}>
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Comments Area*/}
                    <div className="comments-area">
                      <div className="group-title">
                        <h4>Read Comments</h4>
                      </div>
                      {/*Comment Box*/}
                      {blog?.ratings?.map((rating, index) => {
                        return (
                          <div key={index} className="comment-box">
                            <div className="comment">
                              <div className="author-thumb">
                                <img src={rating?.image} alt="" />
                              </div>
                              <div className="comment-inner">
                                <div className="comment-info clearfix">
                                  {rating?.name} – {rating?.date}
                                </div>
                                <div className="rating">
                                  {[...Array(rating?.rating)]?.map(
                                    (singleRating, i) => {
                                      return (
                                        <span key={i} className="fa fa-star" />
                                      );
                                    }
                                  )}

                                  {/* <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star" />
                                  <span className="fa fa-star light" /> */}
                                </div>
                                <div className="text">
                                  {rating?.comment}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      {/*Comment Box*/}

                    </div>
                    {/* Comment Form */}
                    <div className="comment-form">
                      <div className="group-title">
                        <h4>Add Your Reviews</h4>
                      </div>
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
                      <form method="post" action="https://///contact.html">
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                            <label>Your Name*</label>
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
                              type="text"
                              name="username"
                              placeholder=""
                              required=""
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                            <label>Email*</label>
                            <input
                              type="email"
                              name="email"
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
                              <span className="txt">Submit Now</span>
                            </button>
                          </div>
                        </div>
                      </form>
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
                    {/* Author Widget */}
                    <div className="sidebar-widget author-widget">
                      <div
                        className="widget-content"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/author-bg.jpg)",
                        }}
                      >
                        <div className="image">
                          <img
                            src="/newupdate/images/resource/author-7.jpg"
                            alt=""
                          />
                        </div>
                        <div className="name">Pablo Villalpando</div>
                        <div className="text">
                          I got lucky because I never gave up the search. Are
                          you quitting too soon? Or, are you willing to pursue
                          luck with a vengeance?
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
                    {/* Instagram Widget */}
                    <div className="sidebar-widget instagram-widget">
                      <div className="sidebar-title">
                        <h4>Instagram</h4>
                      </div>
                      <div className="widget-content">
                        <div className="clearfix">
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-1.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-2.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-3.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-4.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-5.jpg"
                              alt=""
                            />
                            <a href="news-detail.html" className="overlay-box">
                              <span className="icon fa fa-link" />
                            </a>
                          </figure>
                          <figure className="post-thumb">
                            <img
                              src="/newupdate/images/resource/instagram-6.jpg"
                              alt=""
                            />
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

          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        <SearchPopUp />
        <TopScrolling />
      </div>
      {/* body end  */}
    </div>
  );
};

export default NewsDetail;
