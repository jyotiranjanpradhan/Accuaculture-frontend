import React, { useEffect, useState } from 'react';

const GoogleMapComponent = ({ devicesNamesList, devicesStatus, center }) => {
  const [map, setMap] = useState(null);
  const [centerMarker, setCenterMarker] = useState(null);


  useEffect(() => {
    console.log(typeof(center.lat));
    const initMap = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: center.lat, lng: center.lng },
        zoom: 17,
      });
       // Add pin marker at the center
       console.log(center.lat, center.lng);
       const marker = new window.google.maps.Marker({
        position: { lat: center.lat, lng: center.lng },
        map: mapInstance,
        title: 'Center Pin',
      });
      setCenterMarker(marker);

       // Add info window for center marker
      const centerInfoWindow = new window.google.maps.InfoWindow({
        content: `<div>
                    <p>Location: ${center.address}</p>
                  </div>`
      });

    //   // Show infoWindow on marker click
    //   centerMarker.addListener('click', () => {
    //     centerInfoWindow.open(mapInstance, centerMarker);
    //   });

      setMap(mapInstance);
    };

    if (!window.google) {
      // Google Maps API not loaded yet, handle accordingly (optional)
      console.error("Google Maps API hasn't loaded yet.");
    } else {
      initMap();
    }
  }, [center]);

  useEffect(() => {
    if (map) {
        console.log(devicesNamesList);
      devicesNamesList.forEach((item) => {
        // const isChecked = devicesStatus[item[1]]; // Get the toggle state
        // const markerColor = isChecked ? 'green' : 'red'; // Default marker color

        const markerPosition = new window.google.maps.LatLng(item[2][0], item[2][1]);
        const mapMarker = new window.google.maps.Marker({
          position: markerPosition,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: 'red', // Set marker color
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 8, // Adjust the size as needed
          },
          map,
        });

        // Add info window with custom content
        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div>
                    <p>Device Name: ${item[0]}</p>
                    <p>Latitude: ${item[2][1]}</p>
                    <p>Longitude: ${item[2][0]}</p>
                 </div>`,
        });

        // Show infoWindow on marker click
        mapMarker.addListener('click', () => {
          infoWindow.open(map, mapMarker);
        });

        // Show infoWindow on marker hover
        mapMarker.addListener('mouseover', () => {
          infoWindow.open(map, mapMarker);
        });

        // Close infoWindow on mouseout
        mapMarker.addListener('mouseout', () => {
          infoWindow.close();
        });
      });
    }
  }, [map, devicesNamesList, devicesStatus]);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default GoogleMapComponent;
