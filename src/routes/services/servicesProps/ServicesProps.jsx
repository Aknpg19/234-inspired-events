import React from "react";
import "../servicesProps/ServicesProps.css";

const ServicesProps = ({ title, description, img }) => {

  return (
    <div className="props_card">
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Book Now</button>
    </div>
  );
};

export default ServicesProps;
