import React from "react";
import Description from "./Description";

const BrandingSection = () => {
  return (
    <section id="brandingSection" className="mt-5">
      <h2 className="">Branding Strategy</h2>
      <h5 className="serviceTextHeading mt-4 ">
        Shaping Your Identity with Proadman Digital
      </h5>
      <p className="color-gray fs-6 mt-4">
        At Proadman Digital, we understand that your brand is more than just a
        logo or a name, it's the essence of your business, the promise you make
        to your customers, and the foundation of your success.
      </p>
      <div className="">
        <Description />
      </div>

      <p className="color-gray fs-6 mt-4">
        At Proadman Digital, we're dedicated to propelling your brand forward in
        the digital landscape. Let's collaborate and unlock your brand's full
        potential. :
      </p>
      <img
        src="/images/service/slide.jpg"
        alt=""
        className="mt-4 "
        style={{ width: "100%", height: "auto" }}
      />
    </section>
  );
};

export default BrandingSection;
