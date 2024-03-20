import React from "react";

const Pricing = () => {

     const Standard={
        name:"Standard",
        price:70,
        features:["Socila Media Marketing","5600 Keywords", "One Way Link Building", "10 Free Optimization", "10 Press Releases"]
    }
     const Economy={
        name:"Economy",
        price:90,
        features:["Socila Media Marketing","6600 Keywords", "One Way Link Building", "20 Free Optimization", "20 Press Releases"]
    }
     const EconomyPlus={
        name:"Standard",
        price:100,
        features:["Socila Media Marketing","7600 Keywords", "One Way Link Building", "30 Free Optimization", "30 Press Releases"]
    }
  return (
    <section className="pricing-section style-three">
      <div
        className="pattern-layer"
        style={{
          backgroundImage: "url(/newupdate/images/background/pattern-1.png)",
        }}
      />
      <div
        className="pattern-layer-two"
        style={{
          backgroundImage: "url(/newupdate/images/background/pattern-20.png)",
        }}
      />
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Packages</div>
          <h2>Our Pricing Table</h2>
          <div className="text">
            We take a consultative approach to every client engagement and find
            actionable <br /> solutions that will help your organization achieve
            the best outcomes.
          </div>
        </div>
        <div className="pricing-tabs tabs-box">
          {/*Tabs Container*/}
          <div className="tabs-content">
            {/*Tab*/}
            <div className="tab active-tab" id="prod-monthly">
              <div className="content">
                <div className="row clearfix">
                  {/* Price Block */}
                  <div className="price-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">{Standard?.name}</div>
                      <div className="price">${Standard?.price}</div>
                      <ul className="price-list">
                        {Standard?.features?.map((f,index)=>{
                            return(
                                <li key={index}>{f}</li>
                            )
                        })}

                      </ul>
                      <a href="#" className="theme-btn btn-style-eleven">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-1.png)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Price Block */}
                  <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">{Economy?.name}</div>
                      <div className="price">${Economy?.name}</div>
                      <ul className="price-list">
                      {Economy?.features?.map((f,index)=>{
                            return(
                                <li key={index}>{f}</li>
                            )
                        })}
                      </ul>
                      <a href="#" className="theme-btn btn-style-six">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer style-two"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-3.png)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Price Block */}
                  <div className="price-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">{EconomyPlus?.name}</div> 
                      <div className="price">${EconomyPlus?.name}</div>
                      <ul className="price-list">
                      {EconomyPlus?.features?.map((f,index)=>{
                            return(
                                <li key={index}>{f}</li>
                            )
                        })}
                      </ul>
                      <a href="#" className="theme-btn btn-style-eight">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-2.png)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Tab*/}
            <div className="tab" id="prod-yearly">
              <div className="content">
                <div className="row clearfix">
                  {/* Price Block */}
                  <div className="price-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">Standard</div>
                      <div className="price">$69.99</div>
                      <ul className="price-list">
                        <li>Social Media Marketing</li>
                        <li>5.600 Keywords</li>
                        <li>One Way Link Building</li>
                        <li>10 Free Optimization</li>
                        <li>10 Press Releases</li>
                      </ul>
                      <a href="#" className="theme-btn btn-style-five">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-1.png)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Price Block */}
                  <div className="price-block active col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">Economy</div>
                      <div className="price">$79.99</div>
                      <ul className="price-list">
                        <li>Social Media Marketing</li>
                        <li>5.600 Keywords</li>
                        <li>One Way Link Building</li>
                        <li>10 Free Optimization</li>
                        <li>10 Press Releases</li>
                      </ul>
                      <a href="#" className="theme-btn btn-style-six">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer style-two"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-3.png)",
                        }}
                      />
                    </div>
                  </div>
                  {/* Price Block */}
                  <div className="price-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="title">Standard</div>
                      <div className="price">$89.99</div>
                      <ul className="price-list">
                        <li>Social Media Marketing</li>
                        <li>5.600 Keywords</li>
                        <li>One Way Link Building</li>
                        <li>10 Free Optimization</li>
                        <li>10 Press Releases</li>
                      </ul>
                      <a href="#" className="theme-btn btn-style-three">
                        <span className="txt">Buy Now</span>
                      </a>
                      <div
                        className="price-pattern-layer"
                        style={{
                          backgroundImage:
                            "url(/newupdate/images/background/price-pattern-2.png)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Tab Btns*/}
          <div className="buttons-outer">
            <ul className="tab-buttons clearfix">
              <li data-tab="#prod-monthly" className="tab-btn active-btn">
                Monthly
              </li>
              <li data-tab="#prod-yearly" className="tab-btn">
                Yearly
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
