import React from 'react';

const ReadyToBuild = () => {
    return (
        <section
        className="call-to-action-section style-two"
        style={{
          backgroundImage:
            "url(/newupdate/images/background/map-pattern.png)",
        }}
      >
        <div
          className="circle-layer"
          style={{
            backgroundImage: "url(/newupdate/images/resource/cta-bg.png)",
          }}
        />
        <div className="auto-container">
          <div className="row clearfix">
            {/* Title Column */}
            <div className="title-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <h2>Ready to Achieve Your Goal?</h2>
                <div className="text" style={{textTransform:"uppercase"}}> 
                Keep your feet one step forward to experience our service.
                </div>
                <a href="/contactUs" className="theme-btn btn-style-eleven">
                  <span className="txt">Lets Us Build Your Business</span>
                </a>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="image titlt" data-tilt="" data-tilt-max={3}>
                  <img src="/newupdate/images/resource/cta.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ReadyToBuild;
