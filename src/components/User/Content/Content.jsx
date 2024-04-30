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
import { useJsApiLoader } from '@react-google-maps/api';

const GoogleMapdata = ({ containerStyle, lat, lng, address, devices }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  const center = lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : { lat: 0, lng: 0 };

  const handleMarkerHover = (marker) => {
    setActiveMarker(marker);
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk',
    libraries: ['geometry'],
  });

  const roundMarkerIcon = {
    path: isLoaded ? window.google.maps.SymbolPath.CIRCLE : null,
    fillColor: 'red',
    fillOpacity: 1,
    strokeWeight: 1,
    strokeColor: 'white',
    scale: 10,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      mapTypeId="satellite"
    >
      {lat && lng && (
        <Marker
          position={center}
          onMouseOver={() => handleMarkerHover({ type: 'main' })}
          onMouseOut={() => handleMarkerHover(null)}
        >
          {activeMarker && activeMarker.type === 'main' && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <p>{address}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      )}

      {devices.map((device, index) => (
        <Marker
          key={index}
          position={{ lat: parseFloat(device[2][0]), lng: parseFloat(device[2][1]) }}
          icon={roundMarkerIcon}
          onMouseOver={() => handleMarkerHover({ type: 'device', device })}
          onMouseOut={() => handleMarkerHover(null)}
        >
          {activeMarker && activeMarker.type === 'device' && activeMarker.device === device && (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>
                <p>{device[0]}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  ) : null;
};
const Content = ({ toggleStates,oneaccountdata,devicesofaUser}) => {
  const [wdata, setWdata] = useState(null);

  let center = {
    lat: oneaccountdata.latitude,
    lng:oneaccountdata.  longitude,
    address:oneaccountdata.Address,
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
          <GoogleMapdata containerStyle={containerStyle} lat={center.lat} lng={center.lng} address={center.address} devices={devicesofaUser} />
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
