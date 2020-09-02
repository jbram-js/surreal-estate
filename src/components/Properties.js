import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import SideBar from "./SideBar";

import "../styles/Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  const { search } = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then(({ data }) => setProperties(data))
      .catch(() =>
        setAlert({ message: "Server error. Please try again later." })
      );
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties">
      <SideBar />
      {properties.map((property) => (
        <div key={property.id} className="item">
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default Properties;
