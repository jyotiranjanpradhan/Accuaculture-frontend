import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./Content.css";
import tempretureimg from "../Constant img/humidity.png";
import drop from "../Constant img/drop (2).png";
import wind from "../Constant img/windspeed.png";
import mappin from '../Constant img/map-pin.png';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const Content = () => {
  //Here Content can take lat and lng props from backend
  const center = {
    lat: 20.296059,
    lng: 85.824539,
  };

  //google Map config

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

  const lineChartData = {
    labels: [1, 2, 3], // Use numerical labels if the x-axis is representing numerical data
    datasets: [
      {
        label: "Revenue",
        data: [20,90,777, 300, 400],
        borderColor: "rgb(227, 19, 235)",
        borderWidth: 2,
        fill: false,
      },

      {
        label: "Loss",
        data: [20,590, 30, 40],
        borderColor: "rgba(15, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Line chart options
  const lineChartOptions = {
    scales: {
      x: {
        type: "linear", // Use "linear" for numerical data
      },
    },
  };

  useEffect(() => {
    weatherData({ lat: center.lat, lng: center.lng });
  }, []);

  return (
    <>
    <div className="container p-3  ">
      {/* Use MapDaata */}

      <div className="mapbox shadow">
        <GoogleMapdata containerStyle={containerStyle} lat={center.lat} lng={center.lng} />
      </div>

      {/* Use WeatherData */}

      <div className="weatherbox shadow">
        {wdata ? (
          <div className="weatherdata">
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <div>
                <p className="heading">Temperature </p>
                <p className="data">{(wdata.main.temp - 273.0).toFixed(2)}℃ </p>
              </div>
              <div>
                <img
                  className="tempretureimg"
                  src={tempretureimg}
                  alt="temperetureicon"
                />
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <div>
                <p className="heading">Humidity </p>
                <p className="data"> {wdata.main.humidity} %</p>
              </div>
              <div>
                <img className="humidityimg" src={drop} alt="humidityimg" />
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <div>
                <p className="heading">WindSpeed </p>
                <p className="data"> {wdata.wind.speed.toFixed(2)}Km/Hr </p>
              </div>
              <div>
                <img className="windspeedimg" src={wind} alt="windspeedimg" />
              </div>
            </div>
            <div className="d-flex" style={{ justifyContent: "space-evenly" }}>
              <div>
                <p className="heading">Location </p>
                <p className="data"> {wdata.name} </p>
              </div>
              <div>
                <img className="windspeedimg" src={mappin} alt="windspeedimg" />
              </div>
            </div>
          
          </div>
        ) : (
          <p>Loading Weatherdata.........</p>
        )}
      </div>

    </div>
    
      {/* Chart visualition */}
      <div className="chartContainer ">
        '<div className="chart1 shadow">
          <div className="innertextofchart">
            <p>Current</p>
          </div>
          <Line data={lineChartData} options={lineChartOptions}/>
        </div>
        <div className="chart2 shadow" >
        <div className="innertextofchart">
            <p>Voltage</p>
          </div>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>

    </>
  );
};

export default Content;

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
