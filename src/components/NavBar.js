import React from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/">Surreal Estate</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/properties">View Properties</Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property">Add a Property</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
