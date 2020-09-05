import React, { useState } from "react";
import axios from "axios";
import Alert from "./Alert";

import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      city: "Manchester",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const postProperty = async () => {
    await axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() => {
        setAlert({
          message: "Property Added",
          isSuccess: true,
        });
        console.log("hello");
      })
      .catch(() => {
        setAlert({
          message: "Server error. Please try again later.",
          isSuccess: false,
        });
      });
  };

  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty();
  };

  const handleFieldChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="AddProperty">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <Alert message={alert.message} success={alert.isSuccess} />
        <label htmlFor="title">
          Description
          <input
            id="title"
            name="title"
            placeholder="Enter property name"
            value={fields.title}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            value={fields.type}
            onChange={handleFieldChange}
            required
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label htmlFor="bedrooms">
          Bedrooms
          <input
            name="bedrooms"
            type="number"
            min={1}
            value={fields.bedrooms}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label htmlFor="bathrooms">
          Bathrooms
          <input
            name="bathrooms"
            type="number"
            min={1}
            value={fields.bathrooms}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            name="price"
            type="number"
            step={1000}
            value={fields.price}
            onChange={handleFieldChange}
            required
          />
        </label>
        <label htmlFor="city">
          City
          <select
            id="city"
            name="city"
            value={fields.city}
            onChange={handleFieldChange}
            required
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={fields.email}
            onChange={handleFieldChange}
            required
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddProperty;
