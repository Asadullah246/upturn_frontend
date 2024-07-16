import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";
import { getSorted } from "../shared/SortingData";

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
const Management = () => {
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

  console.log("team", blogs );
  return (
    <section className="team-section-two pt-5 ">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Management</div>
          <h2>Our Expert Leadership</h2>
        </div>
        <div className="row justify-content-center clearfix">
          {/* Team Block Two */}
          {blogs?.map((p, index) => {
            if (p?.showInHomePage == true && p?.role=="management") {
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

                    {p?.facebook &&
                      <li className="facebook">
                      <a href={p?.facebook} className="fa fa-facebook-f" />
                      <span className="social-name">facebook</span>
                    </li>
                    }
                     {p?.linkedIn &&
                      <li className="linkedin">
                      <a href={p?.linkedIn} className="fa fa-linkedin" />
                      <span className="social-name">linkedin</span>
                    </li>}
                    {p?.instagram &&
                      <li className="instagram">
                      <a href={p?.instagram} className="fa fa-instagram" />
                      <span className="social-name">instagram</span>
                    </li>}
                     {p?.youtube &&
                      <li className="youtube">
                      <a href={p?.youtube} className="fa fa-youtube" />
                      <span className="social-name">youtube</span>
                    </li>}
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
                        {/* {p?.name} */}
                        <a href={`team/${p?._id}`}>{p?.name}</a>
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

export default Management;
