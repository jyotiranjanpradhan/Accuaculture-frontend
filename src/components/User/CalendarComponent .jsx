import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap"; // Assuming you are using Bootstrap for styling

const CalendarComponent = () => {
  const [events, setEvents] = useState([{}]);
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [eventtodelete, Seteventtodelete] = useState(false);
  const [eventid, setEventid] = useState("");

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    console.log(arg.dateStr);
    setShowModal(true);
  };

  const handelDelete = (arg) => {
    setEventid(arg.event._def.publicId);
    Seteventtodelete(!eventtodelete)
  };
  const deleteEvent = () => {
    const deleteeventdata = {
      Message_id: eventid,
    };
     // Api for delete  and update events
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleAddEvent = () => {
    const newEvent = {
      Mobno:9777703470,
      Message_id: generateUniqueId() + (events.length + 1),
      Message: eventTitle,
      date: selectedDate,
    };

//Add api Here tO poat event
   
    setShowModal(false);
    console.log(newEvent);
  };

  return (
    <>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          dateClick={handleDateClick}
          eventClick={handelDelete}
          events={events}
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              ADD Events <i class="bi bi-calendar-plus"></i>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="eventTitle">
              <Form.Label style={{ fontWeight: "bold" }}>
                Hey I Remember Your Event !{" "}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Event..."
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel<i class="bi bi-x"></i>
            </Button>
            <Button variant="success" onClick={handleAddEvent}>
              Add <i class="bi bi-floppy-fill"></i>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* STARAT Modal for Event delete */}

      {eventtodelete ? (
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
            <div
              className="heading d-flex justify-content-between  "
              style={{ backgroundColor: "#00216e" }}
            >
              <p
                style={{
                  marginTop: "8px",
                  marginLeft: "30px",
                  fontSize: 25,
                  color: "white",
                }}
              >
                DELETE Parameter
              </p>
              <i
                class="bi bi-x-octagon cancel-button-modal "
                style={{ fontSize: 30, color: "red" }}
                onClick={() => {
                  Seteventtodelete(false);
                }}
              ></i>
            </div>
            {/* Modal Content */}
            <div style={{ marginLeft: "20px", marginTop: "30px" }}>
              <div style={{ marginLeft: "25px" }}>
                <p> Hey ! Are you sure to Delete This Event ?</p>
              </div>

              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn btn-danger px-3 py-2 text-center fs-sm fw-bold rounded-pill"
                  style={{
                    textAlign: "cenetr",
                    marginRight: "15px",
                  }}
                  onClick={() => {deleteEvent();
                    Seteventtodelete(false);
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
                  onClick={() => {
                    Seteventtodelete(!eventtodelete);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* DeleteButton Modal End */}

      {/*  END Modal for Event delete */}
    </>
  );
};

export default CalendarComponent;
