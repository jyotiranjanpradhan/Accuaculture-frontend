import React from 'react'

const Form = ({ toggleForm }) => {
  return (
    <>
      <div
        className="overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
      >
        <div
          className="form-popup"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            position: "relative",
            // width: "300px",
          }}
        >
          <button
            onClick={toggleForm}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            &times;
          </button>

          <form>
            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="deviceid" className="form-label">
                Device ID
              </label>
              <input
                type="text"
                className="form-control"
                id="deviceid"
                placeholder="Enter your Device ID"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="area" className="form-label">
                Area
              </label>
              <input
                type="text"
                className="form-control"
                id="area"
                placeholder="Enter your Area"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="latitude" className="form-label">
                Latitude
              </label>
              <input
                type="text"
                className="form-control"
                id="latitude"
                placeholder="Enter your Latitude"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="longitude" className="form-label">
                Longitude
              </label>
              <input
                type="text"
                className="form-control"
                id="longitude"
                placeholder="Enter your Longitude"
              />
            </div>

            <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="issues" className="form-label">
                Issues
              </label>
              <textarea id="issues" className="form-control" placeholder="Describe any issues"></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
