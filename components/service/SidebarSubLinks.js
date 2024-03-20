import React from "react";

const SidebarSubLinks = ({links}) => {

  return (
    <div className="sidebar-widget">
      <ul className="service-list">
        {links?.map((link, index)=>{
            return(
                <li key={index}>
                <a href={link?.link}>
                  <span className="color-layer" />
                  {link?.name}
                </a>
              </li>
            )
        })}

      </ul>
    </div>
  );
};

export default SidebarSubLinks;
