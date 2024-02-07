import React from "react";
import "./styles.scss";
import serviceImg from "../../Assets/Footer.png";

const Services = () => {
  return (
    <>
      <div className="services_page">
        <div className="heading_name">
          HOME ABOUT US SERVICES PRODUCT CONTACT US & MANY MORE
        </div>
      </div>
      <div className="heading_img">
        <img src={serviceImg} alt="serviceImg" />
      </div>
      <div className="footer_sec">
        Cpoyright  &#169; 2024 Design kit
      </div>
    </>
  );
};

export default Services;
