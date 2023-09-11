import React from "react";
import "./toggle.css";
const Toggle = () => {
  return (
    <div className="toggle_div">
      <p className="text-white text-xs mr-1"><sup>&deg;</sup>C</p>
      <div className="toggle_btn"></div>
      <p className="text-[#DCDCDC] text-xs ml-4"><sup>&deg;</sup>F</p>
    </div>
  );
};

export default Toggle;
