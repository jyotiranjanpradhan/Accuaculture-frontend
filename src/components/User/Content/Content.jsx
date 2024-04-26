import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./Content.css";
import tempretureimg from "../usersimage/humidity.png";
import drop from "../usersimage/drop (2).png";
import wind from "../usersimage/windspeed.png";
import mappin from "../usersimage/map-pin.png";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Chart from "react-apexcharts";

//  Chart Confugration start
const options = {
  chart: {
    id: "apexchart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  dataLabels: {
    enabled: false,
  },
};

const series = [
  {
    name: "ACX",
    data: [1, 3, 5, 34, 3, 3, 23, 4, 56, 67, 78, 8, 9, 990],
  },
  {
    name: "ACY",
    data: [2, 4, 7, 9, 7, 8, 67, 8, 68, , 6],
  },
  {
    name: "ACZ",
    data: [5, 9, , 4, 2, 45, 34, 2, 45, 5, 3, 5, 64],
  },
];

//  Chart Confugration End

//Function that configure Map according to Lat,Lng

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

const Content = () => {
  //Here Content can take lat and lng props from backend
  const center = {
    lat: 20.296059,
    lng: 85.824539,
  };

  //Height and Width for Google Map
  const containerStyle = {
    width: "100%",
    height: "399px",
  };

  //WeatherData config

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

  return (
    <>
      <div className="containerr  p-3 ">
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
          style={{ border: "1px solid", padding: "5px", width: "350px" }}
        >
          {wdata ? (
            <div className="weatherdata">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div>
                  <p className="heading">Temperature </p>
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
                  <p className="heading">Humidity </p>
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
                  <p className="heading">WindSpeed </p>
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
                  <p className="heading">Location </p>
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
          <p style={{ fontSize: 30 }}>MPU</p>
          <Chart
            options={options}
            series={series}
            type="area"
            width={750}
            height={450}
          />
        </div>

        <div style={{ padding: "8px" }}>
          <p style={{ fontSize: 30 }}>RPM</p>
          <Chart
            options={options}
            series={series}
            type="area"
            width={750}
            height={450}
          />
        </div>
        <div style={{ padding: "8px" }}>
          <p style={{ fontSize: 30 }}>RPM</p>
          <Chart
            options={options}
            series={series}
            type="area"
            width={750}
            height={450}
          />
        </div>

        <div style={{ padding: "8px" }}>
          <p style={{ fontSize: 30 }}>Current & Voltage</p>
          <Chart
            options={options}
            series={series}
            type="area"
            width={750}
            height={450}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
