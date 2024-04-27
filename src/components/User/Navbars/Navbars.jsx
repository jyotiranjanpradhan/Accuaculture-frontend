import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import farmer from "../usersimage/farmer.png";
import group from "../usersimage/group.png";
import clipboard from "../usersimage/ClipboardMinus.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbars.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
const Navbars = ({ handleToggle }) => {
  //Variable visible and hide of account button of sidenavbar
  const [accountvisible, setaccountvisible] = useState(false);
  // variable for visible and hide of analatic button of sidenavbar
  const [analyticvisible, setAnalyticVisible] = useState(false);
  // variable for  input field open and close of topnavbar
  const [showInput, setShowInput] = useState(false);

  return (
    <>
      {/* Top Navbar start */}

      <div className=" shadow-lg topnavbar h-auto  ">
        <div className=" d-flex  justify-content-end align-items-center bg-white ">
          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={{ border: "none" }}>
              <i
                className=" img1 fa-solid fa-chart-line fs-3"
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                width: "270px",
                marginTop: "20px",
              }}
            >
              <>
                {/* START Logic  for adding input by buttotn click field  */}
                <button
                  style={{
                    width: "100%",
                    borderRadius: "30px 10px",
                    backgroundColor: "#7ee2b0",
                    fontSize: "20px",
                  }}
                  onClick={() => {
                    setShowInput(!showInput);
                  }}
                >
                  Add Labels
                </button>
                {showInput && (
                  <div style={{ zIndex: "10" }}>
                    <Form.Select
                      aria-label="Default select example"
                      style={{
                        marginTop: "8px",
                        marginLeft: "8px",
                        width: "93%",
                        height: "34px",
                      }}
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                    <div className="p-2 d-flex justify-content-between">
                      <input
                        type="text"
                        className="form-control  "
                        id="inlineFormInput"
                        placeholder="Add Your Labels....."
                        style={{
                          width: "80%",
                          height: "34px",
                        }}
                      ></input>

                      <button
                        type="button"
                        className="btn btn-success px-0 py-0 text-center   "
                        style={{
                          textAlign: "cenetr",
                          height: "34px",
                          width: "45px",
                        }}
                        onClick={() => {
                          setShowInput(!showInput);
                        }}
                      >
                        <i
                          class="bi bi-plus fw-bold"
                          style={{
                            fontSize: "25px",
                            cursor: "pointer",
                            display: "contents",
                          }}
                        ></i>
                      </button>
                    </div>
                  </div>
                )}
                {/* END Logic  for adding input field  */}

                <div
                  className="d-flex flex-column justify-content-between p-2 py-0 pt-1"
                  
                >
                  {/* Toggle switches for metrics */}
                  {["Current", "Voltage", "pH", "ORP", "DO", "TDS"].map(
                    (metric) => (
                      <div
                        key={metric}
                        className="d-flex justify-content-between p-2 py-0 pt-1"
                        style={{ height: "39px" }}
                      >
                        {/* Wrap the elements in a div */}
                        <p style={{ fontSize: "18px", fontWeight: "500" }}>
                          {metric}
                        </p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            style={{ fontSize: "20px" }}
                            onChange={(e) =>
                              handleToggle(`toggle${metric}`, e.target.checked)
                            }
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="transparent" style={{ border: "none" }}>
              <i
                className="img1 bi bi-diagram-3-fill "
                style={{ fontSize: 30 }}
              ></i>
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                borderRadius: "10px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                marginTop: "-5px",
                width: "270px",
                marginTop: "10px",
              }}
            >
              <>
                <div className="d-flex justify-content-between p-2">
                  <div>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>ID:</span> 545454542
                    </p>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>Dev_Name:</span> Test_1
                    </p>
                  </div>

                  <div
                    className=" form-check form-switch"
                    style={{ fontSize: "x-large" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <hr className="my-0 text-secondary" />

                <div className="d-flex justify-content-between p-2">
                  <div>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>ID:</span> 545454542
                    </p>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>Dev_Name:</span> Test_1
                    </p>
                  </div>

                  <div
                    className=" form-check form-switch"
                    style={{ fontSize: "x-large" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <hr className="my-0 text-secondary" />

                <div className="d-flex justify-content-between p-2">
                  <div>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>ID:</span> 545454542
                    </p>
                    <p className="mb-0">
                      <span style={{ fontWeight: 500 }}>Dev_Name:</span> Test_1
                    </p>
                  </div>

                  <div
                    className=" form-check form-switch"
                    style={{ fontSize: "x-large" }}
                  >
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                  </div>
                </div>
                <hr className="my-0 text-secondary" />
              </>
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
            height: "45px",
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
            onClick={() => {
              setaccountvisible(!accountvisible);
            }}
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          {accountvisible && (
            <>
              <Dropdown drop="end">
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "40px" }}
                >
                  <i
                    className="sideimg bi bi-person-gear"
                    style={{
                      color: "white",
                      fontSize: 30,
                      padding: "5px ",
                      borderRadius: "4px",
                      display: "flex",
                      height: "auto",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  className="dropclass"
                  style={{ fontSize: "15px", fontWeight: "500" }}
                >
                  <div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Name :</p>
                      <p>hrfsdihjeojf</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Address :</p>
                      <p>puri</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2 ">
                      <p>No Of Devices :</p>
                      <p>1</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Opex :</p>
                      <p>hrfsd</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-2">
                      <p>Capex :</p>
                      <p>hrfsd</p>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown drop="end" style={{ top: "1px" }}>
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "40px" }}
                >
                  <i
                    className="sideimg bi bi-person-gear"
                    style={{
                      color: "white",
                      fontSize: 30,
                      padding: "5px ",
                      borderRadius: "4px",
                      display: "flex",
                      height: "auto",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropclass">
                  <Dropdown.Item>Action 1</Dropdown.Item>
                  <Dropdown.Item>Action 2</Dropdown.Item>
                  <Dropdown.Item>Action 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          )}
          <i
            className=" sideimg bi bi-wallet "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          <i
            className=" sideimg bi bi-cart4 "
            style={{
              color: "white",
              fontSize: 30,
              padding: "5px",
              borderRadius: "4px",
              height: "45px",
            }}
          ></i>
          <img
            className="sideimg"
            src={clipboard}
            alt="clipboard"
            style={{ padding: "7px", borderRadius: "4px", height: "45px" }}
            onClick={() => {
              setAnalyticVisible(!analyticvisible);
            }}
          />
          {analyticvisible && (
            <>
              <Dropdown drop="end">
                <Dropdown.Toggle
                  variant="transparent"
                  style={{ border: "none", height: "45px" }}
                >
                  <i
                    className=" sideimg bi bi-file-earmark-plus "
                    style={{
                      color: "white",
                      fontSize: 27,
                      padding: "5px",
                      borderRadius: "4px",
                      display: "flex",
                    }}
                  ></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropclass">
                  <Dropdown.Item
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <i
                      className=" sideimg fa-solid fa-fish-fins"
                      style={{ alignSelf: "center" }}
                    ></i>
                    Fish/Shrimp{" "}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="d-flex justify-content-between"
                    style={{ fontWeight: "500" }}
                  >
                    <i
                      className="sideimg bi bi-droplet-half"
                      style={{ alignSelf: "center" }}
                    >
                      {" "}
                    </i>
                    Waterbody{" "}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <i
                className=" sideimg fa-solid fa-user-doctor "
                style={{
                  color: "white",
                  fontSize: 25,
                  padding: "5px",
                  borderRadius: "4px",
                  height: "37px",
                }}
              ></i>
              <i
                className=" sideimg bi bi-capsule-pill "
                style={{
                  color: "white",
                  fontSize: 25,
                  padding: "5px",
                  borderRadius: "4px",
                  height: "40px",
                }}
              ></i>
            </>
          )}
        </div>
      </div>

      {/* SideNavbar End */}
    </>
  );
};

export default Navbars;
