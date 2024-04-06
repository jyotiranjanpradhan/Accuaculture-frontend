

import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./Content.css";
import tempretureimg from "../Constant img/humidity.png";
import drop from "../Constant img/drop (2).png";
import wind from "../Constant img/windspeed.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const Content = () => {
  const containerStyle = {
    width: "100%",
    height: "344px",
  };
  const center = {
    lat: 20.296059,
    lng: 85.824539,
  };
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
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    weatherData({ lat: center.lat, lng: center.lng });
  }, []);

  const GoogleMapdata = ({ lat, lng }) => {
    return (
      <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
          zoom={10}
        ></GoogleMap>
      </LoadScript>
    );
  };

  return (
    <div className="container p-3  ">
      <div className="mapbox shadow">
        <GoogleMapdata lat={center.lat} lng={center.lng} />
      </div>
      <div className="weatherbox shadow">
        {wdata ? (
          <div className="weatherdata">
            <div className="d-flex">
              <div>
                <p className="heading">Temperature </p>
                <p className="data">{(wdata.main.temp - 273.0).toFixed(2)}℃ </p>
              </div>
              <div>
                <img className="tempretureimg"
                 
                  src={tempretureimg}
                  alt="temperetureicon"
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="heading">Humidity </p>
                <p className="data"> {wdata.main.humidity} %</p>
              </div>
              <div>
                <img className="humidityimg"
                
                  src={drop}
                  alt="humidityimg"
                />
              </div>
            </div>
            <div className="d-flex">
              <div>
                <p className="heading">WindSpeed </p>
                <p className="data"> {wdata.wind.speed.toFixed(2)}Km/Hr </p>
              </div>
              <div>
                <img className="windspeedimg"
                 
                  src={wind}
                  alt="windspeedimg"
                />
              </div>
            </div>
            <div className="d-flex ">
              <div>
                <p className="heading">Location </p>
                <p className="data"> {wdata.name}</p>
              </div>
              <div className="locationimg" style={{marginLeft:'28px'}}>
                <i  class="bi bi-pin-map-fill" style={{ fontSize: 28 }}></i>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading Weatherdata.........</p>
        )}
      </div>
    </div>
  );
};

export default Content;
