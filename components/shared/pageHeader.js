import React from "react";
import HeaderLinks from "./HeaderLinks";

const PageHeader = ({ pagename }) => {
  return (
    <div>
      {/* Main Header*/}
    <HeaderLinks/> 
      {/* End Main Header */}
      {/* Page Title Section */}
      <section
        className="page-title"
        style={{
          backgroundImage: "url(/newupdate/images/background/pattern-16.png)",
        }}
      >
        <div
          className="pattern-layer-one"
          style={{
            backgroundImage: "url(/newupdate/images/main-slider/pattern-1.png)",
          }}
        />
        <div
          className="pattern-layer-two"
          style={{
            backgroundImage: "url(/newupdate/images/background/pattern-17.png)",
          }}
        />
        <div
          className="pattern-layer-three"
          style={{
            backgroundImage: "url(/newupdate/images/background/pattern-18.png)",
          }}
        />
        <div
          className="pattern-layer-four"
          style={{
            backgroundImage: "url(/newupdate/images/icons/cross-icon.png)",
          }}
        />
        <div className="auto-container">
          <h2>{pagename}</h2>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>{pagename}</li>
          </ul>
        </div>
      </section>
      {/* End Page Title Section */}
    </div>
  );
};

export default PageHeader;
