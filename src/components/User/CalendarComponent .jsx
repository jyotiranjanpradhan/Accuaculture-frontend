import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Modal, Button, Form } from 'react-bootstrap'; // Assuming you are using Bootstrap for styling

const CalendarComponent = () => {
  const [events, setEvents] = useState([{}]);
  const [showModal, setShowModal] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    console.log(arg.dateStr);
    setShowModal(true);
  };

  const handleEventClick = (arg) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      const updatedEvents = events.filter((event) => event.id !== arg.event.id);
      setEvents(updatedEvents);
    }
  };

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  };

  const handleAddEvent = () => {
    const newEvent = { id: generateUniqueId() + (events.length + 1), title: eventTitle, start: selectedDate };
    setEvents([...events, newEvent]);
    setShowModal(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        events={events}
      />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title> ADD Events <i class="bi bi-calendar-plus"></i> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="eventTitle">
            <Form.Label style={{fontWeight:'bold'}}>Hey I Remember Your Event !  </Form.Label>
            <Form.Control type="text" placeholder="Enter Your Event..." value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel<i class="bi bi-x"></i></Button>
          <Button variant="success" onClick={handleAddEvent}>Add <i class="bi bi-floppy-fill"></i></Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalendarComponent;
