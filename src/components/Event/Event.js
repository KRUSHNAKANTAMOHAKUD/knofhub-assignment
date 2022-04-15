import React, { useEffect } from "react";
import "./Event.css";
import { useSelector ,useDispatch} from "react-redux";
import { loadMoreEvent } from "../../redux/action";
import { getEventData } from "../../redux/thunk";

const Event = () => {
  const { count = "", events = [] } = useSelector((state) => state.eventData);
  const offset = useSelector((state)=>state.offset)
  const dispatch = useDispatch()
  const handleLoadMore = () => {
    dispatch(loadMoreEvent());
  };
  useEffect(()=>{
    dispatch(getEventData(12,offset,"",false))
  },[offset])

  if (events.length) {
    return (
      <div className="container-event">
        <h1 className="event-count">{count}+ Events</h1>
        <div className="events-flex">
          {events?.map((eventData) => (
            <div className="event-item" key={eventData.event_id}>
              <img
                src="/assets/Group_3843.png"
                className="event-img"
                alt="event"
              />
              <p className="event-name">{eventData?.name}</p>
              <p className="event-type">
                {eventData?.is_free ? "Free" : "Paid"}
              </p>
              <div className="vertical-divider" />
              <p className="event-mode">
                {eventData?.is_virtual ? "Online" : "Offline"}
              </p>
            </div>
          ))}
        </div>
        <div className="event-footer">
          <hr />
          <button className="load-more-btn" onClick={handleLoadMore}>Load More</button>
          <hr />
        </div>
      </div>
    );
  } else {
    return <p>Loading</p>;
  }
};

export default Event;
