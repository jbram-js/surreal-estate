import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar">
      <ul className="sidebar-links">
        <h3>Sort by City</h3>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city":"Manchester"}`}>Manchester</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city":"Liverpool"}`}>Liverpool</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city":"Sheffield"}`}>Sheffield</Link>
        </li>
        <li className="sidebar-links-item">
          <Link to={`/?query={"city":"Leeds"}`}>Leeds</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
