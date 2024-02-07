import React, { useState } from "react";
import "./styles.scss";
import GlobalBtn from "../GlobalButton";
import tick from "../../Assets/tick.png";
import arrow from "../../Assets/Down_arr.png";
import yellowTick from "../../Assets/yellow_tick.png";

const HeroSection = () => {
  const [selected, setSelected] = useState(false);
 
  const handleClick = (id) => {
    setSelected(id);
  };
  const btnData = [
    {
      id: 1,
      text: "Home",
      icon: tick,
      clickIcon: yellowTick,
    },
    {
      id: 2,
      text: "About Us",
      icon: tick,
      clickIcon: yellowTick,
    },
    { id: 3, text: "Service", icon: tick, clickIcon: yellowTick },
    { id: 4, text: "Case Study", icon: tick, clickIcon: yellowTick },

    { id: 5, text: "Blogs", icon: tick, clickIcon: yellowTick },
    { id: 6, text: "Careers", icon: tick, clickIcon: yellowTick },
    { id: 7, text: "Contant Us", icon: tick, clickIcon: yellowTick },
  ];

  return (
    <>
      <div className="hero_sec_div">
        <div className="heading">
          <div className="main_heading">Choose Your Favorite Category</div>
          <div className="sub_heading">
            Website design, UX/UI kits, infographics, logos and scene generator
          </div>
        </div>
      </div>
      <div className="input_tab">
        <input type="text" placeholder="E-COMMERCE" />
      </div>
      <div className="creative_page_div">
        <div className="creative_heading">
          Select Your Creative Web Pages Design
        </div>
        <div className="btn_sec">
          <div className="btn_div">
            {btnData?.map((el) => {
              return (
                <GlobalBtn
                  text={el?.text}
                  icon={selected === el?.id ? el?.clickIcon : el?.icon}
                  btnAction={()=>handleClick(el.id , el?.text)}
                colorType={selected !== el?.id ? '#000' : '#f5cf6a'}
                />
              );
            })}
          </div>
          <div>
            <GlobalBtn
              text="See all"
              icon={arrow}
              btnType="solid"
              btnBorder="#F5CF6A"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
