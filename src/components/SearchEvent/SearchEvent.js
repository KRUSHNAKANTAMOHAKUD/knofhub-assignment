import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import "./SearchEvent.css";

const SearchEvent = () => {
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
              placeholder="Search.."
              name="search"
              className="input-field"
            />
            <button type="submit" className="search-icon">
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="search-field">
          <label id="search">
            <b>Past Events</b>
          </label>
          <select className="select">
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
