import React, { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import { getEventData } from "../../redux/thunk";
import { useDispatch } from "react-redux";
import "./SearchEvent.css";

const SearchEvent = () => {
  const dispatch = useDispatch();
  // const [inputValue, setInputValue] = useState("");
  const [params, setParams] = useState({
    limit: 12,
    offset: 0,
    inputValue: "",
    eventType: false,
  });
  useEffect(() => {
    dispatch(
      getEventData(
        params.limit,
        params.offset,
        params.inputValue,
        params.eventType
      )
    );
  }, [params.eventType]);
  const handleSearch = (event) => {
    dispatch(
      getEventData(
        params.limit,
        params.offset,
        params.inputValue,
        params.eventType
      )
    );
  };
  const handleEventType = (event) => {
    setParams({ ...params, eventType: event.target.value });
  };

  return (
    <div className="container">
      <div className="event-details">
        <div className="event">
          <h1 className="heading">Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="event-img">
          <img src="/assets/Group 3840.svg" alt="event icon" />
        </div>
      </div>
      <div className="search">
        <div className="search-field">
          <label id="search">
            <b>Search</b>
          </label>
          <div className="flex-row">
            <input
              type="text"
              // placeholder="Search.."
              name="search"
              className="input-field"
              onChange={(e) =>
                setParams({ ...params, inputValue: e.target.value })
              }
            />
            <button
              type="submit"
              className="search-icon"
              onClick={handleSearch}
            >
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="search-field">
          <label id="search">
            <b>Past Events</b>
          </label>
          <select className="select" onChange={handleEventType}>
            <option>Select Type:</option>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchEvent;
