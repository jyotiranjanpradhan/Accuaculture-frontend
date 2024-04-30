import React, { useContext, useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import latitude from "./Constant img/latitude.png";
import longitude from "./Constant img/longitude.png";
import "./Adminpage.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import success from "./Constant img/success.gif";
import { AdminContext } from "../../App";
import axios from "axios";

const Usernotification = () => {
  const [openModel, setOpenModel] = useState(false);
  const [nextmodel, setNextModel] = useState(false);
  const [devicetype, setDeviceType] = useState(false);
  const [deviceadd, setDeviceAdd] = useState(false);
  const [showmap, setShowmap] = useState(false);
  const [completedeviceadd, setCompliteDeviceAdd] = useState(false);
  //context
  const { isSidebarOpen } = useContext(AdminContext);

  const [totaluser, setTotalUser] = useState(0);
  const [regestereduser, setRegestereduser] = useState([]);
  const [usernotificationerror, setUserNotificationerror] = useState("");

  const userNotificationfetch = async () => {
    try {
      const responce = await axios.get(
        "http://4.188.244.11/register_view/9777171033/"
      );
      setTotalUser(responce.data.items.length);
      setRegestereduser(responce.data.items);

      console.log(responce.data.items);
    } catch (error) {
      console.log(error);
      setUserNotificationerror(error);
    }
  };

  useEffect(() => {
    userNotificationfetch();
  }, []);

  const openModels = () => {
    setOpenModel(!openModel);
  };

  const opennextmodel = () => {
    setNextModel(!nextmodel);
  };

  const opendevicetypemodel = () => {
    setDeviceType(!devicetype);
  };
  const adddevice = () => {
    setDeviceAdd(!deviceadd);
  };
  const mapshow = () => {
    setShowmap(!showmap);
  };

  const completlyadddevice = () => {
    setCompliteDeviceAdd(!completedeviceadd);
    setTimeout(() => {
      setCompliteDeviceAdd(false);
    }, 1000);
  };

  const [devicetypes, setDevicetypes] = useState([]);

  async function seedevicetype() {
    try {
      const response = await axios.get(
        "http://20.244.51.20:8000/devicetype_view/"
      );
      setDevicetypes(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  //Here Content can take lat and lng props from backend
  const center = {
    lat: 10.5937,
    lng: 50.9629,
  };

  //Height and Width for Google Map
  const containerStyle = {
    width: "900px",
    height: "100%",
  };

  return (
    <>
      <div
        style={{
          marginLeft: isSidebarOpen ? "280px" : "110px",
          marginTop: "7px",
        }}
      >
        {/* Total User Count Start */}
        <div className="userCount shadow">
          <div>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "25px",
                padding: "10px",
                margin: "2px 2px 4px 2px",
                backgroundColor: "#7DE0AE",
                borderRadius: "20px",
              }}
            >
              Total User Requested
            </p>
          </div>
          <p
            style={{
              display: "flex" ,
              justifyContent: "center",
              fontSize: "30px",
              padding: "10px",
              fontWeight: "bold",
              margin: "2px 2px 4px 2px",
            }}
          >
            { totaluser}
          </p>
        </div>

        {/* Total User Count End */}

        {/* Table start */}

        <div className="parent-div-of-table">
          <table className="table table-bordered table-striped table-hover table-design">
            <thead style={{ backgroundColor: "#7DE1AF" }}>
              <tr>
                <th
                  className="text-center"
                  scope="col"
                  style={{
                    backgroundColor: "#7CDFAD",
                    borderTopLeftRadius: "7px",
                  }}
                >
                  Sl.No
                </th>
                <th className="text-center"  scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  Name
                </th>
                <th className="text-center"  scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  Mobile No
                </th>
                <th className="text-center"  scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  E-mail Id
                </th>
                <th className="text-center" 
                  scope="col"
                  style={{
                    backgroundColor: "#7CDFAD",
                    borderTopRightRadius: "7px",
                  }}
                >
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {regestereduser.map((data, index) => (
                <tr key={index}>
                  <td className="text-center" >{index + 1}</td>
                  <td className="text-center" >{data[0]}</td>
                  <td className="text-center" >{data[1]}</td>
                  <td className="text-center" >{data[2]}</td>
                  <td className="text-center" >
                    <button
                      type="button"
                      className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                      style={{
                        textAlign: "cenetr",
                      }}
                      onClick={openModels}
                    >
                      Check
                    </button>
                  </td>
              
              
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table End */}
        {/* Error Handel  Message*/}
        {usernotificationerror ? (
          <>
            {" "}
            <div>
              <p
                style={{
                  fontSize: "25px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                Some Error Occured , Please Stay Tuned !
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* Error Handel Message END */}

        {/* Rdirect Start */}
        <div className="redirects">
          <button
            type="button"
            className="btn "
            style={{
              borderRadius: "16px",
              fontSize: "17px",
              verticalAlign: "cenetr",
              marginRight: "10px",
              height: "43px",
              backgroundColor: "#5F9EFB",
              color: "white",
            }}
          >
            Previous
          </button>{" "}
          <p style={{ marginTop: "09px" }}>Page 1 of 1 </p>
          <button
            type="button"
            className="btn btn-success"
            style={{
              borderRadius: "19px",
              fontSize: "17px",
              verticalAlign: "cenetr",
              height: "43px",
              marginLeft: "4px",
            }}
          >
            Next
          </button>
        </div>
        {/* Redirect End */}
      </div>

      {/* model Start */}
      {openModel ? (
        <div className="check-model " >
          <div className="model" style={{ fontSize: "23px", marginTop: "10%" }}>
            <div className="heading d-flex justify-content-between ">
              <p
                style={{ marginTop: "10px", marginLeft: "30px", fontSize: 25 }}
              >
                New User Details
              </p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30 }}
                onClick={openModels}
              ></i>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <div className="name d-flex">
                <p>Name </p>
                <p style={{ marginLeft: "25px" }}>: Kanhu Charan</p>
              </div>
              <div className="mobile d-flex">
                <p>Mobile No </p>{" "}
                <p style={{ marginLeft: "25px" }}>: 7735432994</p>
              </div>
              <div className="adhar d-flex">
                <p>Aadhaar No</p>
                <p style={{ marginLeft: "25px" }}>:121366458556</p>
              </div>
              <div className="email d-flex">
                <p>Email Id</p>{" "}
                <p style={{ marginLeft: "25px" }}>: kanhu2551996@gmail.com</p>
              </div>
              <div className="password ">
                <p>
                  <div class="form-group d-flex">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      style={{ marginLeft: "25px", width: "400px" }}
                    />
                  </div>
                </p>
              </div>

              <div className="d-flex justify-content-end mt-5 p-2">
                <button
                  type="button"
                  className="btn btn-success px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "center",
                    marginRight: "15px",
                  }}
                  onClick={() => {
                    openModels();
                    opennextmodel();
                  }}
                >
                  Next
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "25px",
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Model Close */}

      {/* start model for on click of next of previos model */}
      {nextmodel ? (
        <div className="check-model ">
          <div
            className="model"
            style={{ fontSize: "23px", marginTop: "1px", height: "auto" }}
          >
            <div className="heading d-flex justify-content-between ">
              <p
                style={{ marginTop: "10px", marginLeft: "30px", fontSize: 25 }}
              >
                New User Details
              </p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30 }}
                onClick={opennextmodel}
              ></i>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <div className="d-flex">
                <label for="formGroupExampleInput" style={{ width: "250px" }}>
                  {" "}
                  <img
                    src={latitude}
                    style={{ width: "20px", marginBottom: "5px" }}
                    alt="Latitude logo"
                  ></img>{" "}
                  Latitude
                </label>
                <label for="formGroupExampleInput">
                  <img
                    src={longitude}
                    style={{
                      width: "20px",
                      marginBottom: "5px",
                      marginRight: "2px",
                    }  } alt="Longitude logo"
                  ></img>
                  Longitude
                </label>
              </div>

              <div className="d-flex">
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Latitude"
                  style={{ width: "200px" }}
                ></input>

                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Longitude"
                  style={{ width: "200px", marginLeft: "50px" }}
                ></input>
              </div>
              <div style={{ marginTop: "20px" }}>
                <label for="formGroupExampleInput">
                  <i
                    class="bi bi-person-vcard"
                    style={{ fontSize: "20px", marginRight: "2px" }}
                  ></i>
                  Account Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter AccountName"
                  style={{ width: "200px" }}
                ></input>
              </div>

              <div className="d-flex  mt-2">
                <button
                  type="button"
                  className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "center",
                    marginRight: "15px",
                  }}
                >
                  <i class="bi bi-search" style={{ marginRight: "3px" }}></i>
                  Search
                </button>
                <button
                  type="button"
                  className="btn btn-success px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "25px",
                  }}
                >
                  Submit
                </button>
              </div>

              <div style={{ marginTop: "20px", height: "400px" }}>
                <GoogleMapdata
                  containerStyle={containerStyle}
                  lat={center.lat}
                  lng={center.lng}
                />
              </div>

              <div
                className="d-flex justify-content-end mt-2 "
                style={{ padding: "5px" }}
              >
                <button
                  type="button"
                  className="btn btn-success px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "15px",
                  }}
                  onClick={() => {
                    opennextmodel();
                    opendevicetypemodel();
                  }}
                >
                  Next
                </button>
                <button
                  type="button"
                  className="btn btn-danger px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "25px",
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* End model for on click of "next" of previos model */}

      {/* start Modal  on click of "next" of previos modal */}

      {devicetype ? (
        <div className="check-model ">
          <div
            className="model"
            style={{
              fontSize: "23px",
              marginTop: "1px",
              width: "650px",
              height: "auto",
            }}
          >
            {/* Modal Heading */}
            <div className="heading d-flex justify-content-between  ">
              <p style={{ marginTop: "8px", marginLeft: "30px", fontSize: 25 }}>
                New User Device
              </p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30 }}
                onClick={opendevicetypemodel}
              ></i>
            </div>
            {/* Modal Content */}
            <div
              style={{
                marginLeft: "20px",
                marginTop: "30px",
                marginRight: "10px",
              }}
            >
              <table class="table table-hover table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Device Type</th>
                    <th scope="col">No. of Device</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monitoring</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              <button
                type="button"
                className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                style={{
                  textAlign: "cenetr",
                  marginRight: "15px",
                }}
                onClick={()=>{adddevice();
                  seedevicetype();}}
              >
                Add Device
              </button>

              <div className="d-flex justify-content-end ">
                <button
                  type="button"
                  className="btn btn-success px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "15px",
                    margin: "10px 15px 10px 0",
                  }}
                  onClick={() => {
                    completlyadddevice();
                    opendevicetypemodel();
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* End Modal  on click of "next" of previos modal */}

      {/* start Modal  on click of "Add Device" of previos modal */}

      {deviceadd ? (
        <div className="check-model ">
          <div
            className="model"
            style={{
              fontSize: "20px",
              marginTop: "1px",
              width: "650px",
              height: "auto",
            }}
          >
            {/* Modal Heading */}
            <div className="heading d-flex justify-content-between  ">
              <p style={{ marginLeft: "30px", fontSize: 25 }}>Device List</p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30 }}
                onClick={adddevice}
              ></i>
            </div>
            {/* Modal Content */}
            <div
              style={{
                marginLeft: "20px",
                marginTop: "30px",
                marginRight: "10px",
              }}
            >
              <label for="formGroupExampleInput">Device Name</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Device Name"
                style={{ width: "400px" }}
              ></input>

              <div className="d-flex mt-2">
                <label for="formGroupExampleInput" style={{ width: "250px" }}>
                  Device List
                </label>
                <label for="formGroupExampleInput">Device Location</label>
              </div>

              <div className="d-flex">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  style={{ width: "200px" }}
                >
                  <option selected>select Device Type</option>
                  {devicetypes.map((device, index) => (
                      <option key={index} value={device}>
                        {device}
                      </option>
                    ))}
                </select>

                <input
                  type="text"
                  class="form-control"
                  placeholder="Device...."
                  style={{ width: "200px", marginLeft: "50px" }}
                ></input>
              </div>

              <button
                type="button"
                className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                style={{
                  textAlign: "cenetr",
                  marginRight: "15px",
                }}
                onClick={mapshow}
              >
                Add Device Location
              </button>
              <button
                type="button"
                className="btn  btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                style={{
                  textAlign: "cenetr",
                  marginRight: "15px",
                  margin: "10px 15px 10px 0",
                }}
              >
                Add Device
              </button>

              {showmap ? (
                <>
                  <div className="d-flex">
                    <input
                      class="form-control mr-sm-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      style={{ width: "200px" }}
                    />
                    <button
                      class="btn btn-outline-success my-2 my-sm-0"
                      type="submit"
                      style={{ marginLeft: "10px" }}
                    >
                      Search
                    </button>
                  </div>

                  <div
                    style={{
                      marginTop: "1px",
                      height: "400px",
                      width: "200px",
                    }}
                  >
                    {/* <GoogleMapdata
                      containerStyle={containerStyle}
                      lat={center.lat}
                      lng={center.lng}
                    /> */}
                    <google-map
                      height="300px"
                      width="300px"
                      // zoom="3"
                      center=""
                    ></google-map>
                  </div>
                </>
              ) : null}
            </div>

            {/* Modal Content End */}
          </div>
        </div>
      ) : null}
      {/* End Modal  on click of "Add Device" of previos modal */}

      {/* device complete add Modal Start */}

      {completedeviceadd ? (
        <div className="check-model ">
          <div
            className="model"
            style={{ fontSize: "23px", width: "600px", height: "300px" }}
          >
            <img
              src={success}
              alt="successful"
              style={{ width: "200px", marginLeft: "30%" }}
            />
            <p style={{ marginLeft: "25%" }}>Device Added Successfully</p>
          </div>
        </div>
      ) : null}
      {/*device complete add Modal End */}
    </>
  );
};

export default Usernotification;

const GoogleMapdata = ({ containerStyle, lat, lng }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
        zoom={15}
      ></GoogleMap>
    </LoadScript>
  );
};
