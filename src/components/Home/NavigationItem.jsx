import React from "react";
import { Link } from "react-router-dom";

const NavigationItem = ({ title, link }) => {
  return (
    <Link to={link}>
      <p className="text-blue-600 font-medium px-5">{title}</p>
    </Link>
  );
};

export default NavigationItem;
