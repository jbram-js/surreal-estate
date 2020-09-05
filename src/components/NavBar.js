import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import FacebookLogin from "react-facebook-login";

import "../styles/NavBar.css";

const NavBar = ({ onLogin, userID, onLogout }) => {
  const logout = (
    <button className="facebook-button" type="button" onClick={onLogout}>
      Logout
    </button>
  );
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
      {userID && logout}
      {!userID && (
        <FacebookLogin
          appId="324036359021277"
          fields="name,email,picture"
          callback={(res) => onLogin(res)}
          cssClass="my-facebook-button-class"
          textButton="Login with Facebook"
          alt="Login with Facebook"
        />
      )}
    </div>
  );
};

export default NavBar;
