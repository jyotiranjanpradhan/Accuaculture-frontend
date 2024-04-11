import React from "react";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <>
      {/* TopNavBar start */}
      <div className="topnavbar shadow">
        <i
          className=" d-flex  justify-content-end bi bi-person-circle "
          style={{
            fontSize: 30,
            marginRight: "40px",
            height: "50px",
            alignItems: "center",
            marginRight: "30px",
          }}
        ></i>
      </div>
      {/* TopNavBar end */}

      {/* SideBar start*/}

      <div className="sideBar d-flex flex-column">
        <i
          className=" hamberger d-flex justify-content-end mt-2 bi bi-list"
          style={{ color: "white", fontSize: 30, padding: "5px" }}
        ></i>
        <div className="logos">
          {/* 1 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-people"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <Link to="/" className="side-menu">
                {" "}
                <p
                  style={{
                    marginLeft: "15px",
                    color: "white",
                    fontSize: 20,
                    textDecoration: "none ",
                  }}
                >
                  User Notification
                </p>
              </Link>
            </div>
          </div>

          {/* 2 */}

          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-person-check"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <Link to="/createduser" className="side-menu">
                <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                  Created User
                </p>
              </Link>
            </div>
          </div>

          {/* 3 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className=" bi bi-diagram-3-fill"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <Link to="/devicetypecreate" className="side-menu">
                {" "}
                <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                  Device Type Create
                </p>
              </Link>
            </div>
          </div>
          {/* 4 */}
          <div className="outer">
            <div className="d-flex  userNotification">
              <i
                className="bi bi-search"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <Link to="/ocr" className="side-menu">
                {" "}
                <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                  OCR
                </p>
              </Link>
            </div>
          </div>
          {/* 5 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-inbox"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <Link to="/thermal" className="side-menu">
                {" "}
                <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                  Thermal
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* SideBar End*/}
    </>
  );
};

export default Sidebar;

{
  /* Have to use in feature toggle of hamburger */
}

{
  /* <div className="sideBar d-flex  flex-column  ">
        <i
          class="d-flex justify-content-center mt-3 bi bi-list"
          style={{ color: "white", fontSize: 30 }}
        ></i>
        <div className="logos">
          <i class="bi bi-people" style={{ color: "white", fontSize: 30 }}></i>
          <i
            class="bi bi-person-check"
            style={{ color: "white", fontSize: 30 }}
          ></i>
          <i
            className="img1 bi bi-diagram-3-fill "
            style={{ color: "white", fontSize: 30 }}
          ></i>
          <i class="bi bi-search" style={{ color: "white", fontSize: 30 }}></i>
          <i class="bi bi-inbox" style={{ color: "white", fontSize: 30 }}></i> */
}
