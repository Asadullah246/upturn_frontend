import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";
import { getSorted } from "../shared/SortingData";


const TeamLeaders = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("team");
      const sortedData = getSorted(res?.data)
      setBlogs(sortedData);
      return sortedData;
    };
    blogsData();
  }, []);
  return (
    <section className="team-section-two">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Our Team</div>
          <h2>Our Expert Team Members</h2>
        </div>
        <div className="row justify-content-center clearfix">
          {/* Team Block Two */}
          {blogs?.map((p, index) => {
            if (p?.showInHomePage == true && p?.role == "teamMember") {
              return (
                <div
                  key={index}
                  className="team-block-two col-lg-4 col-md-6 col-sm-12"
                >
                  <div className="inner-box">
                    <ul className="team-social-box">
                      {/* <li className="youtube">
                      <a href={p?.youtube} className="fa fa-youtube" />
                      <span className="social-name">youtube</span>
                    </li> */}

                    </ul>
                    <div className="image">  
                      {/* <a href="/teamDetail">
                    <img style={{maxHeight:"400px", minHeight:"400px"}} src={p?.image} alt="" />
                    </a> */}
                      <img
                        style={{ maxHeight: "400px", minHeight: "400px" }}
                        src={p?.image}
                        alt=""
                      />
                    </div>
                    <div className="lower-content">
                      <h3>
                        {/* <a href="/teamDetail">{p?.name}</a> */}
                        {p?.name}
                      </h3>
                      <div className="designation">{p?.designation}</div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamLeaders;
