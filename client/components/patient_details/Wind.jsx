import React from "react";
import "./wind.css";

const Wind = () => {
  return (
    <div className="hum_card">
      <div className="text_div mt-4">
        <p className="font-semibold text-xs mr-10">Wind</p>
        <div id="icon_holder">
          <img className="h-4 w-4" src="wind.png" alt="" />
        </div>
      </div>

      <div class="curved-arc">
        <div className="my_div"></div>
        <div class="curved-arc-inside"></div>
        <div className="meter">
          <div class="pointy-triangle ml-12"></div>
          <div class="circle ml-14"></div>

          <p className="wind-text">8 km/h</p>
        </div>
      </div>
      <div className="wind-speed">
        <p className="ten">10</p>
        <div className="wind-0"><p>0</p><p>20</p></div>
      </div>
    </div>
  );
};

export default Wind;
