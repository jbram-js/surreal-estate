import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

import "../styles/SideBar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { search } = useLocation();

    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });

    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };

    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-list">
        <h3>Filter by city</h3>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("query", { city: "Manchester" })}>
            Manchester
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("query", { city: "Liverpool" })}>
            Liverpool
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("query", { city: "Sheffield" })}>
            Sheffield
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
        </li>
        <h3>Sort by</h3>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("sort", { price: 1 })}>
            Price Ascending
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link to={buildQueryString("sort", { price: -1 })}>
            Price Descending
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
