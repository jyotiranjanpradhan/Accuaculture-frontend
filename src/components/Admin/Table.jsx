import React from "react";
import "bootstrap-icons/font/bootstrap-icons";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Table.css";

const Table = () => {
  return (
    <>
    <div className="bar">
    <div className="progress custom-progress rounded" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar custom-progress-bar" style={{ width: '100%' , paddingRight:'20px'}}></div>

</div>
    </div>
    <div className="parent-div-of-table">
      <table className="Tablestyle table table-striped">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
            <td>
              <button type="button" class="btn btn-primary">
                Primary
              </button>{" "}
              <button type="button" class="btn btn-secondary">
                Secondary
              </button> {" "}
              <button type="button" class="btn btn-warning">
                Warning
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Table;
