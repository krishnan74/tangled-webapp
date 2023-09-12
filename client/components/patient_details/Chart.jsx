import React from "react";
import "./chart.css";
const Chart = () => {
  return (
    <div className="chart_div">
      <div className="chart_header_div mt-5">
        <div className="chart_header ml-5 text-[12px] font-bold">
          Session Timeline
        </div>
        <div className="chart_options">
          <div className="chart_options_ind">
            <p>Rain precipitation</p>
            <img className="arrow" src="down_arrow.png" alt="" />
          </div>
          <div className="chart_options_ind">
            <p>Next days</p>
            <img className="arrow" src="right_arrow.png" alt="" />
          </div>
        </div>
      </div>

      <div className="graph_div">
        <div class="timeline-chart ">
          <div class="data-point">
            <div class="time">9 AM</div>
            <div class="logo">
              <img src="sun-black.png"></img>
            </div>
            <div class="temperature">22°C</div>
            <div class="vertical-line"></div>
          </div>
          <div class="data-point">
            <div class="time">11 AM</div>
            <div class="logo">
              <img src="cloud-black.png"></img>
            </div>
            <div class="temperature">26°C</div>
            <div class="vertical-line"></div>
          </div>
          <div class="data-point">
            <div class="time">1 PM</div>
            <div class="logo">
              <img src="rain-cloud-black.png"></img>
            </div>
            <div class="temperature">28°C</div>
            <div class="vertical-line"></div>
          </div>
          <div class="data-point">
            <div class="time">4 PM</div>
            <div class="logo">
              <img src="sun-black.png"></img>
            </div>
            <div class="temperature">24°C</div>
            <div class="vertical-line"></div>
          </div>
          <div class="data-point">
            <div class="time">6 PM</div>
            <div class="logo">
              <img src="cloud-black.png"></img>
            </div>
            <div class="temperature">20°C</div>
            <div class="vertical-line"></div>
          </div>
          <div class="data-point">
            <div class="time">8 PM</div>
            <div class="logo">
              <img src="cloud-black.png"></img>
            </div>
            <div class="temperature">26°C</div>
            <div class="vertical-line"></div>
          </div>

          <div class="data-point">
            <div class="time">9 PM</div>
            <div class="logo">
              <img src="rain-cloud-black.png"></img>
            </div>
            <div class="temperature">26°C</div>
            <div class="vertical-line"></div>
          </div>

          <div class="data-point" id="last">
            <div class="time">11 PM</div>
            <div class="logo">
              <img src="cloud-black.png"></img>
            </div>
            <div class="temperature">26°C</div>
            <div class="vertical-line"></div>
          </div>
        </div>
        <div className="legend text-[10px]">
          <div className="color_bar"></div>
          <div className="color-text">
            <p>0%</p>
            <p>20%</p>
            <p>40%</p>
            <p>60%</p>
            <p>80%</p>
            <p>100%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
