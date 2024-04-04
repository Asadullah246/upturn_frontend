import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";

const team = [
  {
    name: "Jonaki Khanam",
    image: "/newupdate/images/team/jonaki.png",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "Founder & COO",
  },
  {
    // name:"MD Rezaul Islam",
    // image:"/newupdate/images/team/rezaul.png",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "Co-Founder & CEO",
  },
  {
    name: "MD Rezaul Islam",
    image: "/newupdate/images/team/rezaul.png",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "Co-Founder & Head of Creative Media",
  },
];
const TeamLeaders = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const blogsData = async () => {
      const res = await getData("team");
      setBlogs(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);
  return (
    <section className="team-section-two">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Our Team</div>
          <h2>Our Expert Leadership</h2>
        </div>
        <div className="row clearfix">
          {/* Team Block Two */}
          {blogs?.map((p, index) => {
            if (p?.showInHomePage == true) {
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
                      <li className="linkedin">
                        <a href={p?.linkedIn} className="fa fa-linkedin" />
                        <span className="social-name">linkedin</span>
                      </li>
                      <li className="facebook">
                        <a href={p?.facebook} className="fa fa-facebook-f" />
                        <span className="social-name">facebook</span>
                      </li>
                      <li className="twitter">
                        <a href={p?.twitter} className="fa fa-twitter" />
                        <span className="social-name">twitter</span>
                      </li>
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
