import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import SearchPopUp from "../../../components/shared/SearchPopUp";
import TopScrolling from "../../../components/shared/ScrollToTop";
import PageHeader from "../../../components/shared/pageHeader";

import { useRouter } from "next/router";
import { getData, updateData } from "../../../components/shared/Api";
import FormatDate from "../../../components/shared/FormatDate";
import Rating from "@mui/material/Rating";
import { ToastError, ToastSuccess } from "../../../components/shared/ToastAlerts";

const NewsDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setblog] = useState();
  const [blogs, setblogs] = useState([]);
  const [value, setValue] = useState(0);
  const [refresh, setRefresh]=useState(false)


  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`blogs`);
      setblogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);

  useEffect(() => {

    if (slug) {
      const blogsData = async () => {
        const res = await getData(`blogs/${slug}`);
        setblog(res?.data);
        return res?.data;
      };

      blogsData();
    }
  }, [slug, refresh]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleRatingForm = async(e) => {
    e.preventDefault();
    const fullName=e.target.firstName.value + " " +  e.target.lastName.value
    const newComment={
      name:fullName,
      email:e.target.email.value,
      rating:value,
      comment:e.target.comment?.value,
      status:false
    }

    const updatedData = {
      ...blog,
      comments: [...blog?.comments, newComment]
    };

    const res = await updateData(updatedData, `blogs/${blog?._id}`);
    console.log("res", res);
    if (res?.status === "success") {
      setRefresh(!refresh);
      ToastSuccess("Thank you for your comments");
    } else {
      ToastError(res?.message || "Something error");
    }
  }


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
                            {FormatDate(blog?.createdAt)}
                          </li>
                        </ul>
                        {blog?.description?.map((desc, index) => {
                          return (
                            <Fragment key={index}>
                              <h2>{desc?.title}</h2>
                              {desc?.details?.split("\\n")?.map((para, i) => {
                                return <p key={i}>{para}</p>;
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
                        {/* <div className="post-share-options">
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
                        </div> */}
                      </div>
                    </div>
                    {/* Author Box */}
                    <div className="authors-box mt-5">
                      <div className="author-inner">
                        <div className="thumb">
                          <img src={blog?.author?.image} alt="" />
                        </div>
                        <div className="author">
                          {blog?.author?.designation}
                        </div>
                        <h4 className="name">{blog?.author?.name}</h4>
                        <div className="text">{blog?.author?.description}</div>
                        <ul className="social-icon clearfix">
                          <li>
                            <a href={blog?.author?.facebook || "#"}>
                              <i className="fa fa-facebook-f" />
                            </a>
                          </li>
                          {/* <li>
                            <a href={blog?.author?.facebook}>
                              <i className="fa fa-google-plus" />
                            </a>
                          </li> */}
                          <li>
                            <a href={blog?.author?.twitter || "#"}>
                              <i className="fa fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href={blog?.author?.linkedIn || "#"}>
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
                      {blog?.comments?.map((rating, index) => {
                        return (
                          <div key={index} className="comment-box">
                            <div className="comment">
                              <div className="author-thumb">
                                <img height={40} width={40} style={{borderRadius:"50%"}}  src={`https://ui-avatars.com/api/?name=${rating?.name}&background=C140D8&color=fff`} alt="" />
                                {/* <img src={rating?.image} alt="" /> */}

                              </div>
                              <div className="comment-inner">
                                <div className="comment-info clearfix">
                                  {rating?.name} –{" "}
                                  {FormatDate(rating?.createdAt)}
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
                                <div className="text">{rating?.comment}</div>
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
                        {/* <div className="rating">
                          <a href="#">
                            <span className="fa fa-star" />
                          </a>
                        </div> */}
                        {/* <div className="rating">
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
                        </div> */}
                        {/* <div className="rating">
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
                        </div> */}

                        <div className="rating">
                          <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                          />
                        </div>
                      </div>
                      <form onSubmit={handleRatingForm}>
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                            <label>First Name*</label>
                            <input
                              type="text"
                              name="firstName"
                              placeholder=""
                              required
                            />
                          </div>
                          <div className="col-md-6 col-sm-6 col-xs-12 form-group">
                            <label>Last Name*</label>
                            <input
                              type="text"
                              name="lastName"
                              placeholder=""
                              required={false}
                            />
                          </div>
                          <div className="col-md-12 col-sm-12 col-xs-12 form-group">
                            <label>Email*</label>
                            <input
                              type="email"
                              name="email"
                              placeholder=""
                              required
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 form-group">
                            <label>Your Comments*</label>
                            <textarea
                              name="comment"
                              placeholder=""
                              defaultValue={""}
                              required
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
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            defaultValue=""
                            placeholder="Search Here"
                            required
                          />
                          <button type="submit">
                            <span className="icon fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* Categories Widget */}
                    {/* <div className="sidebar-widget categories-widget">
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
                    </div> */}
                    {/* Categories Widget */}
                    <div className="sidebar-widget popular-posts">
                      <div className="sidebar-title">
                        <h4>Recent Post</h4>
                      </div>
                      <div className="widget-content">
                        {blogs
                          ?.reverse()
                          ?.slice(0, 5)
                          ?.map((blog2) => {
                            return (
                              <article key={blog2?._id} className="post">
                                <figure className="post-thumb">
                                  <img src={blog2?.image} alt="" />
                                  <a
                                    href={`/blog/${blog2?._id}`}
                                    className="overlay-box"
                                  >
                                    <span className="icon fa fa-link" />
                                  </a>
                                </figure>
                                <div className="text">
                                  <a href={`/blog/${blog2?._id}`}>
                                    {blog2?.title}
                                  </a>
                                </div>
                                <div className="post-info">
                                  {FormatDate(blog?.createdAt)}
                                </div>
                              </article>
                            );
                          })}
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
                            src={blog?.author?.image}
                            // src="/newupdate/images/resource/author-7.jpg"
                            alt=""
                          />
                        </div>
                        <div className="name">{blog?.author?.name}</div>
                        <div className="text">
                          I got lucky because I never gave up the search. Are
                          you quitting too soon? Or, are you willing to pursue
                          luck with a vengeance?
                        </div>
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a
                              href={blog?.author?.facebook || "#"}
                              className="fa fa-facebook-f"
                            />
                          </li>
                          <li>
                            <a
                              href={blog?.author?.linkedIn || "#"}
                              className="fa fa-linkedin"
                            />
                          </li>
                          <li>
                            <a
                              href={blog?.author?.twitter || "#"}
                              className="fa fa-twitter"
                            />
                          </li>
                          {/* <li>
                            <a href={blog?.author?.facebook || "#"} className="fa fa-google" />
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    {/* Instagram Widget */}
                    {/* <div className="sidebar-widget instagram-widget">
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
                    </div> */}
                    {/* Popular Posts */}
                    {/* <div className="sidebar-widget popular-tags">
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
                    </div> */}
                  </aside>
                </div>
              </div>
            </div>
          </div>
          {/* Clients Section */}
          {/* <section className="clients-section style-two">
            <div className="auto-container">
              <div className="sponsors-outer">

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
          </section> */}
          {/* End Clients Section */}
          {/* Main Footer */}

          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </div>
      {/* body end  */}
    </div>
  );
};

export default NewsDetail;
