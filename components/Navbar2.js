import React from "react";

const Navbar2 = () => {
  return (
    <div className="mainParent">
          <ul className="menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="dropdown">
              <a href="#">Services</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Service 1</a>
                </li>
                <li>
                  <a href="#">Service 2</a>
                </li>
                <li>
                  <a href="#">Service 3</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
      <div className="d-flex align-content-center justify-content-between">
        {/* logo  */}
        <div>
          <img src="/home/new/google.png" alt="" className="mainLogo" />
        </div>
        {/* nav links  */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Navbar2;
