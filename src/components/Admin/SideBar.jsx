import React from "react";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./SideBar.css";


const Sidebar = () => {
  return (
    <>
      {/* TopNavBar start */}

      <div className="shadow-lg topnavbar">
        <div className="d-flex justify-content-end align-items-center h-100">
          <i className="bi bi-person-circle m-5" style={{ fontSize: 30 }}></i>
        </div>
      </div>
      {/* TopNavBar end */}

      {/* SideBar start*/}

      <div className="sideBar d-flex flex-column">
        <i
          className="d-flex justify-content-center mt-3 bi bi-list"
          style={{ color: "white", fontSize: 30 }}
        ></i>
        <div className="logos">
          {/* 1 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-people"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                User Notification
              </p>
            </div>
          </div>

          {/* 2 */}

          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-person-check"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                Created User
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className=" bi bi-diagram-3-fill"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                Device Type Create
              </p>
            </div>
          </div>
          {/* 4 */}
          <div className="outer">
            <div className="d-flex  userNotification">
              <i
                className="bi bi-search"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                OCR
              </p>
            </div>
          </div>
          {/* 5 */}
          <div className="outer">
            <div className="d-flex userNotification">
              <i
                className="bi bi-inbox"
                style={{ color: "white", fontSize: 24 }}
              ></i>
              <p style={{ marginLeft: "15px", color: "white", fontSize: 20 }}>
                Thermal
              </p>
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
