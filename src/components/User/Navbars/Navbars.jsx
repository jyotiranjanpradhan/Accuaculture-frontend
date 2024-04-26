import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import farmer from "../usersimage/farmer.png";
import group from "../usersimage/group.png";
import clipboard from "../usersimage/ClipboardMinus.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbars.css";
import { Dropdown } from "react-bootstrap";

const Navbars = () => {
  const [hiddenbutton, setHiddenbutton] = useState(false);
  const toggleButton = () => {
    setHiddenbutton(!hiddenbutton);
  };

  return (
    <>
      {/* Top Navbar start */}

      <div className=" shadow-lg topnavbar h-auto ">
        <div className=" d-flex  justify-content-end align-items-center ">
          <Dropdown>
            <Dropdown.Toggle variant="transparent">
              <i
                className=" img1 fa-solid fa-chart-line fs-3"
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "20px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: "-5px",
              }}
            >
              <Dropdown.Item>Action 1</Dropdown.Item>
              <Dropdown.Item>Action 2</Dropdown.Item>
              <Dropdown.Item>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="transparent">
              <i
                className="img1 bi bi-diagram-3-fill "
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "20px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: "-5px",
              }}
            >
              <Dropdown.Item>Action 1</Dropdown.Item>
              <Dropdown.Item>Action 2</Dropdown.Item>
              <Dropdown.Item>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <i
            className="img1 bi bi-brightness-high-fill m-3"
            style={{ fontSize: 30 }}
          ></i>

          <i
            className="img2 bi bi-calendar-week m-3"
            style={{ fontSize: 30 }}
          ></i>

          <i className="img3 bi bi-bell-fill m-3" style={{ fontSize: 30 }}></i>

          <i
            className="img4 bi bi-question-circle m-3 "
            style={{ fontSize: 30 }}
          ></i>

          <i
            className="img5 bi bi-box-arrow-right m-3 "
            style={{ fontSize: 30 }}
          ></i>
        </div>
      </div>

      {/* TopNavbar End */}

      {/* SideNavbar Start */}

      <div className="side d-flex  flex-column  ">
        <img
          src={farmer}
          alt="farmer"
          style={{
            marginLeft: "8px",
            backgroundColor: "white",
            height: "38px",
            width: "39px",
            marginTop: 20,
            borderRadius: "50%",
            padding: "2px",
          }}
        />

        <div className="logos">
          <img
            className="sideimg"
            src={group}
            alt="group"
            style={{ padding: "7px", borderRadius: "4px" }}
          />

          <i
            className="sideimg bi  bi-person-lines-fill"
            onClick={toggleButton}
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
            }}
          ></i>
          {hiddenbutton && (
            <i
              className="sideimg bi bi-person-gear"
              style={{
                color: "white",
                fontSize: 30,
                padding: "5px ",
                borderRadius: "4px",
              }}
            ></i>
          )}
          <i
            className=" sideimg bi bi-wallet "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
            }}
          ></i>
          <i
            className=" sideimg bi bi-cart4 "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
            }}
          ></i>
          <img
            className="sideimg"
            src={clipboard}
            alt="clipboard"
            style={{ padding: "7px", borderRadius: "4px" }}
          />
        </div>
      </div>

      {/* SideNavbar End */}
    </>
  );
};

export default Navbars;
