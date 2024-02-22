import React from 'react';
import Description from './Description';

const MarketingSection = () => {
    return (
        <section id="marketingSection" className="mt-5">
        <h2 className="">Marketing Strategy</h2>
        <h5  className="serviceTextHeading mt-4 ">
        Empower Your Brand with Proadman Digital's Marketing Strategy
        </h5>
        <p className="color-gray fs-6 mt-4">Welcome to Proadman Digital's Marketing Strategy section, where we fuel your brand's growth in the digital world. Our approach is simple yet powerful, focusing on the key elements:</p>
        <div className="">
          <Description/>


        </div>

        <p className="color-gray fs-6 mt-4">At Proadman Digital, we're dedicated to propelling your brand forward in the digital landscape. Let's collaborate and unlock your brand's full potential.  :</p>
        <img src="/images/service/slide.jpg" alt=""  className="mt-4 " style={{width:"100%", height:"auto"}}/>

      </section>
    );
};

export default MarketingSection;
