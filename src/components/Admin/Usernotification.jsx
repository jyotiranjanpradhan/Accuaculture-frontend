import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Adminpage.css";

const Usernotification = () => {
  const [openModel, setOpenModel] = useState(false);

  const openModels = () => {
    setOpenModel(!openModel);
  };
  return (
    <>
      <div style={{ marginLeft: "280px", marginTop: "7px" }}>
        {/* Heading of Table Page  start */}
        <div className="heading">
          <p className=" headingText d-flex justify-content-center">
            Logged In As Aqua Admin
          </p>
        </div>
        {/* Heading of Table Page End  */}

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
              fontSize: "25px",
              padding: "10px",
              margin: "2px 2px 4px 2px",
            }}
          >
            4
          </p>
        </div>

        {/* Total User Count End */}

        {/* Table start */}

        <div className="parent-div-of-table">
          <table className="Tablestyle table table-hover table-striped">
            <thead style={{ backgroundColor: "#7DE1AF" }}>
              <tr>
                <th
                  className=""
                  scope="col"
                  style={{
                    backgroundColor: "#7CDFAD",
                    borderTopLeftRadius: "7px",
                  }}
                >
                  Sl.No
                </th>
                <th scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  Name
                </th>
                <th scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  Mobile No
                </th>
                <th scope="col" style={{ backgroundColor: "#7CDFAD" }}>
                  E-mail Id
                </th>
                <th
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
              <tr>
                <td>1</td>
                <td>abcthe Bird</td>
                <td>1234567890</td>
                <td>abc@gmail.com</td>
                <td>
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

              <tr>
                <td>4</td>
                <td>the Bird</td>
                <td>3214757349</td>
                <td>abc@gmail.com</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                    style={{
                      textAlign: "cenetr",
                    }}
                  >
                    Check
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table End */}

        {/* Start */}
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
      </div>
      {/* model open */}
      {openModel ? (
        <div className="check-model ">
          <div className="model">
            <div className="heading d-flex justify-content-between ">
              <p style={{marginTop:'10px' ,marginLeft:'30px',fontSize: 20, }}>New User Details</p>
              <i class="bi bi-x-octagon  "  style={{ fontSize: 24}}></i>
            </div>
            <div style={{marginLeft:'20px', marginTop:'30px'}}>
            <div className="name d-flex" >
             
              <p >Name </p>
              <p>: Kanhu Charan</p>
            </div>
            <div className="mobile d-flex">
            <p>Mobile No </p> <p>: 7735432994</p></div>
            <div className="adhar d-flex">
              <p>Aadhaar No</p>
              <p>:121366458556</p>
            </div>
            <div className="email d-flex">
              <p>Email Id</p> <p>: kanhu2551996@gmail.com</p>
            </div>
            <div className="password ">
              <p></p>
              <p>
                
                <div class="form-group d-flex">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </p>
            </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Usernotification;
