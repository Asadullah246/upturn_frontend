import Head from "next/head";
import React, { useEffect, useState } from "react";
import TopScrolling from "../../components/shared/ScrollToTop";
import SearchPopUp from "../../components/shared/SearchPopUp";
import PageHeader from "../../components/shared/pageHeader";
import { getData } from "../../components/shared/Api";
import { getSorted } from "../../components/shared/SortingData";
import Management from "../../components/home/Management";
import TeamLeaders from "../../components/home/TeamLeaders";
import Management2 from "../../components/home/Management2";
import TeamLeaders2 from "../../components/home/TeamLeaders2.js"; 



const Team = () => {

  const [teammembers, setteammembers] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`team`);
      const sortedData = getSorted(res?.data)
      setteammembers(sortedData);
      return sortedData;
    };
    blogsData();
  }, []);

  const handlenewsLetter=(e)=>{
    e.preventDefault()
  }

  return (
    <div>
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}
          <PageHeader pagename="Team" />
          {/* Team Page Section */}
          <section className="team-page-section">
            <div className="auto-container">
              <div className="row clearfix">

              <Management2/>
              <TeamLeaders2 />


              </div>
            </div>
          </section>
          {/* End Team Page Section */}
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
                    Our services are uniquely around what we know works…and what we know
                    doesn’t work. With over 200 verified factors in play.
                    </div>
                    <div className="newsletter-form">
                      <form onSubmit={handlenewsLetter}>
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            defaultValue=""
                            placeholder="Enter Your Email"
                            required
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
                      <img
                        src="/newupdate/images/resource/newsletter.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Newsleter Section */}
          {/* Main Footer */}

          {/* End Main Footer */}
        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default Team;
