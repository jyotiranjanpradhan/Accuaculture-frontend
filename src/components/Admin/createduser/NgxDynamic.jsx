import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "react-apexcharts";
import { AdminContext } from "../../../App";
import mqtt from "mqtt";
import { useParams } from "react-router-dom";
import axios from "axios";

const NgxDynamic = () => {
  const { isSidebarOpen } = useContext(AdminContext);
  const { deviceType, deviceId, accountid } = useParams();
  const [client, setClient] = useState(null);
  const [chartData, setChartData] = useState({});
  const [graphHead, setGraphHead] = useState("");
  const [devicetypedata, setdevicetypedata] = useState([]);

  const defaultSeries = [
    { name: "Session Duration", data: [10, 20, 30, 40, 50] },
    { name: "Page Views", data: [10, 20, 30, 40, 50] },
    { name: "Total Visits", data: [10, 20, 30, 40, 50] },
  ];

  useEffect(() => {
    const adminSideDeviceType = localStorage.getItem("adminSideDeviceType");
    if (adminSideDeviceType) {
      const [deviceType, version] = adminSideDeviceType.split(",");
      const apiUrl = `http://${process.env.REACT_APP_App_Ip}/controls_view/${deviceType}/${version}/`;
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          setdevicetypedata(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("API Error:", error);
        }
      };
      fetchData();
    } else {
      console.log(
        "adminSideDeviceType not found in localStorage or in an unexpected format."
      );
    }
  }, []);

  useEffect(() => {
    const mqttClient = mqtt.connect({
      hostname: "4.240.114.7",
      port: 9001,
      protocol: "ws",
      username: "BarifloLabs",
      password: "Bfl@123",
    });

    setClient(mqttClient);

    mqttClient.on("connect", () => {
      console.log("Connected to MQTT broker");
      mqttClient.subscribe(`${deviceId}/data`);
    });

    mqttClient.on("message", (topic, payload) => {
      const data = JSON.parse(payload.toString());
      const { paramType, paramValue, dataPoint } = data;
      console.log(data);

      // Update chart data based on the received MQTT message
      setChartData((prevData) => {
        console.log(prevData);
        // Check if the chartData already has a key for the current paramType
        if (prevData[paramType]) {
          // If yes, append the new value to the existing data array
          return {
            ...prevData,
            [paramType]: [
              ...prevData[paramType],
              { x: dataPoint, y: paramValue },
            ],
          };
        } else {
          // If no, create a new entry with the paramType as key and value as array with the new value
          return {
            ...prevData,
            [paramType]: [{ x: dataPoint, y: paramValue }],
          };
        }
      });

      // Set graph head to the received paramType
      setGraphHead(paramType);
    });

    return () => {
      if (mqttClient) {
        mqttClient.end();
        console.log("Disconnected from MQTT broker");
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
        text: "time",
      },
    },
    yaxis: {
      title: {
        text: "Value",
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      width: 3, // Adjust the width as needed
    },
    legend:{
      show:true
    }
  };


  return (
    <>
      <div
        style={{
          marginLeft: isSidebarOpen ? "280px" : "110px",
          marginTop: "7px",
        }}
      >
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

          <Link
            to={`/admin/createduser/useraccounts/UseraccountDevices/${accountid}`}
          >
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

        <div className="d-flex flex-wrap  ">
          {Object.entries(chartData).length === 0 ? (
           
            <div style={{ padding: "8px", display:'flex', flexWrap:'wrap',gap:'50px' }}>
              {Object.values(devicetypedata).map((data) => {
                console.log(data);
                if (data.button) return null; // Skip rendering for button type
               else  if (data.graph) {

                
                  return (
                    <div style={{ padding: "8px" }}>
                    <p style={{ fontSize: 20 }}>{data.graph.display_name}</p>
                    <Chart
                      options={{
                        series: [defaultSeries],
                        xaxis: {
                          title: {
                            text: data.graph.x,
                          },
                        },
                        
                        yaxis: {
                          title: {
                            text: data.graph.y,
                          },
                        },
                        
                      }}
                      series={defaultSeries}
                      type="area"
                      width={750}
                      height={650}
                    />
                  </div>
                  )
                }
                else  if (data.slider) {
                  return (
                    <div style={{ padding: "8px" }}>
                      <p style={{ fontSize: 20 }}>{data.slider.display_name}</p>
                      <Chart
                        options={{
                          series: [defaultSeries],
                          xaxis: {
                            title: {
                              text: data.graph.x,
                            },
                          },
                          
                          yaxis: {
                            title: {
                              text: data.graph.y,
                            },
                          },
                          legend:{
                            show:true
                          }
                        }}  
                        series={[{ name: deviceId, data: [{ x: 0, y: 0 }] }]} // Default data
                        type="area"
                        width={750}
                        height={650}
                      />
                    </div>
                  )
                }
              })}
            </div> // Render charts based on chartData
          ) : (
            Object.entries(chartData).map(([paramType, data]) =>{
              console.log(paramType);
              console.log(data);

           return  (
            
              <div key={paramType} style={{ padding: "8px" }}>
                <p style={{ fontSize: 30 }}>{paramType}</p>
                <Chart
                   options={{
                    chart: {
                      id: "realtime",
                    },
                    xaxis: {
                      title: {
                        text: "time",
                      },
                    },
                    yaxis: {
                      title: {
                        text: "Value",
                      },
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    tooltip: {
                      x: {
                        format: "dd/MM/yy HH:mm",
                      },
                    },
                    grid: {
                      show: false,
                    },
                    stroke: {
                      width: 3, 
                    },
                    legend:{
                      show:true
                    }
                  }}
                  series={[
                    { name: paramType,data },
                    
                  ]}
                  
                  type="area"
                  width={750}
                  height={650}
                />
              </div>
            )})
          )}
        </div>
      </div>
    </>
  );
};

export default NgxDynamic;
