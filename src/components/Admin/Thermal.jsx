import React from "react";

const Thermal = () => {
  return (
    <>
      {/* Heading of Table Page  start */}
      <div className="heading">
        <p className=" headingText d-flex justify-content-center">
          Logged In As Aqua Admin
        </p>
      </div>
      {/* Heading of Table Page End  */}

      {/* Start option */}

      <div style={{ marginLeft: "333px" }}>
        <div class="dropdown show">
          <a
            class="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" style={{ backgroundColor: "black" }}>
              Action
            </a>
            <a class="dropdown-item">Another action</a>
            <a class="dropdown-item">Something else here</a>
          </div>
        </div>
      </div>

      {/* End Option */}

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
                Original
              </th>

              <th
                scope="col"
                style={{
                  backgroundColor: "#7CDFAD",
                  borderTopRightRadius: "7px",
                }}
              >
                Thermal
              </th>
            </tr>
          </thead>
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
  );
};

export default Thermal;
