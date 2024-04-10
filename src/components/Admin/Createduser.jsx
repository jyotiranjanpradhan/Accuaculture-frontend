import React from "react";
import "./Usernotification.css";


const Createduser = () => {
  return (
    <div>
      <>
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
                <td>the Bird</td>
                <td>1234567890</td>
                <td>abc@gmail.com</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{
                      borderRadius: "16px",
                      fontSize: "20px",
                      verticalAlign: "cenetr",
                    }}
                  >
                    Add Account
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      borderRadius: "16px",
                      fontSize: "20px",
                      verticalAlign: "cenetr",
                      marginLeft: "8px",
                    }}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{
                      borderRadius: "16px",
                      fontSize: "20px",
                      verticalAlign: "cenetr",
                      marginLeft: "8px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Table End */}

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
      </>
    </div>
  );
};

export default Createduser;
