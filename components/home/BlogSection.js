import React, { useEffect, useState } from 'react';
import FormatDate from '../shared/FormatDate';
import { getData } from '../shared/Api';

const BlogSection = () => {
    const [blogs, setblogs] = useState([]);

    useEffect(() => {
      const blogsData = async () => {
        const res = await getData(`blogs`);
        setblogs(res?.data);
        return res?.data;
      };
      blogsData();
    }, []);

    return (
        <section className="news-section">
        <div
          className="pattern-layer"
          style={{
            backgroundImage: "url(/newupdate/images/resource/cta-bg.png)",
          }}
        />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title">
            <div className="clearfix">
              <div className="pull-left">
                <div className="title">OUR BLOG</div>
                <h2>Our Latest Media</h2>
                <div className="text">
                  Our campaigns get your business in front of the right
                  people at the <br /> right time to increase organic
                  traffic and boost engagement.
                </div>
              </div>
              <div className="pull-right">
                <a href="/blog" className="theme-btn btn-style-eleven">
                  <span className="txt">All News</span>
                </a>
              </div>
            </div>
          </div>
          <div className="row clearfix"> 
            {blogs?.slice(0,3)?.map(b=>{
                return(
                    <div className="news-block style-two col-lg-4 col-md-6 col-sm-12">
                    <div
                      className="inner-box wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image">
                        <img src={b?.image} alt="" />
                        {/* Overlay Box */}
                        <div className="overlay-box">
                          <div className="overlay-inner">
                            <div className="content">
                              <a

                                href={`/blog/${b?._id}`}
                                className="icon flaticon-unlink"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lower-content">
                        <ul className="post-meta">
                          <li>
                            <a href={`/blog/${b?._id}`}>
                              <span className="icon fa fa-user" /> {b?.author?.name}
                            </a>
                          </li>
                          <li>
                            <a href={`/blog/${b?._id}`}>
                              <span className="icon fa fa-calendar" /> {FormatDate(b?.createdAt)}
                            </a>
                          </li>
                        </ul>
                        <h5>
                          <a href={`/blog/${b?._id}`}>
                           {b?.title}
                          </a>
                        </h5>
                      </div>
                    </div>
                  </div>
                )
            })}

          </div>
        </div>
      </section>
    );
};

export default BlogSection;
