import React, { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";
import "./Content.css";
import tempretureimg from "../usersimage/humidity.png";
import drop from "../usersimage/drop (2).png";
import wind from "../usersimage/windspeed.png";
import mappin from "../usersimage/map-pin.png";
import { GoogleMap, LoadScript,Marker ,InfoWindow } from "@react-google-maps/api";
import Chartbox from "../Chartbox";


const GoogleMapdata = ({ containerStyle, lat, lng }) => {
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);


  const center = lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : { lat: 0, lng: 0 };
  const markerDetails = {
   
    description: 'Marker Description',
  };

  // Toggle InfoWindow on marker hover
  const handleMarkerHover = () => {
    setIsInfoWindowOpen(!isInfoWindowOpen);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk" loading="async">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        {lat && lng && (
          <Marker
            position={center}
            onMouseOver={handleMarkerHover}
            onMouseOut={handleMarkerHover}
          >
            {/* InfoWindow content */}
            {isInfoWindowOpen && (
              <InfoWindow onCloseClick={() => setIsInfoWindowOpen(false)}>
                <div>
                  <h3>{markerDetails.name}</h3>
                  <p>{markerDetails.description}</p>
                </div>
              </InfoWindow>
            )}
          </Marker>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
const Content = ({ toggleStates,latitude,longitude}) => {
  const [wdata, setWdata] = useState(null);

  let center = {
    lat: latitude,
    lng:  longitude
  };




  const containerStyle = {
    width: "100%",
    height: "399px",
  };

  useEffect(() => {
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

    weatherData({ lat: center.lat, lng: center.lng });
  }, [center.lat, center.lng]);

  return (
    <>
      <div className="contain p-3">
        <div className="mapbox shadow">
          <GoogleMapdata containerStyle={containerStyle} lat={center.lat} lng={center.lng} />
        </div>
        <div className="weatherbox shadow" style={{ padding: "5px", width: "350px" }}>
          {wdata ? (
            <div className="weatherdata">
              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div>
                  <p className="tempheading">Temperature </p>
                  <p className="data">{(wdata.main.temp - 273.0).toFixed(2)}℃</p>
                </div>
                <div>
                  <img className="tempretureimg" src={tempretureimg} alt="temperetureicon" />
                </div>
              </div>
              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div>
                  <p className="tempheading">Humidity </p>
                  <p className="data">{wdata.main.humidity} %</p>
                </div>
                <div>
                  <img className="humidityimg" src={drop} alt="humidityimg" />
                </div>
              </div>
              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div>
                  <p className="tempheading">WindSpeed </p>
                  <p className="data">{wdata.wind.speed.toFixed(2)}Km/Hr</p>
                </div>
                <div>
                  <img className="windspeedimg" src={wind} alt="windspeedimg" />
                </div>
              </div>
              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                <div>
                  <p className="tempheading">Location </p>
                  <p className="data">{wdata.name}</p>
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
