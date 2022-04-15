import React from "react";
import "./Event.css";

const Event = () => {
  return (
    <div className="container-event">
      <h1>250+ Events</h1>
      <div className="events-flex">
        {[...new Array(50)].map(() => (
          <div className="event-item">
            <img src="/assets/Group 3840.svg" width="150" alt="event" />
            <p>Event Name</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
