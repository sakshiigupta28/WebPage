import React from "react";
import "./styles.scss";
import logo from "../../Assets/Logo.png";

const Header = () => {
  return (
    <div className="header_sec">
      <div className="img_sec">
        <img src={logo} alt="" />
      </div>

      <div className="admin_name">
        <p>Sakshi Gupta </p>
      </div>
    </div>
  );
};

export default Header;
