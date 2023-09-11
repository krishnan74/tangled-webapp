import "./patientdet.css";
import ProfileCard from "@/components/ProfileCard";
import Toggle from "../../components/patient_details/Toggle";
import Plus from "../../components/patient_details/Plus";
import Current_tab from "../../components/patient_details/Current_tab";
import Three_dot from "../../components/patient_details/Three_dot";
import Humidity from "../../components/patient_details/Humidity";
import UV_index from "../../components/patient_details/UV_index";
import Temperature from "../../components/patient_details/Temperature";
import Rain_chance from "../../components/patient_details/Rain_chance";
import Precipitation from "../../components/patient_details/Precipitation";
import Wind from "../../components/patient_details/Wind";
import Chart from "../../components/patient_details/Chart";
function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="main_content">
        <div className="left_section">
          <div className="opt_bar">
            <div>
              <Plus />
            </div>
            <div>
              <Current_tab />
            </div>
            <div>
              <Toggle />
            </div>
          </div>
          <div className="city_div">
            <div className="newyork">
              <img className="mr-1" src="mouse3.png"></img>
              <p className=" left_text">New York, USA</p>

              <img className="ml-7 mr-1" src="sunrise48.png"></img>
              <p className="left_text_time">07:19</p>
            </div>

            <div className="newyork ">
              <p className="text-xs text-white mr-10 text-[#ffffffd7] ">
                Today 28 Sept
              </p>
              <img className="ml-11 mr-1" src="sunset.png"></img>
              <p className="left_text_time">19:32</p>
            </div>
          </div>

          <div className="temp_div mt-11">
            <img src="left.png"></img>
            <div className="temp_main ml-4">
              <p className="text-7xl text-white ">
                27<sup>&deg;</sup>
              </p>
              <div className="temp-text">
                <img src="sun.png"></img>
                <p className="text-lg text-white text-center">Sunny</p>
              </div>
            </div>

            <img src="right.png"></img>
          </div>
          <div>
            <img id="building" src="building4.png"></img>
          </div>
        </div>
        <div className="right_section">
          <div className="user_detail mt-8 mb-0">
            <div className="user_detail_text ml-10">
              <p className="text-s font-bold">Welcome back Isabella!</p>
              <p className="text-xs  font-semibold">
                Check out today's weather information
              </p>
            </div>
            <div className="user_detail_pic mr-10 ">
              <Three_dot />
              <img
                className="ml-6"
                id="user_pic"
                src="user-pic.jpg"
                alt="Picture of the user"
              />
            </div>
          </div>
          <div className="chart ">
            <Chart />
          </div>
          <div className="more_details">
            <p className="font-bold text-xs mt-3 mb-2 ml-10">
              More details of today's weather
            </p>
            <div className="weather_props_div ml-10">
              <Humidity name="Jade" />
              <Wind />
              <Precipitation />
              <UV_index />
              <Temperature />
              <Rain_chance />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
