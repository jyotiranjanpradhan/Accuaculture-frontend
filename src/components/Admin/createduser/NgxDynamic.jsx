import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "react-apexcharts";
import { AdminContext } from "../../../App";
import mqtt from "mqtt";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactApexChart from 'react-apexcharts';

const NgxDynamic = () => {
  const { isSidebarOpen } = useContext(AdminContext);
  const { deviceType, deviceId, accountid } = useParams();
  const [client, setClient] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [graphHead, setGraphHead] = useState("");
  const [devicetypedata, setdevicetypedata] = useState([]);
  const [mqttData, setMqttData] = useState([]);

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
          let graphInfo = {};

          response.data.forEach(item => {
            if (item.graph) {
                const { display_name, x, y, params } = item.graph;
                
                const graphLabels = params.map(param => param.graph_label);
                
                // Store display name, x, y, and corresponding graph labels in the graphInfo object
                graphInfo[display_name] = { x, y, labels: graphLabels };
            }
        });
        
        // Convert the graphInfo object to a JSON string
        const graphInfoJSON = JSON.stringify(graphInfo);
        
        // Save the JSON string in local storage under the key 'graphinfo'
        localStorage.setItem('graphinfo', graphInfoJSON);
       
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
      // const { paramType, paramValue, dataPoint } = data;
      // console.log(data);
      setMqttData(data)
      setChartData(prevChartData => {
        return prevChartData.map(chart => {
            if (chart.seriesName.includes(data.paramType)) {
                // Find the index of the series that matches the param type
                const seriesIndex = chart.seriesName.indexOf(mqttData.paramType);
  
                // Ensure newData[seriesIndex] is initialized as an array
                const newData = [...chart.seriesData];
                if (!Array.isArray(newData[seriesIndex])) {
                    newData[seriesIndex] = [];
                }
  
                // Push the new value to the existing series data array
                newData[seriesIndex].push(data.paramValue);
  
                // Update xCategories with the new timestamp (extracted time)
                const newCategories = [...chart.xCategories, extractTime(mqttData.dataPoint)];
  
                return {
                    ...chart,
                    seriesData: newData,
                    xCategories: newCategories
                };
            } else {
                return chart;
            }
        });
    });
      // Update chart data based on the received MQTT message
      // setChartData((prevData) => {
      //   // Check if the chartData already has a key for the current paramType
      //   if (prevData[paramType]) {
      //     // If yes, append the new value to the existing data array
      //     return {
      //       ...prevData,
      //       [paramType]: [
      //         ...prevData[paramType],
      //         { x: dataPoint, y: paramValue },
      //       ],
      //     };
      //   } else {
      //     // If no, create a new entry with the paramType as key and value as array with the new value
      //     return {
      //       ...prevData,
      //       [paramType]: [{ x: dataPoint, y: paramValue }],
      //     };
      //   }
      // });

      // // Set graph head to the received paramType
      // setGraphHead(paramType);
    });

    return () => {
      if (mqttClient) {
        mqttClient.end();
        console.log("Disconnected from MQTT broker");
      }
    };
  }, []);

  // const options = {
  //   chart: {
  //     id: "realtime",
  //   },
  //   xaxis: {
  //     // type: 'datetime',
  //     title: {
  //       text: "time",
  //     },
  //   },
  //   yaxis: {
  //     title: {
  //       text: "Value",
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   tooltip: {
  //     x: {
  //       format: "dd/MM/yy HH:mm",
  //     },
  //   },
  //   grid: {
  //     show: false,
  //   },
  //   stroke: {
  //     width: 3, // Adjust the width as needed
  //   },
  // };
  // const defaultLabels = ["current", "voltage", "rpm", "mpu"];

//   useEffect(() => {
//     // Retrieve data from local storage
//     const graphHeadingsJSON = localStorage.getItem('graphinfo');
//     const graphHeadings = JSON.parse(graphHeadingsJSON);

//    // Create an array of objects with key and data for each chart
//    const chartsDataArray = Object.entries(graphHeadings).map(([key, value]) => ({
//     key,
//     data: value.map(label => ({ x: label, y: 0 }))
// }));

// // Update the state with the chart data
// setChartData(chartsDataArray);
// }, [devicetypedata]);
useEffect(() => {
  // Retrieve data from local storage
  const graphInfoJSON = localStorage.getItem('graphinfo');
  const graphInfo = JSON.parse(graphInfoJSON);

  // Create an array of objects with key and data for each chart
  const chartsDataArray = Object.entries(graphInfo).map(([key, value]) => {
      // Create dummy x-axis and y-axis values
      const xAxisData = ['1', '2', '3', '4', '5']; // Dummy x-axis values
      const yAxisData = ['1', '2', '3', '4', '5']; // Dummy y-axis values

      // Initialize series data with 0 values
      const seriesData = value.labels.map(label => 0);

      return {
          key,
          x: value.x, // X-axis text
          y: value.y, // Y-axis text
          seriesName: value.labels, // Set series name according to labels
          seriesData: seriesData, // Set series data with initial 0 values
          xCategories: []
      };
  });

  // Update the state with the chart data
  setChartData(chartsDataArray);
}, [devicetypedata]);

// Function to extract time from dataPoint string
const extractTime = (dataPoint) => {
  return dataPoint ? dataPoint.split(' ')[1] : ''; // Split the string by space and get the second part (time)
};

// Function to update chart data with MQTT data
// const updateChartData = (mqttData) => {
//   if (!mqttData || !mqttData.paramType || !mqttData.paramValue || !mqttData.dataPoint) {
//       console.error('Invalid MQTT data:', mqttData);
//       return; // Skip processing invalid MQTT data
//   }

  
// };

// useEffect(()=>{
//   updateChartData()
// },[mqttData])





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

        <div className="d-flex flex-wrap ">
          {/* {Object.entries(chartData).length === 0 ? (
           
            <div style={{ padding: "8px" }}>
              {Object.values(devicetypedata).map((data) => {
                console.log(data);
                if (data.button) return null; // Skip rendering for button type
               else  if (data.graph) {

                
                  return (
                    <div style={{ padding: "8px" }}>
                    <p style={{ fontSize: 20 }}>{data.graph.display_name}</p>
                    <Chart
                      options={{
                        series: [
                          { name: "Session Duration" },
                          { name: "Page Views" },
                          { name: "Total Visits" }
                        ],
                        xaxis: {
                          title: {
                            text: "Times",
                          },
                        },
                        
                        yaxis: {
                          title: {
                            text: "Value",
                          },
                        },
                        
                      }}
                      series={[{ name:deviceId, data: [{ x: 0, y: 0 }] }]} // Default data
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
                         options={options}
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
            Object.entries(chartData).map(([paramType, data]) => (
              <div key={paramType} style={{ padding: "8px" }}>
                <p style={{ fontSize: 30 }}>{paramType}</p>
                <Chart
                  options={options}
                  series={[{ name: deviceId, data }]}
                  type="area"
                  width={750}
                  height={650}
                />
              </div>
            ))
          )} */}
  {/* {chartData.map(({ key, data }) => (
                <div key={key}>
                    <h2>{key}</h2>
                    <Chart
                        options={{
                            // Add chart options here
                            // For example, you can set the chart type, labels, etc.
                            // You can refer to ApexCharts documentation for available options
                        }}
                        series={[
                            {
                                name: key,
                                data: data
                            }
                        ]}
                        type="line"
                        width="500"
                    />
                </div>
            ))} */}
             {chartData.map(({ key, x, y, seriesName, seriesData,xCategories  }) => (
                <div key={key} className="col-6">
                    <h2>{key}</h2>
                    <Chart
    options={{
        xaxis: {
            title: {
                text: x // Set x-axis text according to its value
            },
            categories: xCategories // Set x-axis categories (timestamps)
        },
        yaxis: {
            title: {
                text: y // Set y-axis text according to its value
            }
        }
    }}
    series={seriesName.map((name, index) => {
        const data = Array.isArray(seriesData[index]) && seriesData[index].length > 0 ? seriesData[index] : [{ x: 'No Data', y: 0 }];
        return {
            name: name, // Set series name according to label
            data: data // Ensure seriesData[index] is an array with at least one element
        };
    })}
    type="line"
    width="500"
/>


                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default NgxDynamic;
