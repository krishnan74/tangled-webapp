import React from "react";
import "./heartrate.css";

const HeartRate = () => {
  return (
    <div className="hum_card">
      <div className="text_div mt-4">
        <p className="font-semibold text-xs mr-10">Heart <br /> Rate</p>
        <div id="icon_holder">
          <img className="h-3 w-3 ml-[5px]" src="heart.png" alt="" />
        </div>
      </div>

      <div class="curved-arc">
        <div className="my_div"></div>
        <div class="curved-arc-inside"></div>
        <div className="meter">
          <div class="pointy-triangle ml-12"></div>
          <div class="circle ml-14"></div>

          <p className="wind-text">120 bpm</p>
        </div>
      </div>
      <div className="wind-speed">
        <p className="ten">120</p>
        <div className="wind-0"><p>0</p><p>200</p></div>
      </div>
    </div>
  );
};

export default HeartRate;
