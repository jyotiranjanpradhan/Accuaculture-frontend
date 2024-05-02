import React, { useContext, useEffect, useRef, useState } from "react";
import "../Adminpage.css";
import { Link } from "react-router-dom";
import { AdminContext } from "../../../App";
import axios from "axios";
import { GoogleMap, LoadScript , Marker, InfoWindow } from "@react-google-maps/api";
import latitude from "../Constant img/latitude.png";
import longitude from "../Constant img/longitude.png";

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

const Createduser = () => {
  const [openModel, setOpenModel] = useState(false);
  const [deletebutton, setDeleteButton] = useState(false);
  const [totaluserrequested, setTotaluserrequested] = useState(0);
  const [createdusererror, setCreatedusdererror] = useState("");
  const [requesteduser, setRequesteduser] = useState([]);
  const [currentusermobilenumber, setCurrentusermobilenumber] = useState("");

  const openModels = () => {
    setOpenModel(!openModel);
  };
  const openDeleteModels = () => {
    setDeleteButton(!deletebutton);
  };
  //context
  const { isSidebarOpen } = useContext(AdminContext);

  const createduserfetch = async () => {
    try {
      const response = await axios.get(
        "http://4.188.244.11/user_view/9777171033/"
      );
      setTotaluserrequested(response.data.items.length);
      setRequesteduser(response.data.items);
    } catch (error) {
      setCreatedusdererror(error);
    }
  };

  const deleteuserfetch = async (mob) => {
    try {
      console.log(mob);
      const response = await axios.post(`http://4.188.244.11/user_delete/`, {
        mobileno: mob,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    createduserfetch();
  }, []);

  //Here Content can take lat and lng props from backend
  const [latitudes, setLatitude] = useState(20.2961); // Initial latitude
  const [longitudes, setLongitude] = useState(85.8245); // Initial longitude

  function searchlatlng(lats, lngs) {
    setLatitude(
      lats === null || lats === undefined || lats === "" ? "20.2961" : lats
    );
    setLongitude(
      lngs === null || lngs === undefined || lngs === "" ? "85.8245" : lngs
    );
  }

  //Height and Width for Google Map
  const containerStyle = {
    width: "900px",
    height: "100%",
  };


//variable for add account 
const latt=useRef(null);
const lngg=useRef(null);
const accname=useRef(null);

// const data={
//   latttt:parseFloat( latt.current.value),
//   lngggg:parseFloat( lngg.current.value),
//   accnameee:accname.current.value
// }
// write api for add acount


  return (
    <>
      {/* Page Start */}
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
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
              padding: "10px",
              fontWeight: "bold",
              margin: "2px 2px 4px 2px",
            }}
          >
            {totaluserrequested}
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
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "#7CDFAD" }}
                >
                  Name
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "#7CDFAD" }}
                >
                  Mobile No
                </th>
                <th
                  className="text-center"
                  scope="col"
                  style={{ backgroundColor: "#7CDFAD" }}
                >
                  E-mail Id
                </th>
                <th
                  className="text-center"
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
              {requesteduser.map((data, index) => (
                <tr key={index + 1}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{data[0]}</td>
                  <td className="text-center">{data[1]}</td>
                  <td className="text-center">{data[2]}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn  btn-success px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                      style={{
                        textAlign: "cenetr",
                      }}
                      onClick={openModels}
                    >
                      Add Account
                    </button>
                    <Link to={`/createduser/useraccounts/${data[1]}`}>
                      <button
                        type="button"
                        className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                        style={{
                          textAlign: "cenetr",
                          marginLeft: "8px",
                        }}
                      >
                        View
                      </button>
                    </Link>

                    <button
                      type="button"
                      className="btn  btn-danger px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                      style={{
                        textAlign: "cenetr",
                        marginLeft: "8px",
                      }}
                      onClick={() => {
                        openDeleteModels();
                        setCurrentusermobilenumber(data[1]);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Table End */}

        {/* Error Handel Message start */}
        {createdusererror ? (
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
                No User Regesterd Yet... !
              </p>
            </div>
          </>
        ) : (
          <></>
        )}
        {/* Error Handel Message END */}

        {/* Redirect Start */}
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
      {/* Page End */}

      {/* start model for on click of next of previos model */}
      {openModel ? (
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
                onClick={openModels}
              ></i>
            </div>
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <div className="d-flex" style={{height:'49px'}}>
                <label for="formGroupExampleInput" style={{ width: "250px" }}>
                  {" "}
                  <img
                    src={latitude}
                    style={{ width: "20px", marginBottom: "5px" }}
                    alt="Latitude logo"
                  ></img>{" "}
                  Latitude
                </label>
                <label for="formGroupExampleInput" style={{ width: "250px" }}>
                  <img
                    src={longitude}
                    style={{
                      width: "20px",
                      marginBottom: "5px",
                      marginRight: "2px",
                    }}
                    alt="Longitude logo"
                  ></img>
                  Longitude
                </label>

                <label for="formGroupExampleInput"style={{ width: "250px" }}>
                  <i
                    class="bi bi-person-vcard"
                    style={{ fontSize: "20px", marginRight: "2px" }}
                  ></i>
                  Account Name
                </label>
                
              </div>

              <div className="d-flex">
                <input
                ref={latt}
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Latitude"
                  style={{ width: "200px" }}
                ></input>

                <input
                ref={lngg}
                  type="text"
                  class="form-control"
                  id="formGroupExampleInput"
                  placeholder="Enter Longitude"
                  style={{ width: "200px", marginLeft: "50px" }}
                ></input>

                
                  <input
                  ref={accname}
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter AccountName"
                    style={{ width: "200px", marginLeft: "50px" }}
                  ></input>
                
                
                <button
                    type="button"
                    className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                    style={{
                      textAlign: "center",
                      marginLeft: "50px" 
                    }}
                    onClick={()=>{
                      searchlatlng(latt.current.value,lngg.current.value)
                    }}
                  >
                    <i class="bi bi-search" style={{ marginRight: "3px" }}></i>
                    Search
                  </button>

              </div>
         

              <div style={{ marginTop: "20px", height: "400px" }}>
                <GoogleMapdata
                  containerStyle={containerStyle}
                  lat={latitudes}
                  lng={longitudes}
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
                  onClick={() => {}}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* Account create models  of previos model */}
      {/* Delete button Modal Start */}

      {deletebutton ? (
        <div className="check-model ">
          <div
            className="model"
            style={{
              fontSize: "23px",
              width: "600px",
              height: "200px",
            }}
          >
            {/* Modal Heading */}
            <div className="heading d-flex justify-content-between  ">
              <p
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontSize: 25,
                }}
              >
                Delete Account
              </p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30 }}
                onClick={openDeleteModels}
              ></i>
            </div>
            {/* Modal Content */}
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <div style={{ marginLeft: "25px" }}>
                <p> Are you sure to Delete this User Permanently ?</p>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn btn-danger px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "15px",
                  }}
                  onClick={() => {
                    deleteuserfetch(currentusermobilenumber);
                    openDeleteModels();
                    setTimeout(() => {
                      createduserfetch();
                      setCurrentusermobilenumber("");
                    }, 1500);
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="btn btn-warning px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "15px",
                  }}
                  onClick={openDeleteModels}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* DeleteButton Modal End */}
    </>
  );
};

export default Createduser;
