import React, { useState } from "react";
import NumericInput from "react-numeric-input";
import "../styles/AddProperty.css";

const AddProperty = (Props) => {
  const initialState = {
    fields: {
      title: "",
      type: "Flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 50000,
      city: "Manchester",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      Add Property Page
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">
          Title
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
            placeholder="Enter number of bedrooms"
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
            placeholder="Enter number of bathrooms"
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
            placeholder="Enter property price"
            step={500}
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
