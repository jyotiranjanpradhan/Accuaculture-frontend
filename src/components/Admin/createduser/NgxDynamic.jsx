import React, { useContext } from "react";
import "../Adminpage.css";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "react-apexcharts";
import { AdminContext } from "../../../App";
const NgxDynamic = () => {
//context
  const{isSidebarOpen}=useContext(AdminContext);
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
      data: [1, 3,5,34,3,3,23,4,56,67,78,8,9,990,],
    },
    {
      name: "ACY",
      data: [2, 4, 7,9,7,8,67,8,68,,6],
    },
    {
      name: "ACZ",
      data: [5, 9,,4,2,45,34,2,45,5,3,5,64],
    },
  ];

  //  Chart Confugration End

  return (
    <>
      {/* Page Start */}
      <div style={{ marginLeft: isSidebarOpen ? "280px":'110px', marginTop: "7px" }}>
        {/* Start option */}
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
          </button> </Link>
        </div>
        {/* End Option */}

        <div
          className="d-flex flex-wrap "
          // style={{ overflowY: "scroll", height: "100vh", }}
        >
          <div style={{ padding: "8px" }}>
            <p style={{fontSize:30}}>MPU</p>
            <Chart
              options={options}
              series={series}
              type="area"
              width={750}
              height={650}
            />
          </div>

          <div style={{ padding: "8px" }}>
          <p style={{fontSize:30}}>RPM</p>
            <Chart
              options={options}
              series={series}
              type="area"
              width={750}
              height={650}
            />
          </div>
          <div style={{ padding: "8px" }}>
          <p style={{fontSize:30}}>RPM</p>
            <Chart
              options={options}
              series={series}
              type="area"
              width={750}
              height={650}
            />
          </div>

          <div style={{ padding: "8px" }}>
            
            <p style={{fontSize:30}}>Current & Voltage</p>
            <Chart
              options={options}
              series={series}
              type="area"
              width={750}
              height={650}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NgxDynamic;
