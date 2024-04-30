import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "react-apexcharts";
import { AdminContext } from "../../../App";
import mqtt from 'mqtt';
import { useParams } from "react-router-dom";

const NgxDynamic = () => {
  const { isSidebarOpen } = useContext(AdminContext);
  const { deviceType, deviceId } = useParams();
  const [client, setClient] = useState(null);
  const [chartData, setChartData] = useState({});
  const [graphHead, setGraphHead] = useState('');

  useEffect(() => {
    const mqttClient = mqtt.connect({
      hostname: '4.240.114.7',
      port: 9001,
      protocol: 'ws',
      username: 'BarifloLabs',
      password: 'Bfl@123'
    });

    setClient(mqttClient);

    mqttClient.on('connect', () => {
      console.log('Connected to MQTT broker');
      mqttClient.subscribe(`${deviceId}/data`);
    });

    mqttClient.on('message', (topic, payload) => {
      const data = JSON.parse(payload.toString());
      const { paramType, paramValue, dataPoint } = data;
      console.log(dataPoint.split(' ')[1]);

      // Update chart data based on the received MQTT message
      setChartData(prevData => {
        // Check if the chartData already has a key for the current paramType
        if (prevData[paramType]) {
          // If yes, append the new value to the existing data array
          return {
            ...prevData,
            [paramType]: [...prevData[paramType], { x: dataPoint, y: paramValue }]
          };
        } else {
          // If no, create a new entry with the paramType as key and value as array with the new value
          return {
            ...prevData,
            [paramType]: [{ x: dataPoint, y: paramValue }]
          };
        }
      });

      // Set graph head to the received paramType
      setGraphHead(paramType);
    });

    return () => {
      if (mqttClient) {
        mqttClient.end();
        console.log('Disconnected from MQTT broker');
      }
    };
  }, []);

  const options = {
    chart: {
      id: "realtime",
      
    },
    xaxis: {
      // type: 'datetime',
      title: {
        text: 'time',
      },
    },
    yaxis: {
      title: {
        text: 'Value',
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },},
      grid: {
        show: false
      },
      stroke: {
        width: 3 // Adjust the width as needed
      },
  };

  return (
    <>
      <div style={{ marginLeft: isSidebarOpen ? "280px" : '110px', marginTop: "7px" }}>
        <div className="option" style={{ marginTop: "7px", display: "flex" }}>
          <Dropdown>
            <Dropdown.Toggle
              style={{
                backgroundColor: "#7EE2B0",
                borderRadius: "13px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Time period
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                width: "20px",
                backgroundColor: "#7EE2B0",
                fontSize: "17px",
              }}
            >
              <Dropdown.Item>Day- 1 </Dropdown.Item>
              <Dropdown.Item>Day- 2</Dropdown.Item>
              <Dropdown.Item>Day- 3</Dropdown.Item>
              <Dropdown.Item>Day- 4</Dropdown.Item>
              <Dropdown.Item>Day- 5</Dropdown.Item>
              <Dropdown.Item>Day- 6</Dropdown.Item>
              <Dropdown.Item>Day- 7</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/createduser/useraccounts/UseraccountDevices/:accountid">
            <button
              type="button"
              className="btn btn-danger"
              style={{
                marginLeft: "10px",
                borderRadius: "13px",
                fontWeight: "bold",
              }}
            >
              Back
            </button>
          </Link>
        </div>

        <div className="d-flex flex-wrap ">
          {Object.entries(chartData).map(([paramType, data]) => (
            <div key={paramType} style={{ padding: "8px" }}>
              <p style={{ fontSize: 30 }}>Chart for {paramType}</p>
              <Chart
                options={options}
                series={[{name: deviceId,data }]}
                type="area"
                width={750}
                height={650}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NgxDynamic;
