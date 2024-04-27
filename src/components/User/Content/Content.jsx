import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./Content.css";
import tempretureimg from "../usersimage/humidity.png";
import drop from "../usersimage/drop (2).png";
import wind from "../usersimage/windspeed.png";
import mappin from "../usersimage/map-pin.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Chartbox from "../Chartbox";
import axios from "axios";






 ////////////////////////////////// START Gogle Map configuration/////////////////////////////
 const GoogleMapdata = ({ containerStyle, lat, lng }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};
////////////////////////////////////////// END Gogle Map configuration//////////////////


const Content = ({ toggleStates }) => {


  //Latitude and Longitude fo both Map and Weather
  const center = {
    lat: 20.296059,
    lng: 85.824539,
  };

  //Height and Width for Google Map
  const containerStyle = {
    width: "100%",
    height: "399px",
  };


  //////////////////////////////START WeatherData config/////////////////////////////////////

  const [wdata, setWdata] = useState(null);

  const weatherData = async ({ lat, lng }) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&exclude={part}&appid=5de227dcd9d14b80bb39771618ef96d5`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWdata(data);
   
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    weatherData({ lat: center.lat, lng: center.lng });
  }, []);

  /////////////////////////////////END WeatherData config//////////////////////////////

//  API call For Accounts Of User

const [useraccount , SetUseraccount]=useState([{}]);

  const accountFetch=async()=>{
try {
  const response= await axios.get(`http://4.188.244.11/account_view/9777703470/`);
  SetUseraccount(response.data);

} catch (error) {
console.log(error);
}


  }
useEffect(()=>{
  accountFetch()
},[]);

console.log(useraccount);

  return (
    <>
      <div className="contain  p-3 ">
        {/* Use MapDaata */}

        <div className="mapbox shadow">
          <GoogleMapdata
            containerStyle={containerStyle}
            lat={center.lat}
            lng={center.lng}
          />
        </div>

        {/* Use WeatherData */}

        <div
          className="weatherbox shadow "
          style={{ padding: "5px", width: "350px" }}
        >
          {wdata ? (
            <div className="weatherdata">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p className="tempheading">Temperature </p>
                  <p className="data">
                    {(wdata.main.temp - 273.0).toFixed(2)}℃{" "}
                  </p>
                </div>
                <div>
                  <img
                    className="tempretureimg"
                    src={tempretureimg}
                    alt="temperetureicon"
                  />
                </div>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p className="tempheading">Humidity </p>
                  <p className="data"> {wdata.main.humidity} %</p>
                </div>
                <div>
                  <img className="humidityimg" src={drop} alt="humidityimg" />
                </div>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p className="tempheading">WindSpeed </p>
                  <p className="data"> {wdata.wind.speed.toFixed(2)}Km/Hr </p>
                </div>
                <div>
                  <img className="windspeedimg" src={wind} alt="windspeedimg" />
                </div>
              </div>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p className="tempheading">Location </p>
                  <p className="data"> {wdata.name} </p>
                </div>
                <div>
                  <img
                    className="windspeedimg"
                    src={mappin}
                    alt="windspeedimg"
                  />
                </div>
              </div>
            </div>
          ) : (
            <p>Loading Weatherdata.........</p>
          )}
        </div>
      </div>
      <div className="chartcontainer">
  <div style={{ padding: "8px" }}>
   
  {Object.keys(toggleStates).map((metric) => (
        toggleStates[metric] && <Chartbox key={metric} metric={metric} />
      ))}
  </div>
</div>

    </>
  );
};

export default Content;
