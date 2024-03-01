import React from "react";

const ColorPalate = () => {
  return (
    <div className="color-palate">
      <div className="color-trigger">
        <i className="fa fa-gear" />
      </div>
      <div className="color-palate-head">
        <h6>Choose Your Options</h6>
      </div>
      <h5>RTL Version</h5>
      <ul className="rtl-version option-box">
        {" "}
        <li className="rtl">RTL Version</li> <li>LTR Version</li>{" "}
      </ul>
      <h5>Boxed Version</h5>
      <ul className="box-version option-box">
        {" "}
        <li className="box">Boxed</li> <li>Full width</li>
      </ul>
      <h5>Want Sticky Header</h5>
      <ul className="header-version option-box">
        {" "}
        <li className="box">No</li> <li>Yes</li>
      </ul>
      <h5>Dark Verion</h5>
      <ul className="dark-version option-box">
        {" "}
        <li className="box">Yes</li> <li>No</li>
      </ul>
      <a href="#" className="purchase-btn">
        Purchase now $17
      </a>
      <div className="palate-foo">
        <span>You will find much more options and styling in admin panel.</span>
      </div>
    </div>
  );
};

export default ColorPalate;
