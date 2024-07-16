import React, { useEffect, useState } from "react";
import { getData } from "../shared/Api";
import { getSorted } from "../shared/SortingData";


const Management2 = () => {
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


{blogs?.map((member,index)=>{
   if (member?.showInHomePage == true && member?.role=="management") { 
                  return(
                    <div className="team-block style-two col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="image">
                        <img src={member?.image} style={{height:"500px" }} alt="" />
                        {/* Social Box */}
                        <ul className="social-box">

                        {member?.facebook &&
                      <li className="">
                      <a href={member?.facebook} className="fa fa-facebook-f" />
                    </li>
                    }
                     {member?.linkedIn &&
                      <li className="">
                      <a href={member?.linkedIn} className="fa fa-linkedin" />
                    </li>}
                    {member?.instagram &&
                      <li className="">
                      <a href={member?.instagram} className="fa fa-instagram" />
                    </li>}
                     {member?.youtube &&
                      <li className="">
                      <a href={member?.youtube} className="fa fa-youtube" />
                    </li>}


                          {/* <li>
                            <a href={member?.facebook} target="_blank" className="fa fa-facebook-f" />
                          </li>
                          <li>
                            <a href={member?.linkedIn} target="_blank" className="fa fa-linkedin" />
                          </li>
                          <li>
                            <a href={member?.twitter} target="_blank" className="fa fa-twitter" />
                          </li> */}
                          {/* <li>
                            <a href={member?.google} className="fa fa-google" />
                          </li> */}
                        </ul>
                      </div>
                      <div className="lower-content">
                        <div className="content">
                          <h4>
                            <a href={`team/${member?._id}`}>{member?.name}</a>
                          </h4>
                          <div className="designation">{member?.designation}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  )   }
                })}
        </div>
      </div>
    </section>
  );
};

export default Management2;
