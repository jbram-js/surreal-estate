/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faPoundSign,
  faPaperPlane,
  faMapPin,
} from "@fortawesome/free-solid-svg-icons";

import "../styles/PropertyCard.css";

const PropertyCard = ({
  title,
  type,
  bedrooms,
  bathrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="PropertyCard">
      <img
        className="placeholder-img"
        src="https://picsum.photos/id/1040/300/200"
        alt="placeholder"
      />
      <div className="property-info">
        <div className="property-items">{title}</div>
        <div className="property-items">{type}</div>
        <div className="property-info">
          <FontAwesomeIcon icon={faBed} />
          {bedrooms}
        </div>
        <div className="property-info">
          <FontAwesomeIcon icon={faBath} />
          {bathrooms}
        </div>
        <div className="property-info">
          <FontAwesomeIcon icon={faPoundSign} />
          {price}
        </div>
        <div className="property-info">
          <FontAwesomeIcon icon={faMapPin} />
          {city}
        </div>
        <a href={`mailto:${email}`}>
          <button className="email-to-button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Email
          </button>
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
