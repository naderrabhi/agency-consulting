import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="services--page_content">
    <div className="services--content_info">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <Link to={service.path}>
        <button className="btn--costum btn--costum_hover">
            En savoir plus
        </button>
        </Link>
    </div>
    </div>
  );
};

export default ServiceCard;
