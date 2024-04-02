import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

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
    image:"/newupdate/images/team/avatar.png",
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
  {
    name: "Mostafa Rayhan",
    image: "/newupdate/images/team/rayhan.jpg",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "Software Engineer",
  },
  {
    name: "Muhammed Ibrahim Chowdhury",
    image: "/newupdate/images/team/ebrahim.jpeg",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "SEO Expert",
  },
  {
    name: "MD Ariful Islam",
    image: "/newupdate/images/team/ariful.jpg",
    youtube: "#",
    linkedIn: "#",
    facebook: "#",
    twitter: "#",
    designation: "Graphics & UI/UX Designer",
  },
];

const Team = () => {
  return (
    <div>
      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          <div className="preloader">
            <div className="box" />
          </div>
          {/* Main Header*/}
          <PageHeader pagename="Team" />
          {/* Team Page Section */}
          <section className="team-page-section">
            <div className="auto-container">
              <div className="row clearfix">
                {team?.map((member,index)=>{
                  return(
                    <div className="team-block style-two col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image">
                        <img src={member?.image} style={{height:"500px" }} alt="" />
                        {/* Social Box */}
                        <ul className="social-box">
                          <li>
                            <a href={member?.facebook} className="fa fa-facebook-f" />
                          </li>
                          <li>
                            <a href={member?.linkedIn} className="fa fa-linkedin" />
                          </li>
                          <li>
                            <a href={member?.twitter} className="fa fa-twitter" />
                          </li>
                          {/* <li>
                            <a href={member?.google} className="fa fa-google" />
                          </li> */}
                        </ul>
                      </div>
                      <div className="lower-content">
                        <div className="content">
                          <h4>
                            <a href="/teamDetail">{member?.name}</a>
                          </h4>
                          <div className="designation">{member?.designation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                })}

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
