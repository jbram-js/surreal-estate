import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link to="/" className="link">
            <FontAwesomeIcon icon={faBuilding} className="building-icon" />
            Surreal Estate
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/properties" className="link">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link to="/add-property" className="link">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
