import React, { useEffect, useState } from 'react';
import { getData } from './Api';

const FooterNew = () => {

  const [info, setInfo]=useState()
  const dataId="660895de0608b63dc8814028"
  const [services, setservices] = useState([]);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`services`);
      setservices(res?.data);
      return res?.data;
    };
    blogsData();
  }, []);

  useEffect(() => {
    const blogsData = async () => {
      const res = await getData(`websiteInfo/${dataId}`);
      setInfo(res?.data);
      console.log("res", res?.data);
      return res?.data;
    };
    blogsData();
  }, []);


    return (
        <footer className="main-footer">
        <div
          className="pattern-layer"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-3.png)",
          }}
        />
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-4.png)",
          }}
        />
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage:
              "url(/newupdate/images/background/pattern-5.png)",
          }}
        />
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <div className="logo">
                        <a href="/">
                          <img style={{height:"40px"}}
                            src={info?.logo}
                            // src="/newupdate/images/newIcons/Logo.svg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="text">
                       {info?.description}
                      </div>
                      {/* Social Box */}
                      <ul className="social-box">
                        {info?.facebook &&
                         <li>
                         <a href={info?.facebook} target='_blank' className="fa fa-facebook-f" />
                       </li>
                        }
                        {info?.linkedIn &&
                         <li>
                         <a href={info?.linkedIn} target='_blank' className="fa fa-linkedin" />
                       </li>
                        }
                        {info?.instagram &&
                         <li>
                         <a href={info?.instagram} target='_blank' className="fa fa-instagram" />
                       </li>
                        }
                        {info?.youtube &&
                         <li>
                         <a href={info?.youtube} target='_blank' className="fa fa-youtube" />
                       </li>
                        }


                      </ul>
                    </div>
                  </div>
                  {/* Footer Column */}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Services</h4>
                      <ul className="list-link">
                      {services?.map(s=>{
                        return(
                          <li>
                          <a href={`/services/${s?._id}`}>{s?.name}</a>
                        </li>
                        )
                      })}
                        
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Important Links</h4>
                      <ul className="list-link">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/aboutUs">About</a>
                        </li>
                        <li>
                          <a href="/contactUs">Contact</a>
                        </li>
                        <li>
                          <a href="/terms">Terms & conditions</a>
                        </li>
                        <li>
                          <a href="/privacy">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Column */}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Contact info</h4>
                      <ul className="list-style-two">
                        <li>
                          <span className="icon flaticon-wall-clock" />
                          Sat – Thus 10:00pm - 8:00pm
                        </li>
                        <li>
                          <span className="icon flaticon-phone-call" />
                          <a href={`tel:${info?.phone}`}>{info?.phone}</a>{" "}
                          {/* <a href="tel:+0123-456-789">0123 456 789</a> */}
                        </li>
                        <li>
                          <span className="icon flaticon-email" />
                          <a href={`mailto:${info?.email}`}>
                           {info?.email}
                          </a>
                        </li>
                        <li>
                          <span className="icon flaticon-maps-and-flags" />
                        {info?.address}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="copyright">
              Copyright © 2024 <a href="/" className='aTag'>Upturn idea</a>
              . All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    );
};

export default FooterNew;
