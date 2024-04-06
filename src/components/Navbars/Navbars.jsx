import React from "react";
import "bootstrap-icons/font/bootstrap-icons";
import farmer from "../Constant img/farmer.png";
import group from "../Constant img/group.png";
import clipboard from "../Constant img/ClipboardMinus.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbars.css";

const Navbars = () => {
  return (
    <>
      <div className=" shadow-lg topnavbar ">
        <div className=" d-flex  justify-content-end align-items-center h-100">
        
          <i className="bi bi-diagram-3-fill m-3" style={{ fontSize: 30 }}></i>
          <i class="bi bi-brightness-high-fill m-3"style={{ fontSize: 30 }}></i>
          <i class="bi bi-calendar-week m-3"style={{ fontSize: 30 }}></i>
          <i class="bi bi-bell-fill m-3"style={{ fontSize: 30 }}></i>
          <i class="bi bi-question-circle m-3 " style={{ fontSize: 30 }}></i>
          <i class="bi bi-box-arrow-right m-3 "style={{ fontSize: 30 }}></i>
          
        </div>
      </div>
      <div className="side d-flex  flex-column  ">
       
          <img
            src={farmer}
            alt="farmer"
            style={{
              marginLeft:'8px',
              backgroundColor:'white',
              height: "38px",
              width: "39px",
              marginTop: 20,
              borderRadius: "50%",
              padding:'2px'
              
            }}
          />
        
        <div className="logos">
          <img src={group} alt="group" />
          <i
            className=" bi bi-wallet "
            style={{ color: "white", fontSize: 30,  }}
          ></i>
          <i
            className=" bi bi-cart4 "
            style={{ color: "white", fontSize: 30 }}
          ></i>
          <img src={clipboard} alt="clipboard" />
        </div>
      </div>
    </>
  );
};

export default Navbars;
